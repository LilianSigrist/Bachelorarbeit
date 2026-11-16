# Spielregeln ohne Overload – Online-Studie (jsPsych)

Online-Experiment zur Bachelorarbeit von Lilian Sigrist (ZHAW), betreut von Dr. Christian Thurn (ETH Zürich).
Aufbau und Texte folgen dem Ethikantrag. Offene Stellen sind mit `[[doppelten eckigen Klammern]]` markiert.

## Ablauf

0. Begrüssung
1. Technische Prüfung (nur Computer/Laptop, Mindestgrösse des Fensters)
2. Studieninformation und Einverständnis (Ethikantrag A1.3)
3. Angaben zur Person (Alter, Geschlecht, Wohnland, Muttersprache; unter 18 Jahren: Abbruch ohne Speicherung) und drei Fragen zur Brettspielaffinität
4. Drei Spielanleitungen. Nach jeder: Verständlichkeit (10 Items, zufällige Reihenfolge), Cognitive Load Questionnaire (14 Items, Krieglstein et al., 2023), Verständnisfragen
5. Lesefertigkeit (SLS-Berlin, 3 Minuten)
6. Arbeitsgedächtnis (Word Span Task: Übung, dann Listen mit 3–7 Wörtern; Abbruch, wenn beide Listen einer Länge falsch sind)
6b. Offene Frage «Möchten Sie uns noch etwas mitteilen?» (freiwillig)
7. Speichern der Daten, Abschlussseite mit Link zum separaten Verlosungsformular

## Design

2 × 2 × 2 (Kohärenz × Beispiel × Bild), jede Person liest 3 der 8 Bedingungen.
Die Zuteilung erfolgt über ein Youden Square mit 8 Sequenzgruppen (`js/config.js`, `YOUDEN`).
Jedes der drei Spiele erhält die Bedingung aus seiner Spalte im Youden Square. Die Lesereihenfolge der drei Spiele wird pro Person zufällig gemischt (`REIHENFOLGE_ZUFAELLIG`); die Position steht in der Spalte `position`.

**Provisorisch:** Für Kommissar Nebelschleier (17), Karawanenbasar (19) und Kräuterhof (11) gibt es erst eine Version, die für alle 8 Bedingungen verwendet wird.

## Testen

Ohne DataPipe-ID läuft die Studie im **Testmodus**: Es wird nichts online gespeichert, am Ende können die Daten als CSV
heruntergeladen werden. Oben erscheint ein blauer Balken mit der Gruppe.

- `…/index.html?test=1` – Testmodus (auch wenn DataPipe schon eingerichtet ist)
- `…/index.html?test=1&gruppe=5` – eine bestimmte Sequenzgruppe testen
- `…/index.html?test=1&schnell=1` – ohne die Mindestlesezeit von 3 Minuten pro Anleitung

Technischer Selbsttest (für Claude): `node tests/pruefen.js`

## Wo ändere ich was?

| Datei | Inhalt |
|---|---|
| `js/config.js` | DataPipe-ID, Verlosungslink, Kontakte, Dauer, Auswahl der 3 Spiele, Design, Zeitlimits |
| `js/texte.js` | Einverständnis, Fragebögen, Items, Abschlussseite |
| `js/anleitungen.js` | Bilddateien der Anleitungen (pro Spiel 8 Versionen) und Verständnisfragen |
| `anleitungen/` | Die Bilder der Anleitungen (siehe `anleitungen/README.md`) |

## Datenspeicherung

**JATOS (gemäss Ethikantrag, DeSciL-Server der ETH):** Den Inhalt dieses Repositorys (ohne `tests/`) als Studie in
JATOS importieren bzw. hochladen, `index.html` als Startseite der Komponente wählen. Die Studie erkennt JATOS
automatisch, speichert die Daten am Ende als CSV in JATOS und markiert die Teilnahme als abgeschlossen.
Die Sequenzgruppe wird auf JATOS zufällig zugeteilt (Spalte `gruppe`).

**Alternative ausserhalb von JATOS: DataPipe.** Dann die DataPipe-Experiment-ID in `js/config.js` eintragen
(OSF-Projekt privat, Speicherort Deutschland; unter «Condition assignment» 8 Bedingungen einstellen).

Ohne JATOS und ohne DataPipe-ID (z. B. auf GitHub Pages) läuft die Studie im Testmodus und speichert nichts.

**Nach Änderungen:** In `index.html` die Zahl hinter `?v=` erhöhen, damit Browser nicht die alte Version aus dem
Cache laden.

## GitHub Pages

Repository → Settings → Pages → Source: «Deploy from a branch», Branch `main`, Ordner `/ (root)`.
Die Studie ist dann unter `https://liliansigrist.github.io/bachelorarbeit/` erreichbar.

## Wichtige Datenspalten

Achtung: jsPsych speichert Skalenantworten ab 0. Auf der 5er-Skala ist «1» also 0 und «5» ist 4, auf der 9er-Skala ist «9» gleich 8.


| Spalte | Bedeutung |
|---|---|
| `teilnahme_id` | zufällige ID (auch Dateiname bei DataPipe) |
| `gruppe`, `gruppe_quelle` | Sequenzgruppe 1–8 und wie sie zugeteilt wurde (datapipe / zufall / url) |
| `aufgabe` | Art des Trials (z. B. `lesen`, `verstaendlichkeit`, `cognitive_load`, `verstaendnisfragen`, `sls`, `wordspan`) |
| `alter`, `geschlecht`, `wohnland`, `muttersprache` | Angaben zur Person (in der Zeile `aufgabe = person`) |
| `position`, `spiel`, `bedingung`, `kohaerenz`, `beispiel`, `bild` | Angaben zur jeweiligen Anleitung |
| `rt`, `lesezeit_s` | Bearbeitungszeit in ms bzw. Lesezeit in Sekunden |
| `response` | Antworten (bei Fragebögen als JSON mit Item-Namen; `_inv` = invertiertes Item, noch nicht umgepolt) |
| `ak_name`, `ak_antwort`, `ak_bestanden` | Aufmerksamkeitscheck (je einer pro Spiel: Spiel 1 und 3 im CLQ, Spiel 2 in der Verständlichkeit) |
| `kommentar` | Antwort auf die offene Frage am Schluss |
| `vf_richtig`, `vf_anzahl` | richtig beantwortete Verständnisfragen |
| `richtig` (sls) | Satz richtig beurteilt; nicht bearbeitete Sätze fehlen |
| `richtig_in_position`, `alles_richtig` (wordspan) | Word-Span-Auswertung; `uebung = true` beim Übungsdurchgang |
