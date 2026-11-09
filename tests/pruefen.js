// Technischer Selbsttest ohne Browser: node tests/pruefen.js
// Prüft das Youden-Square und baut den Ablauf für alle 8 Gruppen mit einem Ersatz-jsPsych.
const fs = require("fs");
const vm = require("vm");
const path = require("path");

const ctx = { console, performance, URLSearchParams, Math, window: { location: { search: "?test=1" }, __KEIN_AUTOSTART__: true } };
ctx.window.window = ctx.window;
for (const n of ["jsPsychBrowserCheck", "jsPsychSurveyHtmlForm", "jsPsychSurveyMultiChoice", "jsPsychHtmlButtonResponse",
  "jsPsychSurveyLikert", "jsPsychHtmlKeyboardResponse", "jsPsychPipe"]) ctx[n] = { name: n };
vm.createContext(ctx);
const src = ["config.js", "anleitungen.js", "texte.js", "experiment.js"]
  .map((f) => fs.readFileSync(path.join(__dirname, "..", "js", f), "utf8")).join("\n")
  .replace(/^const (\w+) =/gm, "var $1 =");
vm.runInContext(src + "\nthis.CONFIG=CONFIG; this.ablaufErstellen=ablaufErstellen; this.TEXTE=TEXTE;", ctx);
const { CONFIG } = ctx;

let fehler = 0;
const pruefe = (ok, msg) => { if (!ok) { fehler++; console.log("FEHLER:", msg); } };

// Youden-Square
for (let s = 0; s < 3; s++) {
  for (const haelfte of [[1, 2, 3, 4], [5, 6, 7, 8]]) {
    const spalte = haelfte.map((g) => CONFIG.YOUDEN[g][s]).sort().join();
    pruefe(spalte === haelfte.join(), `Spalte ${s + 1} ist in Hälfte ${haelfte} nicht ausgeglichen`);
  }
}
for (const [g, beds] of Object.entries(CONFIG.YOUDEN)) {
  for (const f of ["kohaerenz", "beispiel", "bild"]) {
    pruefe(new Set(beds.map((b) => CONFIG.BEDINGUNGEN[b][f])).size === 2, `Gruppe ${g}: ${f} nicht beide Stufen`);
  }
}
for (const f of ["kohaerenz", "beispiel", "bild"]) {
  const z = {};
  Object.values(CONFIG.YOUDEN).flat().forEach((b) => { const v = CONFIG.BEDINGUNGEN[b][f]; z[v] = (z[v] || 0) + 1; });
  pruefe(Object.values(z).every((n) => n === 12), `${f} nicht 50:50 (${JSON.stringify(z)})`);
}
pruefe(CONFIG.SPIELE.length === 3 && CONFIG.SPIELE.every((s) => ctx.ANLEITUNGEN[s]), "SPIELE ungültig");

// Ablauf durchspielen mit Ersatz-jsPsych
const daten = [];
const fake = {
  data: {
    get: () => ({
      filter: (f) => {
        const treffer = daten.filter((d) => Object.entries(f).every(([k, v]) => d[k] === v));
        return { values: () => treffer, last: () => ({ values: () => treffer.slice(-1) }) };
      },
      csv: () => "", localSave: () => {},
    }),
  },
};
let falschAb = 99;
const ev = (x) => (typeof x === "function" ? x() : x);
function laufen(knoten) {
  for (const k of knoten) {
    if (k.timeline) { if (!k.conditional_function || k.conditional_function()) laufen(k.timeline); continue; }
    const d = { ...(k.data || {}), rt: 5000, response: null };
    const t = k.type.name;
    if (t === "jsPsychSurveyMultiChoice") {
      const qs = ev(k.questions); d.response = {}; qs.forEach((q) => (d.response[q.name] = q.options[1]));
    } else if (t === "jsPsychSurveyHtmlForm") {
      d.response = k.data.aufgabe === "wordspan" ? { antwort: (k.data.listenlaenge >= falschAb ? "xx" : k.data.liste) } : {};
    } else if (t === "jsPsychHtmlButtonResponse") { ev(k.stimulus); ev(k.trial_duration); d.response = 0; }
    else if (t === "jsPsychHtmlKeyboardResponse") ev(k.stimulus);
    if (k.on_finish) k.on_finish(d);
    daten.push(d);
  }
}
for (let g = 1; g <= 8; g++) {
  daten.length = 0;
  const tl = ctx.ablaufErstellen(fake, g, "test");
  laufen(tl);
  const lesen = daten.filter((d) => d.aufgabe === "lesen");
  pruefe(lesen.length === 3, `Gruppe ${g}: ${lesen.length} statt 3 Anleitungen`);
  pruefe(lesen.map((d) => d.bedingung).join() === CONFIG.YOUDEN[g].join(), `Gruppe ${g}: falsche Bedingungen`);
  const ws = daten.filter((d) => d.aufgabe === "wordspan" && !d.uebung);
  pruefe(ws.length === 10 && ws.every((d) => d.alles_richtig), `Gruppe ${g}: Word-Span-Auswertung (${ws.length})`);
  pruefe(daten.some((d) => d.aufgabe === "brettspiel_2"), `Gruppe ${g}: Frage 2b fehlt`);
  pruefe(!daten.some((d) => d.aufgabe === "person"), `Gruppe ${g}: Personenseite noch vorhanden`);
  pruefe(daten.filter((d) => d.aufgabe === "cognitive_load").length === 3, `Gruppe ${g}: CLQ`);
  const woerter = daten.filter((d) => d.aufgabe === "wordspan").flatMap((d) => d.liste.split(" "));
  pruefe(new Set(woerter).size === woerter.length && !woerter.includes(""), `Gruppe ${g}: Wörter doppelt/zu wenige`);
  pruefe(daten.filter((d) => d.aufgabe === "sls").length === ctx.TEXTE.sls_saetze.length, `Gruppe ${g}: SLS`);
  pruefe(daten.filter((d) => d.aufgabe === "verstaendnisfragen").every((d) => d.vf_anzahl === 2), `Gruppe ${g}: VF`);
}
// Abbruchregel: ab Länge 5 alles falsch -> Länge 3, 4, 5 bearbeitet, dann Ende
falschAb = 5; daten.length = 0;
laufen(ctx.ablaufErstellen(fake, 1, "test"));
const wsA = daten.filter((d) => d.aufgabe === "wordspan" && !d.uebung).map((d) => d.listenlaenge).join();
pruefe(wsA === "3,3,4,4,5,5", `Abbruchregel greift nicht richtig (${wsA})`);
console.log(fehler ? `${fehler} Fehler` : "Alles in Ordnung: Youden-Square und Ablauf für alle 8 Gruppen geprüft.");
process.exit(fehler ? 1 : 0);
