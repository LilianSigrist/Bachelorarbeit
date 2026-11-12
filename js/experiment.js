/* =====================================================================
   ABLAUF DER STUDIE (jsPsych 8)
   Normalerweise musst du hier nichts ändern. Texte stehen in texte.js,
   Einstellungen in config.js, Anleitungen in anleitungen.js.

   Ablauf gemäss Ethikantrag 2.2:
     1. Technische Prüfung (Computer, Fenstergrösse)
     2. Studieninformation und Einverständnis
     3. Angaben zur Person (Alter, Geschlecht, Wohnland, Muttersprache) und Brettspielaffinität
     4. Drei Spielanleitungen (lesen, Verständlichkeit, Cognitive Load, Verständnisfragen)
     5. Lesefertigkeit (SLS-Berlin)
     6. Arbeitsgedächtnis (Word Span Task)
     7. Daten speichern, Abschlussseite mit Link zur Verlosung

   Test-Links:
     index.html?test=1            -> speichert nichts online, CSV-Download am Ende
     index.html?test=1&gruppe=5   -> Sequenzgruppe 5 erzwingen
   ===================================================================== */

const STUDIEN_VERSION = "0.1";
const URL_PARAMS = new URLSearchParams(window.location.search);
const TESTMODUS = URL_PARAMS.get("test") === "1" || !CONFIG.DATAPIPE_ID;

/* ---------------- Hilfsfunktionen ---------------- */

