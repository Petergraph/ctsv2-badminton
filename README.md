# Mannschaftsseite Charlottenburger TSV II — Saison 2026/27

Statische Website plus eine kleine Netlify-Function für den Anwesenheitscheck.
Kein Build-Schritt nötig: Änderungen an den Dateien unter `site/data/` sind nach dem
Commit binnen einer Minute live.

**Wer darf was ändern:** Robert und Jens. Beide direkt hier im Browser — Datei öffnen,
Stift-Symbol, ändern, *Commit changes*. Kein Git nötig, keine Software.

## Aufbau

| Pfad | Inhalt |
|---|---|
| `site/index.html` | Gerüst — hier normalerweise nichts ändern |
| `site/assets/` | Aussehen, Logik, **Bilder** |
| `site/data/vorberichte.js` | **die Texte vor und nach jedem Spiel** |
| `site/data/spielplan.js` | Spielplan, Ergebnisse, Links zu den nuLiga-Spielberichten |
| `site/data/tabelle.js` | Tabellenstand |
| `site/data/anwesenheit.js` | Startwerte für „Wer ist dabei?" (danach übernimmt der Server) |
| `site/data/hallen.js` | Hallen, Adressen, Koordinaten, Eingangshinweise |
| `site/data/teams.js`, `site/data/kader.js` | Vereine und unsere Mannschaft |
| `netlify/functions/anwesenheit.mjs` | speichert die Zusagen |
| `konzept/` | Konzept, Bildquellen, Bild-Prompts, Netlify-Anleitung |

## Die vier häufigsten Änderungen

**1. Vor- oder Nachbericht** — `site/data/vorberichte.js`, beim passenden Datum:
```js
"2026-11-04": {
  titel: "Die Nomaden kommen zu uns",
  text: "Erster Absatz.\n\nZweiter Absatz.",
  nachbericht: ""          // nach dem Spiel: wie es ausging
},
```

**2. Ergebnis** — `site/data/spielplan.js`, beim Spiel `"ergebnis": "5:3"`.
Das Spiel wandert ohnehin drei Stunden nach Anwurf automatisch von „Kommende Spiele"
nach „Gespielt".

**3. Tabelle** — `site/data/tabelle.js` aus nuLiga übertragen, `stand` anpassen.
Das erledigt normalerweise die wöchentliche automatische Aktualisierung.

**4. Bild** — Datei nach `site/assets/bilder/` hochladen (*Add file → Upload files*),
dann eintragen: Spieler-Comic in `site/data/kader.js` als `"comic": "spieler-jens.png"`,
Gegner-Maskottchen in `site/data/teams.js` als `"maskottchen": "gegner-dcbv.png"`.


## Einspringer und Sollstärke

Pro Spiel brauchen wir **4 Herren und 2 Damen**. Zweimal in der Saison darf mit
3 Herren oder mit 1 Dame angetreten werden — der Anwesenheitsblock zählt mit und warnt,
wenn diese zwei Ausnahmen verbraucht sind.

Wer aushelfen kann, wird in `site/data/kader.js` unter `ersatz` eingetragen:

```js
ersatz: {
  herren: [ { vorname: "Tobias", comic: "", rolle: "Einspringer" } ],
  damen:  [ { vorname: "Anne",   comic: "", rolle: "Einspringerin" } ]
}
```

Die Person taucht dann in jedem Spiel als eigene Gruppe „Einspringer" auf und zählt
bei der Sollstärke ganz normal mit.

## Regeln beim Bearbeiten

- **Kommas am Zeilenende nicht löschen** — fehlt eines, bleibt die Seite leer.
- Anführungszeichen im Fließtext als `„…“` schreiben, nicht als `"`.
- Absätze im Text mit `\n\n` trennen.
- Kaputt? Datei öffnen → *History* → alte Version wiederherstellen. Es geht nichts verloren.

## Anwesenheitscheck

Klick auf einen Namen schaltet weiter: keine Angabe → dabei → unklar → raus.
Gilt für alle, wird sofort gespeichert. Läuft über Netlify Blobs, ohne Anmeldung —
wer den Link hat, kann klicken. Bei sieben Leuten ist das gewollt.

Wer es enger will: in Netlify unter *Site configuration → Environment variables* die
Variable `TEAM_CODE` setzen. Dann fragt die Seite einmalig nach dem Wort und merkt es sich.

Solange die Function nicht läuft (etwa bei einem reinen Drag-and-Drop-Deploy), zeigt die
Seite die Werte aus `site/data/anwesenheit.js` und sagt das auch.

## Deployment

Netlify ist mit diesem Repository verbunden: jeder Commit auf `main` geht automatisch live.
Konfiguration steht in `netlify.toml` (`publish = "site"`, Functions aus `netlify/functions`).
