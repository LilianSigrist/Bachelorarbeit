/* =====================================================================
   TEXTE UND FRAGEBÖGEN
   Übernommen aus dem Ethikantrag (Anhang 1 und 2).
   Wenn du hier etwas änderst, passe auch den Ethikantrag an.
   ===================================================================== */

const TEXTE = {};

/* ---------------------------------------------------------------------
   Studieninformation und Einverständnis (Ethikantrag A1.3)
   --------------------------------------------------------------------- */
TEXTE.einverstaendnis = () => `
<div class="textseite">
  <h1>Spielregeln ohne Overload</h1>
  <p class="untertitel">Wie die Gestaltung von Spielanleitungen das Verstehen beeinflusst</p>

  <table class="kopf">
    <tr><td>Durchführungsort und -zeit:</td><td>Online, ${CONFIG.ZEITRAUM}</td></tr>
    <tr><td>Kontaktperson für Fragen:</td><td>${CONFIG.KONTAKT}</td></tr>
    <tr><td>Projektleitung:</td><td>${CONFIG.PROJEKTLEITUNG}</td></tr>
    <tr><td>Datenschutzbeauftragter ETH Zürich:</td><td>Tomislav Mitar (tomislav.mitar@sl.ethz.ch)</td></tr>
  </table>

  <p>Wir fragen Sie hier an, ob Sie bereit wären, an unserem Forschungsvorhaben mitzuwirken. Ihre Teilnahme ist
  freiwillig. Bitte lesen Sie die folgenden Informationen sorgfältig durch. Wenn Sie Fragen haben, wenden Sie sich
  an die oben genannte Kontaktperson.</p>

  <h3>Was wird untersucht und wie?</h3>
  <p>Wir möchten herausfinden, wie die Gestaltung von Brettspielanleitungen beeinflusst, wie gut man die Regeln
  versteht und wie anstrengend das Lesen ist. Dazu lesen Sie drei Anleitungen zu erfundenen Brettspielen, die
  sich in ihrer Gestaltung unterscheiden. Die Anleitungen wurden mithilfe künstlicher Intelligenz erstellt und von
  uns sorgfältig überprüft. Die Ergebnisse sollen helfen, Spielanleitungen und andere Anleitungstexte
  verständlicher zu gestalten.</p>

  <h3>Wer kann teilnehmen?</h3>
  <p>Teilnehmen können alle Personen ab 18 Jahren, die Deutsch als Erstsprache sprechen oder sehr gute
  Deutschkenntnisse (mindestens Niveau C1) haben und normal oder mit Brille bzw. Kontaktlinsen gut sehen. Sie
  benötigen einen Computer oder Laptop. Vorkenntnisse zu Brettspielen sind nicht nötig.</p>

  <h3>Was muss ich bei einer Teilnahme tun?</h3>
  <p>Sie beantworten zuerst einige kurze Fragen zu Ihrer Person und zu Ihrer Erfahrung mit Brettspielen. Danach lesen
  Sie nacheinander drei Spielanleitungen in Ihrem eigenen Tempo. Nach jeder Anleitung beantworten Sie Fragen dazu,
  wie verständlich und wie anstrengend Sie die Anleitung fanden, sowie einige Verständnisfragen. Zum Schluss lösen
  Sie eine kurze Leseaufgabe und eine Aufgabe, bei der Sie sich Wörter merken. Die Teilnahme dauert insgesamt ca.
  ${CONFIG.DAUER_MIN} Minuten. Bitte nehmen Sie an einem Computer und an einem ruhigen Ort teil.</p>

  <h3>Was sind meine Rechte während der Teilnahme?</h3>
  <p>Ihre Teilnahme an dieser Studie ist freiwillig. Sie können jederzeit ohne Angabe von Gründen und ohne Nachteil
  die Teilnahme abbrechen, indem Sie das Browserfenster schliessen. Da wir keine Daten erheben, die Sie
  identifizieren, können wir Ihre Studiendaten nach Abschluss der Teilnahme nicht mehr Ihnen zuordnen und deshalb
  auch nicht einzeln löschen. Ihre E-Mail-Adresse für die Verlosung können Sie jederzeit löschen lassen, indem Sie
  der Kontaktperson schreiben.</p>

  <h3>Welche Risiken und welchen Nutzen kann ich erwarten?</h3>
  <p>Es sind keine Risiken bekannt. Das Lesen und Beantworten der Fragen erfordert Konzentration und kann etwas
  ermüdend sein; zwischen den Anleitungen können Sie kurze Pausen machen. Es handelt sich nicht um einen
  Leistungstest, und Sie erhalten keine Rückmeldung zu Ihren persönlichen Ergebnissen. Einen direkten Nutzen haben
  Sie nicht; Sie tragen aber dazu bei, Anleitungen verständlicher zu machen.</p>

  <h3>Werde ich für die Teilnahme entschädigt?</h3>
  <p>Sie erhalten keine Entschädigung. Unter allen Teilnehmenden verlosen wir aber ${CONFIG.VERLOSUNG_TEXT}.
  Wenn Sie teilnehmen möchten, werden Sie am Ende der Studie auf ein separates Formular weitergeleitet und geben
  dort Ihre E-Mail-Adresse an. Die Teilnahme an der Verlosung ist freiwillig. Auch wenn Sie die Studie abbrechen,
  können Sie teilnehmen: Schreiben Sie dazu eine E-Mail an die Kontaktperson. Die Ziehung findet bis
  ${CONFIG.ZIEHUNG_BIS} statt; die Gewinner:innen werden per E-Mail benachrichtigt.</p>

  <h3>Welche Daten werden von mir erhoben und wie werden sie verwendet?</h3>
  <p>In der Studie selbst werden keine Daten erhoben, die Sie identifizieren (z. B. Name, E-Mail-Adresse oder
  IP-Adresse). Folgende Daten werden anonym erhoben:</p>
  <ul>
    <li>Alter, Geschlecht, Erstsprache und Erfahrung mit Brettspielen</li>
    <li>Ihre Antworten auf die Fragen zu den Spielanleitungen sowie Ihre Ergebnisse in der Lese- und der
    Gedächtnisaufgabe (inkl. Bearbeitungszeiten)</li>
  </ul>
  <p>Diese Daten benötigen wir, um zu untersuchen, wie die Gestaltung der Anleitungen das Verstehen beeinflusst. Sie
  werden auf passwortgeschützten, verschlüsselten Speichern der ETH Zürich gespeichert. Zugriff haben nur die
  Projektmitglieder sowie, zu Kontrollzwecken und unter strikter Vertraulichkeit, die Ethikkommission der ETH
  Zürich. Die Ergebnisse werden in einer Bachelorarbeit und gegebenenfalls in einer wissenschaftlichen
  Fachzeitschrift veröffentlicht. Da die Daten anonym sind, sind keine Rückschlüsse auf Ihre Person möglich. Die
  anonymen Daten können zur Weiterverwendung in einer Forschungsdatenbank veröffentlicht werden. Daten oder
  Resultate werden nicht exklusiv mit Dritten geteilt.</p>
  <p><strong>E-Mail-Adresse (freiwillig):</strong> Wenn Sie an der Verlosung teilnehmen oder die Ergebnisse erhalten
  möchten, geben Sie Ihre E-Mail-Adresse in einem separaten Formular an. Dieses Formular ist technisch von der
  Studie getrennt; Ihre E-Mail-Adresse kann deshalb nicht mit Ihren Antworten verknüpft werden. Wir verwenden sie
  nur für die Verlosung bzw. den Versand der Ergebnisse, geben sie nicht weiter und löschen sie danach (spätestens
  [[30.06.2027]]). Zugriff hat nur die Kontaktperson.</p>

  <h3>Wer finanziert die Studie?</h3>
  <p>Die Studie hat keine externe Finanzierung. Sie wird im Rahmen einer Bachelorarbeit an der Professur für Lehr-
  und Lernforschung der ETH Zürich durchgeführt. Die Preise der Verlosung werden finanziert durch [[ergänzen]].</p>

  <h3>Wer hat die Studie geprüft?</h3>
  <p>Diese Studie wurde von der Ethikkommission der ETH Zürich unter der Gesuchsnummer ${CONFIG.ETHIK_NUMMER}
  geprüft und bewilligt.</p>

  <h3>Beschwerdestelle</h3>
  <p>Das Sekretariat der ETH Zürich Ethikkommission nimmt Ihre Beschwerden im Zusammenhang mit Ihrer
  Studienteilnahme entgegen. Kontakt: ethics@sl.ethz.ch oder 0041 44 632 85 72.</p>

  <h3>Einverständniserklärung</h3>
  <p>Mit dem Aktivieren des Kontrollkästchens und dem Klick auf «Weiter» bestätige ich:</p>
  <ul>
    <li>Ich habe die Informationen zur Studie gelesen und verstanden.</li>
    <li>Ich hatte genug Zeit, über meine Teilnahme zu entscheiden, und nehme freiwillig an der Studie teil.</li>
    <li>Ich erfülle die genannten Bedingungen für die Teilnahme.</li>
    <li>Ich bin einverstanden, dass die oben beschriebenen Daten von mir gesammelt und wie beschrieben verwendet werden.</li>
    <li>Ich weiss, dass meine Daten in anonymisierter Form veröffentlicht werden können.</li>
    <li>Ich weiss, dass ich meine Teilnahme jederzeit abbrechen kann.</li>
    <li>Ich weiss, dass die Teilnahme an der Verlosung freiwillig ist und keine Voraussetzung für die Studienteilnahme.</li>
  </ul>
  <label class="checkbox">
    <input type="checkbox" name="einverstanden" value="ja" required>
    Ich habe die Informationen gelesen und bin mit der Teilnahme einverstanden.
  </label>
  <p class="hinweis">Ohne Aktivieren des Kontrollkästchens kann die Studie nicht gestartet werden.</p>
</div>`;

