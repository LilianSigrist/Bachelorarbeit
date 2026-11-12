# Spielregeln ohne Overload – Online-Studie (jsPsych)

Online-Experiment zur Bachelorarbeit von Lilian Sigrist (ZHAW), betreut von Dr. Christian Thurn (ETH Zürich).
Aufbau und Texte folgen dem Ethikantrag. Offene Stellen sind mit `[[doppelten eckigen Klammern]]` markiert.

## Ablauf

1. Technische Prüfung (nur Computer/Laptop, Mindestgrösse des Fensters)
2. Studieninformation und Einverständnis (Ethikantrag A1.3)
3. Angaben zur Person (Alter, Geschlecht, Wohnland, Muttersprache; unter 18 Jahren: Abbruch ohne Speicherung) und Fragen zur Brettspielerfahrung (Frage 2b nur, wenn bei Frage 2 nicht «nie»)
4. Drei Spielanleitungen. Nach jeder: Verständlichkeit (10 Items, zufällige Reihenfolge), Cognitive Load Questionnaire (15 Items, Krieglstein et al., 2023), Verständnisfragen
5. Lesefertigkeit (SLS-Berlin, 3 Minuten)
6. Arbeitsgedächtnis (Word Span Task: Übung, dann Listen mit 3–7 Wörtern; Abbruch, wenn beide Listen einer Länge falsch sind)
7. Speichern der Daten, Abschlussseite mit Link zum separaten Verlosungsformular

## Design

2 × 2 × 2 (Kohärenz × Beispiel × Bild), jede Person liest 3 der 8 Bedingungen.
Die Zuteilung erfolgt über ein Youden Square mit 8 Sequenzgruppen (`js/config.js`, `YOUDEN`).
Die drei Spiele werden immer in derselben Reihenfolge gelesen (Spiel 1, 2, 3), die Bedingung wechselt je nach Gruppe.

## Testen

Ohne DataPipe-ID läuft die Studie im **Testmodus**: Es wird nichts online gespeichert, am Ende können die Daten als CSV
heruntergeladen werden. Oben erscheint ein blauer Balken mit der Gruppe.

- `…/index.html?test=1` – Testmodus (auch wenn DataPipe schon eingerichtet ist)
- `…/index.html?test=1&gruppe=5` – eine bestimmte Sequenzgruppe testen

Technischer Selbsttest (für Claude): `node tests/pruefen.js`

## Wo ändere ich was?

| Datei | Inhalt |
|---|---|
| `js/config.js` | DataPipe-ID, Verlosungslink, Kontakte, Dauer, Auswahl der 3 Spiele, Design, Zeitlimits |
| `js/texte.js` | Einverständnis, Fragebögen, Items, Abschlussseite |
| `js/anleitungen.js` | Bilddateien der Anleitungen (pro Spiel 8 Versionen) und Verständnisfragen |
| `anleitungen/` | Die Bilder der Anleitungen (siehe `anleitungen/README.md`) |

## Datenspeicherung mit DataPipe

GitHub Pages zeigt die Studie nur an, speichert aber keine Daten. Dafür wird DataPipe genutzt, das die Daten als CSV in
ein OSF-Projekt schreibt.

1. Auf [osf.io](https://osf.io) ein Konto und ein **privates** Projekt anlegen. Als Speicherort «Germany – Frankfurt» wählen.
2. Auf [pipe.jspsych.org](https://pipe.jspsych.org) ein Konto anlegen und mit OSF verbinden (OSF-Token).
3. In DataPipe ein neues Experiment anlegen, mit dem OSF-Projekt verknüpfen.
4. **Data collection** aktivieren und unter **Condition assignment** 8 Bedingungen einstellen
   (für eine gleichmässige Verteilung auf die Sequenzgruppen).
5. Die Experiment-ID in `js/config.js` bei `DATAPIPE_ID` eintragen.

## GitHub Pages

Repository → Settings → Pages → Source: «Deploy from a branch», Branch `main`, Ordner `/ (root)`.
Die Studie ist dann unter `https://liliansigrist.github.io/bachelorarbeit/` erreichbar.

## Wichtige Datenspalten

| Spalte | Bedeutung |
|---|---|
| `teilnahme_id` | zufällige ID (auch Dateiname bei DataPipe) |
| `gruppe`, `gruppe_quelle` | Sequenzgruppe 1–8 und wie sie zugeteilt wurde (datapipe / zufall / url) |
| `aufgabe` | Art des Trials (z. B. `lesen`, `verstaendlichkeit`, `cognitive_load`, `verstaendnisfragen`, `sls`, `wordspan`) |
| `alter`, `geschlecht`, `wohnland`, `muttersprache` | Angaben zur Person (in der Zeile `aufgabe = person`) |
| `position`, `spiel`, `bedingung`, `kohaerenz`, `beispiel`, `bild` | Angaben zur jeweiligen Anleitung |
| `rt`, `lesezeit_s` | Bearbeitungszeit in ms bzw. Lesezeit in Sekunden |
| `response` | Antworten (bei Fragebögen als JSON mit Item-Namen; `_inv` = invertiertes Item, noch nicht umgepolt) |
| `vf_richtig`, `vf_anzahl` | richtig beantwortete Verständnisfragen |
| `richtig` (sls) | Satz richtig beurteilt; nicht bearbeitete Sätze fehlen |
| `richtig_in_position`, `alles_richtig` (wordspan) | Word-Span-Auswertung; `uebung = true` beim Übungsdurchgang |
