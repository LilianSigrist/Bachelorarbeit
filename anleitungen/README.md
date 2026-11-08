# Spielanleitungen

Pro Spiel ein Ordner (`01`, `11`, … `19`). Darin die Seiten jeder Version als Bild (PNG oder JPG), z. B.:

```
anleitungen/01/B1_seite1.png
anleitungen/01/B1_seite2.png
anleitungen/01/B1_seite3.png
anleitungen/01/B2_seite1.png
...
```

`B1` bis `B8` sind die 8 Bedingungen aus `js/config.js`:

| Version | Kohärenz | Beispiel | Bild |
|---|---|---|---|
| B1 | kohärent | mit | mit |
| B2 | kohärent | ohne | ohne |
| B3 | nicht kohärent | mit | ohne |
| B4 | nicht kohärent | ohne | mit |
| B5 | kohärent | mit | ohne |
| B6 | kohärent | ohne | mit |
| B7 | nicht kohärent | mit | mit |
| B8 | nicht kohärent | ohne | ohne |

Danach die Dateinamen in `js/anleitungen.js` eintragen. Bilder werden in voller Breite (max. 880 px) untereinander angezeigt;
eine Breite von ca. 1600 px pro Seite ist gut lesbar.

Am einfachsten: Die PDFs an Claude schicken. Claude wandelt sie in Bilder um und trägt sie ein.
