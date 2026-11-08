/* =====================================================================
   SPIELANLEITUNGEN
   Für jedes Spiel gibt es 8 Versionen (Bedingungen 1–8, siehe config.js).
   Pro Version trägst du die Bilddateien der Seiten ein, in der richtigen
   Reihenfolge. Die Bilder liegen im Ordner anleitungen/<Nummer>/.

   Beispiel:
     1: ["anleitungen/01/B1_seite1.png", "anleitungen/01/B1_seite2.png", "anleitungen/01/B1_seite3.png"],

   Solange eine Liste leer ist ([]), wird ein Platzhalter angezeigt.
   ===================================================================== */

const leer = () => ({ 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [] });

const ANLEITUNGEN = {
  "01": { titel: "Glimmerhain",             versionen: leer() },
  "11": { titel: "Kräuterhof",              versionen: leer() },
  "12": { titel: "Gleisfieber",             versionen: leer() },
  "13": { titel: "Olymp-Aufstieg",          versionen: leer() },
  "14": { titel: "Dampfwerk",               versionen: leer() },
  "15": { titel: "Silberpfeil",             versionen: leer() },
  "16": { titel: "Kunsthandel",             versionen: leer() },
  "17": { titel: "Kommissar Nebelschleier", versionen: leer() },
  "18": { titel: "Nebelhaus",               versionen: leer() },
  "19": { titel: "Karawanenbasar",          versionen: leer() },
};

/* ---------------------------------------------------------------------
   VERSTÄNDNISFRAGEN (Manipulationscheck) pro Spiel
   [[Finale Fragen einfügen.]] Format:
     { frage: "...", optionen: ["A", "B", "C", "D"], korrekt: "B" }
   --------------------------------------------------------------------- */
const platzhalterFragen = (titel) => [
  {
    frage: `[[Platzhalter]] Verständnisfrage 1 zu «${titel}»`,
    optionen: ["Antwort A", "Antwort B", "Antwort C", "Antwort D"],
    korrekt: "Antwort A",
  },
  {
    frage: `[[Platzhalter]] Verständnisfrage 2 zu «${titel}»`,
    optionen: ["Antwort A", "Antwort B", "Antwort C", "Antwort D"],
    korrekt: "Antwort B",
  },
];

const VERSTAENDNISFRAGEN = {};
for (const [nr, spiel] of Object.entries(ANLEITUNGEN)) {
  VERSTAENDNISFRAGEN[nr] = platzhalterFragen(spiel.titel);
}