/* ---------------------------------------------------------------------
   Angaben zur Person (Ethikantrag A2.1)
   --------------------------------------------------------------------- */
TEXTE.person = `
<div class="textseite formular">
  <h2>Angaben zu Ihrer Person</h2>
  <p><label>Wie alt sind Sie? (in Jahren)<br>
    <input type="number" name="alter" min="18" max="110" required></label></p>
  <p>Welchem Geschlecht ordnen Sie sich zu?<br>
    <label><input type="radio" name="geschlecht" value="weiblich" required> weiblich</label><br>
    <label><input type="radio" name="geschlecht" value="männlich"> männlich</label><br>
    <label><input type="radio" name="geschlecht" value="divers"> divers</label><br>
    <label><input type="radio" name="geschlecht" value="keine Angabe"> keine Angabe</label></p>
  <p>Ist Deutsch Ihre Erstsprache?<br>
    <label><input type="radio" name="erstsprache_deutsch" value="ja" required> ja</label><br>
    <label><input type="radio" name="erstsprache_deutsch" value="nein"> nein</label></p>
</div>`;

/* ---------------------------------------------------------------------
   Brettspielaffinität (Ethikantrag A2.1, vier Fragen)
   --------------------------------------------------------------------- */
TEXTE.brettspiel = [
  {
    name: "bs_spielen",
    prompt: "Wie oft spielen Sie Brettspiele?",
    options: ["nie", "seltener als einmal pro Jahr", "mehrmals pro Jahr", "etwa einmal pro Monat",
              "mehrmals pro Monat", "mindestens einmal pro Woche"],
  },
  {
    name: "bs_lernen",
    prompt: "Wie oft lernen Sie die Regeln eines neuen Brettspiels?",
    options: ["nie", "seltener als einmal pro Jahr", "ein- bis dreimal pro Jahr", "etwa alle zwei bis drei Monate",
              "etwa einmal pro Monat", "mehrmals pro Monat"],
  },
  {
    name: "bs_lernart",
    prompt: "Wie lernen Sie die Regeln eines neuen Brettspiels meistens?",
    options: ["Ich lese die Spielanleitung selbst.", "Jemand erklärt mir die Regeln.", "Ich schaue ein Erklärvideo.",
              "Wir lernen die Regeln gemeinsam beim Spielen.", "Anderes"],
    nurWenn: (antworten) => antworten.bs_lernen !== "nie", // wird übersprungen, wenn bei bs_lernen «nie»
  },
  {
    name: "bs_komplexitaet",
    prompt: "Welche Art von Brettspielen spielen Sie am häufigsten?",
    options: ["leichte Familien- und Partyspiele (z. B. Uno, Dog, Codenames)",
              "mittelschwere Spiele (z. B. Catan, Carcassonne, Azul, Wingspan)",
              "komplexe Strategiespiele (z. B. Terraforming Mars, Scythe, Gloomhaven)",
              "Ich spiele keine Brettspiele."],
  },
];