function mischen(liste) {
  const a = liste.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function zufallsId(laenge = 12) {
  const zeichen = "abcdefghijkmnpqrstuvwxyz23456789";
  let id = "";
  for (let i = 0; i < laenge; i++) id += zeichen[Math.floor(Math.random() * zeichen.length)];
  return id;
}

function normalisieren(wort) {
  return wort.trim().toLowerCase().replace(/[.,;:!?"«»]/g, "");
}

/** Bestimmt die Sequenzgruppe (1–8). */
async function gruppeBestimmen() {
  const ausUrl = parseInt(URL_PARAMS.get("gruppe"), 10);
  if (ausUrl >= 1 && ausUrl <= 8) return { gruppe: ausUrl, quelle: "url" };

  // Ausgeglichene Zuteilung über DataPipe (dort 8 Bedingungen einstellen)
  if (!TESTMODUS && typeof jsPsychPipe !== "undefined") {
    try {
      const c = await jsPsychPipe.getCondition(CONFIG.DATAPIPE_ID);
      if (Number.isInteger(c) && c >= 0) return { gruppe: (c % 8) + 1, quelle: "datapipe" };
    } catch (e) {
      console.warn("DataPipe-Zuteilung fehlgeschlagen, Zufallszuteilung:", e);
    }
  }
  return { gruppe: Math.floor(Math.random() * 8) + 1, quelle: "zufall" };
}

/** HTML für eine Spielanleitung (Bilder der Seiten oder Platzhalter). */
function anleitungHTML(spielNr, bedingung) {
  const spiel = ANLEITUNGEN[spielNr];
  const seiten = (spiel.versionen[bedingung] || []);
  if (seiten.length > 0) {
    return `<div class="anleitung">` +
      seiten.map((src, i) => `<img src="${src}" alt="${spiel.titel}, Seite ${i + 1}">`).join("") +
      `</div>`;
  }
  const b = CONFIG.BEDINGUNGEN[bedingung];
  return `<div class="anleitung platzhalter">
      <h2>${spiel.titel}</h2>
      <p><strong>[[Platzhalter – Anleitung folgt]]</strong></p>
      <p>Spiel ${spielNr}, Version ${bedingung}:<br>
      Kohärenz: ${b.kohaerenz} · Beispiele: ${b.beispiel} · Bilder: ${b.bild}</p>
      <p>Bilddateien in js/anleitungen.js bei «${spielNr}», Version ${bedingung} eintragen.</p>
    </div>`;
}

/* ---------------- Aufbau des Ablaufs ---------------- */

function ablaufErstellen(jsPsych, gruppe, teilnahmeId) {
  const timeline = [];
  const ende = (antwort) => jsPsych.data.get().filter({ aufgabe: antwort }).last(1).values()[0];

  /* 1. Technische Prüfung */
  timeline.push({
    type: jsPsychBrowserCheck,
    minimum_width: CONFIG.MIN_BREITE,
    minimum_height: CONFIG.MIN_HOEHE,
    inclusion_function: (d) => d.mobile === false,
    exclusion_message: (d) => d.mobile
      ? "<p>Diese Studie ist nur an einem Computer oder Laptop möglich. Bitte öffnen Sie den Link an einem Computer.</p>"
      : "<p>Ihr Browserfenster ist leider zu klein für diese Studie. Bitte nehmen Sie an einem grösseren Bildschirm teil.</p>",
    window_resize_message: `<p>Ihr Browserfenster ist zu klein. Bitte vergrössern Sie es, bis diese Meldung verschwindet.</p>
      <p>Mindestgrösse: <span id="browser-check-min-width"></span> × <span id="browser-check-min-height"></span> Pixel<br>
      Aktuell: <span id="browser-check-actual-width"></span> × <span id="browser-check-actual-height"></span> Pixel</p>`,
    resize_fail_button_text: "Ich kann das Fenster nicht vergrössern",
    data: { aufgabe: "browser_check" },
  });

  /* 2. Einverständnis */
  timeline.push({
    type: jsPsychSurveyHtmlForm,
    html: TEXTE.einverstaendnis(),
    button_label: "Weiter",
    data: { aufgabe: "einverstaendnis" },
  });

  /* 3a. Angaben zur Person (unter 18: Abbruch ohne Speicherung) */
  timeline.push({
    type: jsPsychSurveyHtmlForm,
    html: TEXTE.person,
    button_label: "Weiter",
    data: { aufgabe: "person" },
    on_finish: (d) => {
      d.alter = parseInt(d.response.alter, 10);
      d.geschlecht = d.response.geschlecht;
      const r = d.response;
      d.wohnland = r.wohnland === "anderes" ? (r.wohnland_andere || "").trim() : r.wohnland;
      d.muttersprache = r.muttersprache === "andere" ? (r.muttersprache_andere || "").trim() : r.muttersprache;
      if (!(d.alter >= 18)) jsPsych.abortExperiment(TEXTE.zu_jung);
    },
  });

  /* 3b. Brettspielaffinität (Frage 2b nur, wenn bei Frage 2 nicht «nie») */
  const bsFrage = (f) => ({ name: f.name, prompt: f.prompt, options: f.options, required: true });
  timeline.push({
    type: jsPsychSurveyMultiChoice,
    preamble: "<h2>Ihre Erfahrung mit Brettspielen</h2>",
    questions: TEXTE.brettspiel.slice(0, 2).map(bsFrage),
    button_label: "Weiter",
    data: { aufgabe: "brettspiel_1" },
  });
  const frage2b = TEXTE.brettspiel.find((f) => f.name === "bs_lernart");
  timeline.push({
    timeline: [{
      type: jsPsychSurveyMultiChoice,
      preamble: "<h2>Ihre Erfahrung mit Brettspielen</h2>",
      questions: [bsFrage(frage2b)],
      button_label: "Weiter",
      data: { aufgabe: "brettspiel_2" },
    }],
    conditional_function: () => frage2b.nurWenn(ende("brettspiel_1").response),
  });

  /* 4. Drei Spielanleitungen */
  const bedingungen = CONFIG.YOUDEN[gruppe];
  CONFIG.SPIELE.forEach((spielNr, i) => {
    const bedingung = bedingungen[i];
    const b = CONFIG.BEDINGUNGEN[bedingung];
    const info = {
      position: i + 1,
      spiel: spielNr,
      spiel_titel: ANLEITUNGEN[spielNr].titel,
      bedingung: bedingung,
      kohaerenz: b.kohaerenz,
      beispiel: b.beispiel,
      bild: b.bild,
    };

    timeline.push({
      type: jsPsychHtmlButtonResponse,
      stimulus: `<div class="textseite">
          ${i > 0 ? "<p>Wenn Sie möchten, können Sie jetzt eine kurze Pause machen.</p>" : ""}
          <h2>Spielanleitung ${i + 1} von ${CONFIG.SPIELE.length}</h2>
          <p>Lesen Sie die folgende Spielanleitung in Ihrem eigenen Tempo so, dass Sie das Spiel anschliessend
          spielen könnten. Wenn Sie fertig sind, klicken Sie unten auf «Weiter».</p>
          <p>Bitte beachten Sie: Danach können Sie nicht mehr zur Anleitung zurückkehren.</p>
        </div>`,
      choices: ["Anleitung anzeigen"],
      data: { ...info, aufgabe: "anleitung_intro" },
    });

    timeline.push({
      type: jsPsychHtmlButtonResponse,
      stimulus: anleitungHTML(spielNr, bedingung),
      choices: ["Ich habe die Anleitung gelesen – weiter"],
      data: { ...info, aufgabe: "lesen" },
      on_finish: (d) => { d.lesezeit_s = Math.round(d.rt / 100) / 10; },
    });

    timeline.push({
      type: jsPsychSurveyLikert,
      preamble: `<h2>Wie verständlich war die Anleitung zu «${info.spiel_titel}»?</h2>
                 <p>Bitte geben Sie an, wie sehr die folgenden Aussagen auf Sie zutreffen.</p>`,
      questions: TEXTE.verstaendlichkeit.map((it) => ({
        name: it.name, prompt: it.prompt, labels: TEXTE.skala5, required: true,
      })),
      randomize_question_order: true,
      button_label: "Weiter",
      data: { ...info, aufgabe: "verstaendlichkeit" },
    });

    timeline.push({
      type: jsPsychSurveyLikert,
      preamble: `<h2>Wie anstrengend war das Lesen?</h2>
                 <p>Bitte beziehen Sie sich auf die Anleitung zu «${info.spiel_titel}».</p>`,
      questions: TEXTE.clq.map((it) => ({
        name: it.name, prompt: it.prompt, labels: TEXTE.clq_skala, required: true,
      })),
      button_label: "Weiter",
      data: { ...info, aufgabe: "cognitive_load" },
    });

    const fragen = VERSTAENDNISFRAGEN[spielNr];
    timeline.push({
      type: jsPsychSurveyMultiChoice,
      preamble: `<h2>Fragen zu den Regeln von «${info.spiel_titel}»</h2>`,
      questions: fragen.map((f, k) => ({
        name: `vf${k + 1}`, prompt: f.frage, options: f.optionen, required: true,
      })),
      button_label: "Weiter",
      data: { ...info, aufgabe: "verstaendnisfragen" },
      on_finish: (d) => {
        d.vf_richtig = fragen.filter((f, k) => d.response[`vf${k + 1}`] === f.korrekt).length;
        d.vf_anzahl = fragen.length;
      },
    });
  });

  /* 5. Lesefertigkeit (SLS-Berlin), Zeitlimit */
  let slsStart = null;
  const slsRest = () => CONFIG.SLS_ZEIT_S * 1000 - (performance.now() - slsStart);
  timeline.push({
    type: jsPsychHtmlButtonResponse,
    stimulus: `<div class="textseite">
        <h2>Leseaufgabe</h2>
        <p>Sie sehen gleich nacheinander einfache Sätze. Entscheiden Sie bei jedem Satz so schnell wie möglich,
        ob er inhaltlich <strong>richtig</strong> oder <strong>falsch</strong> ist.</p>
        <p>Sie haben dafür insgesamt ${Math.round(CONFIG.SLS_ZEIT_S / 60)} Minuten Zeit. Es ist normal, dass Sie
        nicht alle Sätze schaffen.</p>
      </div>`,
    choices: ["Start"],
    data: { aufgabe: "sls_intro" },
    on_finish: () => { slsStart = performance.now(); },
  });
  TEXTE.sls_saetze.forEach((s, k) => {
    timeline.push({
      timeline: [{
        type: jsPsychHtmlButtonResponse,
        stimulus: `<p class="sls-satz">${s.satz}</p>`,
        choices: ["richtig", "falsch"],
        trial_duration: () => Math.max(slsRest(), 1),
        data: { aufgabe: "sls", item: k + 1, korrekt_loesung: s.korrekt },
        on_finish: (d) => {
          d.antwort = d.response === null ? null : ["richtig", "falsch"][d.response];
          d.richtig = d.antwort === s.korrekt;
        },
      }],
      conditional_function: () => slsRest() > 0,
    });
  });

  /* 6. Word Span Task */
  const ws = CONFIG.WORDSPAN;
  const pool = mischen(TEXTE.wortpool);
  let poolIndex = 0;
  const naechsteListe = (n) => { const l = pool.slice(poolIndex, poolIndex + n); poolIndex += n; return l; };

  timeline.push({
    type: jsPsychHtmlButtonResponse,
    stimulus: `<div class="textseite">
        <h2>Gedächtnisaufgabe</h2>
        <p>Sie sehen gleich nacheinander einzelne Wörter. Merken Sie sich die Wörter in der richtigen Reihenfolge.</p>
        <p>Danach tippen Sie die Wörter in dieser Reihenfolge ein, getrennt durch Leerzeichen. Die Listen werden
        nach und nach länger. Wenn Sie ein Wort nicht mehr wissen, lassen Sie es aus.</p>
        <p>Zuerst folgt ein Übungsdurchgang.</p>
      </div>`,
    choices: ["Übung starten"],
    data: { aufgabe: "wordspan_intro" },
  });

  const wsDurchgang = (liste, uebung, nr) => {
    const t = [{
      type: jsPsychHtmlKeyboardResponse,
      stimulus: '<p class="ws-wort">+</p>',
      choices: "NO_KEYS",
      trial_duration: 800,
      data: { aufgabe: "wordspan_fixation" },
    }];
    liste.forEach((wort) => {
      t.push({
        type: jsPsychHtmlKeyboardResponse, stimulus: `<p class="ws-wort">${wort}</p>`,
        choices: "NO_KEYS", trial_duration: ws.WORT_MS, data: { aufgabe: "wordspan_wort" },
      });
      t.push({
        type: jsPsychHtmlKeyboardResponse, stimulus: "", choices: "NO_KEYS",
        trial_duration: ws.PAUSE_MS, data: { aufgabe: "wordspan_pause" },
      });
    });
    t.push({
      type: jsPsychSurveyHtmlForm,
      html: `<p>Bitte geben Sie die Wörter in der richtigen Reihenfolge ein:</p>
             <p><input type="text" name="antwort" size="60" autocomplete="off" autocorrect="off" spellcheck="false"></p>`,
      autofocus: "antwort",
      button_label: "Weiter",
      data: { aufgabe: "wordspan", uebung: uebung, durchgang: nr, listenlaenge: liste.length, liste: liste.join(" ") },
      on_finish: (d) => {
        const eingabe = (d.response.antwort || "").split(/\s+/).map(normalisieren).filter(Boolean);
        d.richtig_in_position = liste.filter((w, k) => normalisieren(w) === eingabe[k]).length;
        d.alles_richtig = d.richtig_in_position === liste.length && eingabe.length === liste.length;
      },
    });
    return { timeline: t };
  };

  timeline.push(wsDurchgang(naechsteListe(2), true, 0));
  timeline.push({
    type: jsPsychHtmlButtonResponse,
    stimulus: '<div class="textseite"><p>Die Übung ist beendet. Jetzt beginnt die eigentliche Aufgabe.</p></div>',
    choices: ["Start"],
    data: { aufgabe: "wordspan_start" },
  });
  // Abbruchregel: Sind alle Durchgänge einer Listenlänge falsch, endet die Aufgabe.
  let nr = 1;
  let abgebrochen = false;
  ws.LISTENLAENGEN.forEach((laenge, li) => {
    const vorherige = li > 0 ? ws.LISTENLAENGEN[li - 1] : null;
    for (let r = 0; r < ws.DURCHGAENGE_PRO_LAENGE; r++) {
      timeline.push({
        ...wsDurchgang(naechsteListe(laenge), false, nr++),
        conditional_function: () => {
          if (!abgebrochen && r === 0 && vorherige !== null && ws.ABBRUCHREGEL) {
            const vorher = jsPsych.data.get().filter({ aufgabe: "wordspan", uebung: false, listenlaenge: vorherige }).values();
            if (vorher.length > 0 && vorher.every((d) => !d.alles_richtig)) abgebrochen = true;
          }
          return !abgebrochen;
        },
      });
    }
  });

  /* 7. Daten speichern und Abschluss */
  if (!TESTMODUS) {
    timeline.push({
      type: jsPsychPipe,
      action: "save",
      experiment_id: CONFIG.DATAPIPE_ID,
      filename: `${teilnahmeId}.csv`,
      data_string: () => jsPsych.data.get().csv(),
    });
  }

  window.datenHerunterladen = () => jsPsych.data.get().localSave("csv", `test_${teilnahmeId}.csv`);
  timeline.push({
    type: jsPsychHtmlKeyboardResponse,
    stimulus: () => TEXTE.abschluss() + (TESTMODUS
      ? `<p class="testbox">TESTMODUS: Die Daten wurden nicht online gespeichert.<br>
         <button class="jspsych-btn" onclick="datenHerunterladen()">Testdaten als CSV herunterladen</button></p>`
      : ""),
    choices: "NO_KEYS",
    data: { aufgabe: "abschluss" },
  });

  return timeline;
}

/* ---------------- Start ---------------- */

async function studieStarten() {
  const jsPsych = initJsPsych({
    show_progress_bar: true,
    auto_update_progress_bar: true,
    message_progress_bar: "Fortschritt",
    on_trial_start: () => window.scrollTo(0, 0),
  });

  const teilnahmeId = zufallsId();
  const { gruppe, quelle } = await gruppeBestimmen();

  jsPsych.data.addProperties({
    teilnahme_id: teilnahmeId,
    gruppe: gruppe,
    gruppe_quelle: quelle,
    spiele_reihenfolge: CONFIG.SPIELE.join("-"),
    testmodus: TESTMODUS,
    studien_version: STUDIEN_VERSION,
  });

  if (TESTMODUS) {
    document.body.insertAdjacentHTML("afterbegin",
      `<div class="testbanner">TESTMODUS · Gruppe ${gruppe} · Daten werden nicht gespeichert</div>`);
  }

  jsPsych.run(ablaufErstellen(jsPsych, gruppe, teilnahmeId));
}

if (typeof window !== "undefined" && !window.__KEIN_AUTOSTART__) {
  window.addEventListener("load", studieStarten);
}
