/* =====================================================================
   EINSTELLUNGEN DER STUDIE
   Hier stehen alle Werte, die du selbst ändern kannst.
   Alles in [[doppelten eckigen Klammern]] ist noch offen.
   ===================================================================== */

const CONFIG = {
  // ---------------------------------------------------------------
  // Datenspeicherung über DataPipe (https://pipe.jspsych.org)
  // Solange hier "" steht, werden KEINE Daten online gespeichert.
  // Am Ende erscheint dann ein Button, um die Daten als CSV herunterzuladen
  // (praktisch zum Testen).
  // ---------------------------------------------------------------
  DATAPIPE_ID: "",

  // Link zum separaten Formular für Verlosung und Ergebnisse
  // (darf NICHT mit den Studiendaten verknüpft sein, siehe Ethikantrag 3.1).
  VERLOSUNG_URL: "",

  // Ungefähre Dauer in Minuten (wird in der Studieninformation angezeigt)
  DAUER_MIN: 35,

  // Erhebungszeitraum, Kontakte (erscheinen auf der Startseite)
  ZEITRAUM: "[[01.01.2027 – 22.01.2027]]",
  KONTAKT: "Lilian Sigrist, ZHAW, [[E-Mail]]",
  PROJEKTLEITUNG: "Dr. Christian Thurn, Professur für Lehr- und Lernforschung, ETH Zürich, [[E-Mail]]",
  KONTAKT_EMAIL: "[[E-Mail]]",
  ETHIK_NUMMER: "[[XX ETHICS-YYY]]",
  VERLOSUNG_TEXT: "[[Anzahl]] Gutscheine im Wert von je CHF [[Betrag]]",
  ZIEHUNG_BIS: "[[28.02.2027]]",

  // ---------------------------------------------------------------
  // Die drei Spiele der Studie, in der Lesereihenfolge (Spiel 1, 2, 3).
  // Gültige Nummern: siehe js/anleitungen.js (01, 11–19).
  // [[Auswahl der drei finalen Spiele festlegen]]
  // ---------------------------------------------------------------
  SPIELE: ["01", "11", "12"],

  // ---------------------------------------------------------------
  // Die 8 Bedingungen des 2 × 2 × 2-Designs (aus der Poweranalyse)
  // ---------------------------------------------------------------
  BEDINGUNGEN: {
    1: { kohaerenz: "kohärent",       beispiel: "mit",  bild: "mit"  },
    2: { kohaerenz: "kohärent",       beispiel: "ohne", bild: "ohne" },
    3: { kohaerenz: "nicht kohärent", beispiel: "mit",  bild: "ohne" },
    4: { kohaerenz: "nicht kohärent", beispiel: "ohne", bild: "mit"  },
    5: { kohaerenz: "kohärent",       beispiel: "mit",  bild: "ohne" },
    6: { kohaerenz: "kohärent",       beispiel: "ohne", bild: "mit"  },
    7: { kohaerenz: "nicht kohärent", beispiel: "mit",  bild: "mit"  },
    8: { kohaerenz: "nicht kohärent", beispiel: "ohne", bild: "ohne" },
  },

  // Youden Square: Gruppe -> Bedingung bei Spiel 1, Spiel 2, Spiel 3
  YOUDEN: {
    1: [1, 2, 4],
    2: [2, 3, 1],
    3: [3, 4, 2],
    4: [4, 1, 3],
    5: [5, 6, 8],
    6: [6, 7, 5],
    7: [7, 8, 6],
    8: [8, 5, 7],
  },

  // ---------------------------------------------------------------
  // Technische Mindestanforderungen (Ausschluss von Smartphones)
  // ---------------------------------------------------------------
  MIN_BREITE: 1000,
  MIN_HOEHE: 600,

  // ---------------------------------------------------------------
  // Lesefertigkeit (SLS-Berlin): Zeitlimit in Sekunden
  // ---------------------------------------------------------------
  SLS_ZEIT_S: 180,

  // ---------------------------------------------------------------
  // Word Span Task [[Parameter nach Berkowitz et al. (2022) prüfen]]
  // ---------------------------------------------------------------
  WORDSPAN: {
    LISTENLAENGEN: [2, 3, 4, 5, 6, 7], // Anzahl Wörter pro Liste
    DURCHGAENGE_PRO_LAENGE: 2,
    WORT_MS: 1000,   // Anzeigedauer pro Wort
    PAUSE_MS: 250,   // leerer Bildschirm zwischen den Wörtern
  },
};
