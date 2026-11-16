/* =====================================================================
   TEXTE UND FRAGEBÖGEN
   Übernommen aus dem Ethikantrag (Anhang 1 und 2).
   Wenn du hier etwas änderst, passe auch den Ethikantrag an.
   ===================================================================== */

const TEXTE = {};

/* ---------------------------------------------------------------------
   Begrüssung (erste Seite)
   --------------------------------------------------------------------- */
TEXTE.willkommen = () => `
<div class="textseite">
  <h1>Herzlich willkommen!</h1>
  <p>Schön, dass du bei meiner Online-Studie <strong>«Spielregeln ohne Overload»</strong> mitmachst. Sie ist Teil
  meiner Bachelorarbeit im Studiengang Psychologie an der ZHAW. Ich möchte untersuchen, welche Faktoren das
  Verständnis von Spielregeln beeinflussen.</p>
  <p>Dazu siehst du dir gleich drei Prototypen von Spielanleitungen an, die es so noch gar nicht gibt. Bitte lies sie
  aufmerksam durch. Nach jeder Anleitung fragen wir dich, wie verständlich und wie anstrengend du sie fandest, und
  stellen dir ein paar Fragen zu den Regeln. Zum Schluss folgen eine kurze Lese- und eine Gedächtnisaufgabe.
  Insgesamt dauert das etwa ${CONFIG.DAUER_MIN} Minuten. Bitte nimm an einem Computer und an einem ruhigen Ort teil.</p>
  <p>Mit deiner Teilnahme hilfst du mir bei meiner Bachelorarbeit und unterstützt den wissenschaftlichen
  Erkenntnisgewinn!</p>
  <p>Als Dankeschön verlosen wir unter allen, die die Studie vollständig abschliessen, ${CONFIG.VERLOSUNG_TEXT}.</p>
  <p>Viele Grüsse<br>Lilian</p>
</div>`;

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
  <p><strong>Studiendaten:</strong> Wir erheben anonym Ihr Alter, Ihr Geschlecht, Ihr Wohnland, Ihre
  Muttersprache und Ihre Brettspielerfahrung sowie Ihre Antworten zu den Anleitungen und Ihre Ergebnisse in der Lese- und
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
   Angaben zur Person
   Personen unter 18 werden
   freundlich verabschiedet; ihre Daten werden nicht gespeichert.
   --------------------------------------------------------------------- */
TEXTE.person = `
<div class="textseite formular">
  <h2>Angaben zu Ihrer Person</h2>

  <p><label>Wie alt sind Sie? (in Jahren)<br>
    <input type="number" name="alter" min="1" max="110" step="1" required></label></p>

  <p>Welchem Geschlecht ordnen Sie sich zu?<br>
    <label><input type="radio" name="geschlecht" value="männlich" required> männlich</label><br>
    <label><input type="radio" name="geschlecht" value="weiblich"> weiblich</label><br>
    <label><input type="radio" name="geschlecht" value="divers"> divers</label><br>
    <label><input type="radio" name="geschlecht" value="keine Angabe"> keine Angabe</label></p>

  <p>In welchem Land wohnen Sie?<br>
    <label><input type="radio" name="wohnland" value="Deutschland" required onchange="andereFeld('wohnland')"> Deutschland</label><br>
    <label><input type="radio" name="wohnland" value="Schweiz" onchange="andereFeld('wohnland')"> Schweiz</label><br>
    <label><input type="radio" name="wohnland" value="anderes" onchange="andereFeld('wohnland')"> anderes Land:</label>
    <input type="text" name="wohnland_andere" id="wohnland_andere" placeholder="Welches Land?" style="display:none"></p>

  <p>Was ist Ihre Muttersprache?<br>
    <label><input type="radio" name="muttersprache" value="Deutsch" required onchange="andereFeld('muttersprache')"> Deutsch</label><br>
    <label><input type="radio" name="muttersprache" value="andere" onchange="andereFeld('muttersprache')"> andere:</label>
    <input type="text" name="muttersprache_andere" id="muttersprache_andere" placeholder="Welche?" style="display:none"></p>
</div>`;

/** Zeigt bei «anderes/andere» das Textfeld an und macht es zum Pflichtfeld. */
function andereFeld(name) {
  const wahl = document.querySelector(`input[name="${name}"]:checked`);
  const feld = document.getElementById(`${name}_andere`);
  const an = !!wahl && (wahl.value === "anderes" || wahl.value === "andere");
  feld.style.display = an ? "inline-block" : "none";
  feld.required = an;
  if (an) feld.focus(); else feld.value = "";
}

TEXTE.zu_jung = `<div class="textseite"><h2>Vielen Dank für Ihr Interesse!</h2>
  <p>Leider können an dieser Studie nur Personen ab 18 Jahren teilnehmen. Ihre Angaben wurden nicht gespeichert.</p>
  <p>Sie können dieses Fenster jetzt schliessen.</p></div>`;