/* ---------------------------------------------------------------------
   Verständlichkeit (Ethikantrag A2.4), (i) = invertiert
   --------------------------------------------------------------------- */
TEXTE.skala5 = ["1<br>stimmt überhaupt nicht", "2", "3", "4", "5<br>stimmt genau"];

TEXTE.verstaendlichkeit = [
  { name: "vs01", prompt: "Die Sätze der Spielanleitung waren leicht zu verstehen." },
  { name: "vs02", prompt: "Beim Lesen der Regeln hatte ich ein klares Bild der jeweiligen Spielsituationen vor Augen." },
  { name: "vs03", prompt: "Beim Lesen der Regeln war mir der Ablauf am Spieltisch klar." },
  { name: "vs04", prompt: "Mir war nach dem ersten Lesen der Regeln klar, welche Aktionen in welcher Spielphase erlaubt sind." },
  { name: "vs05", prompt: "Die Zusammenhänge zwischen den Handlungen und den Regelkonsequenzen waren eindeutig." },
  { name: "vs06", prompt: "Ich fühle mich imstande, nach dem Lesen der Anleitung die Regeln einer anderen Person zu erklären." },
  { name: "vs07_inv", prompt: "Ich musste mich stark konzentrieren, um die Regeln zu verstehen." },
  { name: "vs08_inv", prompt: "Ich musste einzelne Abschnitte der Anleitung mehrmals lesen, um die Regeln zu verstehen." },
  { name: "vs09_inv", prompt: "Ich hatte Schwierigkeiten, die einzelnen Elemente des Spiels miteinander zu verbinden." },
  { name: "vs10_inv", prompt: "Das Verstehen und Erlernen der Regeln fühlte sich anstrengend an." },
];

