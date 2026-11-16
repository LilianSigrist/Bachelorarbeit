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

// PROVISORISCH: Es gibt erst eine Version pro Spiel. Sie wird für alle 8 Bedingungen
// verwendet, bis die 8 Varianten fertig sind.
const provisorisch = (nr) => {
  const seiten = [1, 2, 3].map((s) => `anleitungen/${nr}/provisorisch_seite-${s}.jpg`);
  return { 1: seiten, 2: seiten, 3: seiten, 4: seiten, 5: seiten, 6: seiten, 7: seiten, 8: seiten };
};

const ANLEITUNGEN = {
  "01": { titel: "Glimmerhain",             versionen: leer() },
  "11": { titel: "Kräuterhof",              versionen: provisorisch("11") },
  "12": { titel: "Gleisfieber",             versionen: leer() },
  "13": { titel: "Olymp-Aufstieg",          versionen: leer() },
  "14": { titel: "Dampfwerk",               versionen: leer() },
  "15": { titel: "Silberpfeil",             versionen: leer() },
  "16": { titel: "Kunsthandel",             versionen: leer() },
  "17": { titel: "Kommissar Nebelschleier", versionen: provisorisch("17") },
  "18": { titel: "Nebelhaus",               versionen: leer() },
  "19": { titel: "Karawanenbasar",          versionen: provisorisch("19") },
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

// Fragen aus dem Ethikantrag (2.2.2, Manipulationscheck)
VERSTAENDNISFRAGEN["11"] = [
  {
    frage: "Du nimmst die Karte auf Platz 4 der Samenreihe. Wie viel Wasser musst du dafür auf die Karten legen?",
    optionen: ["0 Wasser", "1 Wasser", "3 Wasser", "4 Wasser"],
    korrekt: "3 Wasser",
  },
  {
    frage: "Welche Pflanzen in deinem Garten bringen bei der Endwertung Punkte?",
    optionen: ["Alle Pflanzen, auch Sämlinge", "Nur ausgewachsene Pflanzen", "Nur Pflanzen auf Sonnenfeldern",
               "Nur Pflanzen, die zu einem Auftrag gehören"],
    korrekt: "Nur ausgewachsene Pflanzen",
  },
];
VERSTAENDNISFRAGEN["19"] = [
  {
    frage: "Was passiert, wenn du ein Kamel erwirbst?",
    optionen: ["Die Waren am Stand kosten 1 Münze weniger.", "Du kannst in der Handelszeit einen Tausch mehr machen.",
               "Dein Handkartenlimit erhöht sich um 1.", "Du darfst 2 Handelskarten ziehen."],
    korrekt: "Dein Handkartenlimit erhöht sich um 1.",
  },
  {
    frage: "Was ist während der Handelszeit <strong>nicht</strong> erlaubt?",
    optionen: ["Waren gegen Münzen tauschen", "Mehrere Geschäfte in einer Runde abschliessen",
               "Über die eigenen Handkarten sprechen", "Die eigenen Handkarten zeigen"],
    korrekt: "Die eigenen Handkarten zeigen",
  },
];
VERSTAENDNISFRAGEN["17"] = [
  {
    frage: "In deinem Notizbuch liegen bereits 6 Hinweise. Du lichtest ein Nebelplättchen. Was passiert?",
    optionen: ["Du nimmst den Hinweis trotzdem und legst einen anderen zurück.", "Du darfst keinen weiteren Hinweis nehmen.",
               "Du musst das gelichtete Plättchen wieder umdrehen.", "Du gibst den Hinweis einer anderen Person."],
    korrekt: "Du darfst keinen weiteren Hinweis nehmen.",
  },
  {
    frage: "Wie viele Aktionen kostet es, einen Fall zu lösen?",
    optionen: ["Keine", "1 Aktion", "2 Aktionen", "Alle 3 Aktionen eines Zuges"],
    korrekt: "Keine",
  },
];