/* ---------------------------------------------------------------------
   Brettspielaffinität (drei Fragen, Ethikantrag 2.2.2 d)
   --------------------------------------------------------------------- */
TEXTE.brettspiel = [
  {
    name: "bs_spielen",
    prompt: "Wie oft spielen Sie Brettspiele?",
    options: ["seltener als einmal pro Jahr", "mehrmals pro Jahr", "etwa einmal pro Monat",
              "mehrmals pro Monat", "mindestens einmal pro Woche"],
  },
  {
    name: "bs_neue",
    prompt: "Wie oft probieren Sie Brettspiele aus, die Sie noch nicht kennen?",
    options: ["nie", "seltener als einmal im Jahr", "ein- bis dreimal im Jahr", "etwa alle 2 bis 3 Monate",
              "etwa einmal im Monat", "mehrmals im Monat"],
  },
  {
    name: "bs_anleitung",
    prompt: "Wie oft lesen Sie selbst die Spielanleitung, wenn Sie ein neues Brettspiel lernen?",
    options: ["nie, die Regeln werden mir immer erklärt", "selten", "etwa bei der Hälfte der Spiele",
              "meistens", "immer"],
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
   Kognitive Belastung: angepasste Version des Cognitive Load Questionnaire
   (Krieglstein et al., 2023; CC BY 4.0). 14 Items: GCL6 entfernt (Ethikantrag),
   GCL2 und GCL4 gibt es in der Endfassung des Originals nicht.
   --------------------------------------------------------------------- */
// 9-stufige Skala wie im Original. [[Wortlaut der Endpunkte mit Originalartikel abgleichen]]
TEXTE.clq_skala = ["1<br>trifft überhaupt nicht zu", "2", "3", "4", "5", "6", "7", "8", "9<br>trifft voll und ganz zu"];

TEXTE.clq = [
  { name: "icl1", prompt: "Die Spielregeln waren schwer zu verstehen." },
  { name: "icl2", prompt: "Die Erklärungen der Spielregeln waren schwer nachvollziehbar." },
  { name: "icl3", prompt: "Die Spielregeln waren komplex." },
  { name: "icl4", prompt: "Die Spielregeln enthielten viele komplexe Informationen." },
  { name: "icl5", prompt: "Ohne Vorwissen über Brettspiele waren die Informationen nicht verständlich." },
  { name: "ecl1", prompt: "Es war schwierig, einen Überblick über den Aufbau der Spielanleitung zu erlangen." },
  { name: "ecl2", prompt: "Die Gestaltung der Spielanleitung machte es schwer, die Zusammenhänge zwischen den einzelnen Informationen herzustellen." },
  { name: "ecl3", prompt: "Die Spielanleitung war ungünstig gestaltet." },
  { name: "ecl4", prompt: "Die Gestaltung der Spielanleitung machte es schwierig, wichtige Informationen zügig zu finden." },
  { name: "ecl5", prompt: "Aufgrund der Gestaltung der Spielanleitung hatte ich das Gefühl, mich nicht auf die Spielregeln konzentrieren zu können." },
  { name: "gcl1", prompt: "Ich habe aktiv über die Spielregeln nachgedacht." },
  { name: "gcl3", prompt: "Ich habe mich bemüht, die Spielregeln zu verstehen." },
  { name: "gcl5", prompt: "Ich habe ein umfassendes Verständnis der Spielregeln erlangt." },
  { name: "gcl7", prompt: "Das Regelwissen, das ich durch die Spielanleitung erworben habe, kann ich schnell und sicher im Spiel anwenden." },
];

/* ---------------------------------------------------------------------
   Aufmerksamkeitschecks: einer pro Spiel, versteckt in den Skalen.
   skala: "verstaendlichkeit" (zufällige Position) oder "clq" (feste Position)
   erwartet: richtige Antwort, gezählt ab 0 (1. Skalenpunkt = 0, 9. = 8)
   --------------------------------------------------------------------- */
TEXTE.aufmerksamkeit = [
  { name: "ak1", skala: "clq", position: 7, erwartet: 8,
    prompt: "Bitte kreuzen Sie bei dieser Aussage die 9 an." },
  { name: "ak2", skala: "verstaendlichkeit", erwartet: 0,
    prompt: "Bitte kreuzen Sie bei dieser Aussage «stimmt überhaupt nicht» an." },
  { name: "ak3", skala: "clq", position: 11, erwartet: 2,
    prompt: "Bitte kreuzen Sie bei dieser Aussage die 3 an." },
];

/* ---------------------------------------------------------------------
   Offene Frage am Schluss
   --------------------------------------------------------------------- */
TEXTE.kommentar = `
<div class="textseite formular">
  <h2>Möchten Sie uns noch etwas mitteilen?</h2>
  <p>Hier ist Platz für Anmerkungen, Fragen oder Rückmeldungen zur Studie (freiwillig).</p>
  <textarea name="kommentar" rows="6" style="width:100%; font-size:1em; padding:6px;"></textarea>
</div>`;

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