/* ---------------------------------------------------------------------
   Kognitive Belastung (Ethikantrag A2.5)
   Angepasste Version des Cognitive Load Questionnaire (Krieglstein et al., 2023)
   [[Finale, angepasste Items und Antwortskala einfügen.]]
   --------------------------------------------------------------------- */
TEXTE.clq_skala = ["1<br>stimmt überhaupt nicht", "2", "3", "4", "5", "6", "7<br>stimmt völlig"]; // [[Skala prüfen]]

TEXTE.clq = [
  { name: "icl1", prompt: "[[Platzhalter ICL-Item 1]]" },
  { name: "icl2", prompt: "[[Platzhalter ICL-Item 2]]" },
  { name: "ecl1", prompt: "[[Platzhalter ECL-Item 1]]" },
  { name: "ecl2", prompt: "[[Platzhalter ECL-Item 2]]" },
  { name: "gcl1", prompt: "[[Platzhalter GCL-Item 1]]" },
  { name: "gcl2", prompt: "[[Platzhalter GCL-Item 2]]" },
];

/* ---------------------------------------------------------------------
   Lesefertigkeit SLS-Berlin (Ethikantrag A2.8)
   [[Originalsätze erst nach Klärung der Nutzungsrechte einfügen.]]
   Die Sätze unten sind nur Platzhalter, damit der Ablauf testbar ist.
   --------------------------------------------------------------------- */
