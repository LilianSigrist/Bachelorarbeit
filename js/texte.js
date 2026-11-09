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
    <tr><td>Datenschutzbeauftragte:r ETH Zürich:</td><td>${CONFIG.DATENSCHUTZ}</td></tr>
  </table>

  <h2>Informationen zur Studienteilnahme</h2>
  <p>Ihre Teilnahme ist freiwillig. Bitte lesen Sie die folgenden Informationen sorgfältig durch. Bei Fragen
  wenden Sie sich an die oben genannte Kontaktperson.</p>

  <h3>Was wird untersucht?</h3>
  <p>Wir untersuchen, wie die Gestaltung von Brettspielanleitungen das Regelverständnis und die Anstrengung beim
  Lesen beeinflusst. Dazu lesen Sie drei unterschiedlich gestaltete Anleitungen zu erfundenen Brettspielen. Sie
  wurden mithilfe künstlicher Intelligenz erstellt und von uns überprüft. Die Ergebnisse sollen helfen,
  Spielanleitungen und andere Anleitungstexte verständlicher zu gestalten.</p>

  <h3>Wer kann teilnehmen?</h3>
  <p>Personen ab 18 Jahren mit einem Computer oder Laptop.</p>

  <h3>Wie läuft die Teilnahme ab?</h3>
  <p>Zuerst beantworten Sie kurze Fragen zu Ihrer Person und Ihrer Brettspielerfahrung. Danach lesen Sie drei
  Spielanleitungen in Ihrem eigenen Tempo und beantworten jeweils Fragen zur Verständlichkeit, zur Anstrengung
  beim Lesen und zu den Regeln. Zum Schluss folgen eine kurze Lese- und eine Gedächtnisaufgabe.</p>
  <p>Die Teilnahme dauert ca. ${CONFIG.DAUER_MIN} Minuten. Zwischen den Anleitungen können Sie Pausen machen.
  Es handelt sich nicht um einen Leistungstest, und Sie erhalten keine Rückmeldung zu Ihren persönlichen
  Ergebnissen.</p>

  <h3>Welche Rechte habe ich?</h3>
  <p>Sie können die Teilnahme jederzeit ohne Angabe von Gründen abbrechen, indem Sie das Browserfenster schliessen.
  Da die Studiendaten anonym erhoben werden, lassen sie sich nach Abschluss der Teilnahme nicht mehr Ihrer Person
  zuordnen und deshalb nicht einzeln löschen. Ihre E-Mail-Adresse für die Verlosung können Sie jederzeit über die
  Kontaktperson löschen lassen.</p>

  <h3>Gibt es eine Entschädigung?</h3>
  <p>Unter allen Teilnehmenden verlosen wir ${CONFIG.VERLOSUNG_TEXT}. Die Teilnahme an der Verlosung ist freiwillig
  und erfolgt über ein separates Formular, in dem Sie Ihre E-Mail-Adresse angeben. Voraussetzung ist, dass Sie die
  Studie vollständig abschliessen. Die Ziehung erfolgt bis ${CONFIG.ZIEHUNG_BIS}; die Gewinner:innen werden per
  E-Mail benachrichtigt.</p>

  <h3>Welche Daten werden erhoben und wie werden sie verwendet?</h3>
  <p><strong>Studiendaten:</strong> Wir erheben anonym Ihr Alter, Ihr Geschlecht, Ihre Erstsprache und Ihre
  Brettspielerfahrung sowie Ihre Antworten zu den Anleitungen und Ihre Ergebnisse in der Lese- und
  Gedächtnisaufgabe (einschliesslich Bearbeitungszeiten). Wir nutzen sie, um den Einfluss der Gestaltung auf das
  Verständnis zu untersuchen. Die Daten werden verschlüsselt und passwortgeschützt an der ETH Zürich gespeichert.
  Zugriff haben nur die Projektmitglieder sowie, zu Kontrollzwecken und unter strikter Vertraulichkeit, die
  Ethikkommission der ETH Zürich.</p>
  <p>Die Ergebnisse werden in einer Bachelorarbeit und gegebenenfalls in einer wissenschaftlichen Fachzeitschrift
  veröffentlicht. Die anonymen Daten können zudem in einer Forschungsdatenbank zur Weiterverwendung
  veröffentlicht werden. Daten und Resultate werden nicht exklusiv mit Dritten geteilt.</p>
  <p><strong>E-Mail-Adresse (freiwillig):</strong> Für die Verlosung oder den Erhalt der Studienergebnisse geben Sie
  Ihre E-Mail-Adresse in einem separaten Formular an. Es ist technisch von der Studie getrennt, sodass Ihre Adresse
  nicht mit Ihren Studiendaten verknüpft werden kann. Wir verwenden sie nur für die Verlosung bzw. den
  Ergebnisversand, geben sie nicht weiter und löschen sie spätestens am ${CONFIG.LOESCHUNG_BIS}. Zugriff hat nur
  die Kontaktperson.</p>

  <h3>Einverständniserklärung</h3>
  <p>Mit dem Aktivieren des Kontrollkästchens und dem Klick auf «Weiter» bestätigen Sie:</p>
  <ul>
    <li>Ich habe die Studieninformationen gelesen und verstanden und hatte ausreichend Zeit, über meine Teilnahme zu entscheiden.</li>
    <li>Ich nehme freiwillig teil und erfülle die genannten Teilnahmebedingungen.</li>
    <li>Ich bin mit der Erhebung und Verwendung meiner Daten wie beschrieben einverstanden.</li>
    <li>Ich weiss, dass meine anonymisierten Daten veröffentlicht und zur Weiterverwendung in einer Forschungsdatenbank bereitgestellt werden können.</li>
    <li>Ich weiss, dass ich meine Teilnahme jederzeit ohne Angabe von Gründen abbrechen kann.</li>
    <li>Ich weiss, dass die Teilnahme an der Verlosung freiwillig und keine Voraussetzung für die Studienteilnahme ist.</li>
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
