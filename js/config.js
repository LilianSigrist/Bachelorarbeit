/* =====================================================================
   EINSTELLUNGEN DER STUDIE
   Hier stehen alle Werte, die du selbst ändern kannst.
   Alles in [[doppelten eckigen Klammern]] ist noch offen.
   ===================================================================== */

const CONFIG = {
  // ---------------------------------------------------------------
  // Datenspeicherung
  // Läuft die Studie auf JATOS (DeSciL-Server der ETH), werden die Daten
  // automatisch in JATOS gespeichert. Hier ist dafür nichts einzustellen.
  // Alternativ (nur ausserhalb von JATOS): DataPipe (https://pipe.jspsych.org).
  // Ohne JATOS und ohne DataPipe-ID werden KEINE Daten gespeichert
  // (Testmodus mit CSV-Download am Ende, z. B. auf GitHub Pages).
  // ---------------------------------------------------------------
  DATAPIPE_ID: "",

  // Link zum separaten Formular für Verlosung und Ergebnisse
  // (darf NICHT mit den Studiendaten verknüpft sein, siehe Ethikantrag 3.1).
  VERLOSUNG_URL: "",

  // Ungefähre Dauer in Minuten (wird in der Studieninformation angezeigt)
  DAUER_MIN: "[[xx]]",

  // Erhebungszeitraum, Kontakte (erscheinen auf der Startseite)
  ZEITRAUM: "16.01.2027 – 28.02.2027",
  KONTAKT: "Lilian Sigrist, ZHAW, sigrilil@students.zhaw.ch",
  PROJEKTLEITUNG: "Dr. Christian Thurn, Professur für Lehr- und Lernforschung, ETH Zürich, christian.thurn@gess.ethz.ch",
  KONTAKT_EMAIL: "sigrilil@students.zhaw.ch",
  DATENSCHUTZ: "Tomislav Mitar, tomislav.mitar@sl.ethz.ch",
  ETHIK_NUMMER: "[[XX ETHICS-YYY]]",
  VERLOSUNG_TEXT: "2 × CHF 50",
  ZIEHUNG_BIS: "[[xx]]",
  LOESCHUNG_BIS: "[[xx]]", // Löschung der E-Mail-Adressen

  // ---------------------------------------------------------------
  // Die drei Spiele der Studie (Spiel 1, 2, 3 im Youden Square).
  // Gültige Nummern: siehe js/anleitungen.js (01, 11–19).
  // Jedes Spiel behält die Bedingung aus dem Youden Square; mit
  // REIHENFOLGE_ZUFAELLIG wird nur die Lesereihenfolge pro Person gemischt.
  // ---------------------------------------------------------------
  SPIELE: ["17", "19", "11"],
  REIHENFOLGE_ZUFAELLIG: true,

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
  // Mindestlesezeit pro Anleitung in Sekunden: Der «Weiter»-Button ist
  // vorher deaktiviert (ohne sichtbaren Countdown).
  // Zum Testen ohne Warten: index.html?test=1&schnell=1
  // ---------------------------------------------------------------
  MIN_LESEZEIT_S: 180,

  // ---------------------------------------------------------------
  // Lesefertigkeit (SLS-Berlin): Zeitlimit in Sekunden
  // ---------------------------------------------------------------
  SLS_ZEIT_S: 180,

  // ---------------------------------------------------------------
  // Word Span Task [[Parameter mit Berkowitz et al. (2022) abgleichen]]
  // ---------------------------------------------------------------
  WORDSPAN: {
    LISTENLAENGEN: [3, 4, 5, 6, 7], // Anzahl Wörter pro Liste (Übung: 2 Wörter)
    DURCHGAENGE_PRO_LAENGE: 2,
    WORT_MS: 1000,   // Anzeigedauer pro Wort
    PAUSE_MS: 250,   // leerer Bildschirm zwischen den Wörtern
    ABBRUCHREGEL: true, // Ende, wenn alle Listen einer Länge falsch sind
  },
};