TEXTE.sls_saetze = [
  { satz: "[[Platzhalter]] Ein Apfel ist eine Frucht.", korrekt: "richtig" },
  { satz: "[[Platzhalter]] Fische leben auf Bäumen.", korrekt: "falsch" },
  { satz: "[[Platzhalter]] Im Winter ist es meistens kälter als im Sommer.", korrekt: "richtig" },
  { satz: "[[Platzhalter]] Ein Stuhl kann fliegen.", korrekt: "falsch" },
  { satz: "[[Platzhalter]] Mit einem Schlüssel kann man eine Tür öffnen.", korrekt: "richtig" },
  { satz: "[[Platzhalter]] Schnee ist meistens schwarz.", korrekt: "falsch" },
];

/* ---------------------------------------------------------------------
   Word Span Task (Ethikantrag A2.7) – Wortmaterial
   [[Wortmaterial nach Berkowitz et al. (2022) prüfen bzw. ersetzen.]]
   Einsilbige bzw. kurze, häufige Nomen; jedes Wort kommt pro Person nur einmal vor.
   --------------------------------------------------------------------- */
TEXTE.wortpool = [
  "Baum", "Haus", "Hund", "Buch", "Tisch", "Ball", "Glas", "Hut", "Fisch", "Stein",
  "Brot", "Licht", "Schuh", "Turm", "Zug", "Boot", "Rad", "Bett", "Tür", "Mond",
  "Wald", "Berg", "Topf", "Korb", "Kamm", "Ring", "Zaun", "Seil", "Bank", "Uhr",
  "Kuh", "Maus", "Pilz", "Nuss", "Helm", "Tal", "Dach", "Hemd", "Sack", "Kran",
  "Gurt", "Schal", "Teich", "Stuhl", "Frosch", "Zelt", "Brief", "Pferd", "Hahn", "Schiff",
  "Wolf", "Blatt", "Kerze", "Löffel", "Gabel", "Tasche", "Vogel", "Kiste", "Lampe", "Birne",
];

/* ---------------------------------------------------------------------
   Abschlussseite (Ethikantrag 3.1)
   --------------------------------------------------------------------- */
TEXTE.abschluss = () => `
<div class="textseite">
  <h2>Vielen Dank für Ihre Teilnahme!</h2>
  <p>Ihre Antworten wurden gespeichert.</p>
  <p>In dieser Studie haben wir untersucht, ob drei Gestaltungsmerkmale von Spielanleitungen das Verstehen
  erleichtern: eine zusammenhängende (kohärente) Satzstruktur, Beispiele zu Spielzügen sowie Bilder und Icons,
  die den Text unterstützen. Die Anleitungen, die Sie gelesen haben, unterschieden sich in diesen Merkmalen.</p>
  <p>Bei Fragen erreichen Sie uns unter ${CONFIG.KONTAKT_EMAIL}.</p>
  ${CONFIG.VERLOSUNG_URL
    ? `<p><strong>Verlosung und Ergebnisse:</strong> Wenn Sie an der Verlosung teilnehmen oder die Ergebnisse
       erhalten möchten, öffnen Sie bitte das separate Formular. Es ist nicht mit Ihren Antworten verknüpft.</p>
       <p><a class="jspsych-btn" href="${CONFIG.VERLOSUNG_URL}" target="_blank" rel="noopener">Zum Formular für die Verlosung</a></p>`
    : `<p class="hinweis">[[Link zum Verlosungsformular in config.js bei VERLOSUNG_URL eintragen.]]</p>`}
  <p>Sie können dieses Fenster jetzt schliessen.</p>
</div>`;
