# Charlottenburger TSV II – Saison 2026/27
## Website-Konzept

*Stand: 12.09.2026 · Datenbasis: nuLiga BVBB, D-Klasse 2, Gruppe 42121*

---

## 1. Was die Seite leisten soll

Die nuLiga-Seite ist vollständig, aber hässlich und unpersönlich. Unsere Seite soll dasselbe
liefern – und drei Dinge mehr:

1. **Sofort-Antwort auf die einzige Frage, die Spieler wirklich haben:**
   *„Wann und wo ist das nächste Spiel, und wie komme ich da hin?"*
2. **Vorfreude:** pro Spiel ein kurzer, augenzwinkernder Vorbericht.
3. **Wiedererkennbarkeit:** comic-artiges, wimmeliges Design, das Spaß macht und das man
   in der WhatsApp-Gruppe gerne teilt.

Bewusst **nicht** im Scope (zumindest v1): Live-Ergebnisse, Aufstellungsplanung, Login,
Spielerstatistiken. Das kann nuLiga besser bzw. wir liefern es später nach.

---

## 2. Harte Fakten der Saison

| | |
|---|---|
| Liga | BVBB Mannschaftsmeisterschaft 2026/27, **D-Klasse 2** |
| Teams | 8 |
| Spiele gesamt (Liga) | 56 |
| **Unsere Spiele** | **14** – 7 Heim, 7 Auswärts |
| Heimhalle | **KF** – Sporthalle Peter-Ustinov-Schule, Kuno-Fischer-Str. 22, 14057 Berlin-Charlottenburg (Seiteneingang, obere Halle) |
| Saisonstart | Mi 30.09.2026, 19:30 – Heim gegen Deutsch-Chinesischer BV II |
| Saisonende | Mi 17.03.2027, 19:30 – Heim gegen SV Berliner Brauereien VIII |
| Mannschaftsführer | Robert Schultz-Heienbrok |
| Staffelleiter | Philip Bomsdorf |

**Auswärts-Hallen, die wir diese Saison sehen:**
KL Schöneberg · DI Tempelhof · TM Prenzlauer Berg · TU Kreuzberg · RA Moabit ·
DE Steglitz · ED Fürstenwalde (die einzige Reise raus aus Berlin – 60 km, Sonntag 10:00,
verdient einen eigenen „Expeditions"-Vorbericht)

---

## 3. Seitenstruktur

Eine **Single-Page-Application mit Deep-Links** – keine klassische Multi-Page-Site. Alles läuft
in einer `index.html`, die Inhalte kommen aus JSON. Vorteil: kein Redakteursaufwand für
Navigation, alles ist über einen Link teilbar (`…/#spiel/2026-09-30`).

```
┌─ HERO ────────────────────────────────────────────────┐
│  Wimmelbild-Banner (Comic-Halle)                      │
│  "CTSV II · D-Klasse 2 · Saison 26/27"                │
│  ┌───────────────────────────────────────────────┐    │
│  │ NÄCHSTES SPIEL – Countdown                    │    │
│  │ Mi 30.09. 19:30 · HEIM · vs. DCBV II          │    │
│  │ [Kalender +]  [Anfahrt]  [Vorbericht lesen]   │    │
│  └───────────────────────────────────────────────┘    │
├─ SPIELPLAN ───────────────────────────────────────────┤
│  14 Karten, chronologisch, Heim/Auswärts farbcodiert  │
│  Filter: [Alle] [Nur Heim] [Nur Auswärts]             │
│  Klick auf Karte -> Spieltag-Detail                   │
├─ SPIELTAG-DETAIL (Overlay/Route) ─────────────────────┤
│  · Gegner-Wappen (Comic-Maskottchen)                  │
│  · VORBERICHT (3-5 Sätze, launig)                     │
│  · Halle: Name, Adresse, Eingangshinweis (!)          │
│  · ANFAHRTSKARTE + ÖPNV-Hinweis + Routen-Buttons      │
│  · Treffpunkt/Abfahrtszeit (manuell pflegbar)         │
├─ TABELLE ─────────────────────────────────────────────┤
│  Live-Stand, unsere Zeile hervorgehoben               │
├─ DIE MANNSCHAFT ──────────────────────────────────────┤
│  Karten mit Foto-Platzhalter (später echte Fotos)     │
├─ DIE GEGNER ──────────────────────────────────────────┤
│  7 Kacheln: Maskottchen, Halle, Vereinslink           │
└─ FOOTER: Quelle nuLiga, Kontakt, Impressum-Hinweis ───┘
```

**Zusätzlich wertvoll und billig zu haben:**
- **„Zum Kalender hinzufügen"** pro Spiel (`.ics`-Download, clientseitig erzeugt) – und ein
  Abo-Link für alle 14 Spiele. Das ist der Feature, den die Mannschaft am meisten nutzen wird.
- **Print-Stylesheet**: eine A4-Seite Spielplan zum Aushängen in der Halle.
- **Dark Mode** – automatisch nach Systemeinstellung.

---

## 4. Die Vorberichte

Pro Spiel 3–5 Sätze, freundlich frotzelnd, nie verletzend. Ein wiederkehrendes Gerüst hält
die Qualität konstant und macht das Schreiben schnell:

1. **Anlass** – was für ein Spiel ist das? (Auftakt, Derby, Rückspiel, Reise, Saisonfinale)
2. **Der Gegner in einem Satz** – Verein, Halle, Eigenheit
3. **Eine schräge Beobachtung** – die 12:30-Sonntagsanwurfzeit, die sechs Hallen von
   Vorspiel QSB, die Klingel-an-der-Hector-Peterson-Schule
4. **Der Praxis-Hinweis** – Anfahrt, Eingang, Parken, wann man los muss
5. **Pointe / Ausblick**

Drei Beispiele (fertig verwendbar):

> **Mi 30.09. · Heim · vs. Deutsch-Chinesischer BV II**
> Saisonauftakt in der eigenen Halle, und zwar mittwochs um halb acht – die zivilisierteste
> Anwurfzeit der ganzen Liga. Der Deutsch-Chinesische BV kommt aus Kreuzberg und bringt
> traditionell technisch saubere Federballkunst mit. Wir bringen Heimvorteil, die obere Halle
> und die Tatsache mit, dass wir wissen, wo der Seiteneingang ist. Aufwärmen ab 19:00.

> **So 21.02. · Auswärts · SG Gaselan Fürstenwalde II · E.DIS Arena**
> Die Auswärtsfahrt der Saison: 60 Kilometer nach Fürstenwalde, Anwurf sonntags um 10:00.
> Das heißt Abfahrt im Dunkeln, Kaffee als Grundnahrungsmittel und eine Halle, die
> tatsächlich „Arena" heißt – die einzige unserer Saison mit Namenssponsor. Fahrgemeinschaften
> bitte bis Donnerstag in die Gruppe. Wer verschläft, spielt nicht.

> **So 24.01. · Auswärts · DIBVM V · Kurt-Tucholsky-Grundschule, Moabit**
> DIBVM spielt in vier verschiedenen Hallen, je nachdem, wie der Wind steht – diesmal
> Rathenower Straße, hinter dem Jugendfreizeitheim. Anwurf 12:30, also der seltene Luxus
> eines Auswärtsspiels mit vorherigem Frühstück. Gefunden hat die Halle noch jeder,
> der dem Hinweis „hinter dem Jugendfreizeitheim" geglaubt hat.

**Pflegeaufwand:** Alle 14 Vorberichte können in einem Rutsch vorab geschrieben und in
`data/vorberichte.json` abgelegt werden. Nach dem Spiel kann optional ein Zweizeiler
„Nachbericht" ergänzt werden – das ist der Teil, der die Seite lebendig hält.

---

## 5. Anfahrtskarten – die technische Entscheidung

Drei Optionen, absteigend nach Komfort:

| Option | Wie | Kosten | Haken |
|---|---|---|---|
| **A. Leaflet + OpenStreetMap** | echte, zoombare Karte im Browser | 0 € | braucht echtes Hosting (siehe §7); Kacheln werden von OSM geladen |
| **B. Statisches Kartenbild** | je Halle ein PNG-Ausschnitt, einmal erzeugt | 0 € | nicht zoombar, muss bei Hallenwechsel neu erzeugt werden |
| **C. Nur Deep-Links** | Buttons „In Google Maps öffnen" / „BVG-Verbindung" | 0 € | Karte erst nach Klick |

**Empfehlung: A + C kombiniert.** Leaflet mit OSM-Kacheln ist kostenlos, braucht keinen
API-Key und keine Registrierung. Darüber setzen wir immer zwei Buttons:
- `https://www.google.com/maps/dir/?api=1&destination=<Adresse>` (Auto/Navi)
- `https://www.bvg.de/de/verbindungen` bzw. ein `fahrinfo`-Deep-Link (ÖPNV)

Wichtige Einschränkung: **In einem Claude-Artifact werden externe Kartenkacheln blockiert.**
Wenn die Seite als Artifact laufen soll, brauchen wir Option B oder C. Auf eigenem Hosting
(GitHub Pages/Netlify) funktioniert A problemlos. → Siehe §7.

**Der unterschätzte Teil:** Nicht die Karte ist das Problem, sondern die *letzten 50 Meter*.
Genau die stehen in den nuLiga-Daten und gehören groß auf die Seite:

- TU Kreuzberg: **„2. Klingel von oben drücken"**
- TM Prenzlauer Berg: **Eingang Schwedter Str., über den Schulhof**
- DE Steglitz: **durch die Toreinfahrt, hintere obere Halle**
- RA Moabit: **hinter dem Jugendfreizeitheim**
- MB: **Innenhof, klingeln bei „Untere Halle"**
- Unsere KF: **Seiteneingang, obere Halle**

Das als eigenes, auffälliges Element („🔑 Die letzten 50 Meter") ist der praktische Mehrwert,
den keine andere Seite hat.

---

## 6. Design-Sprache

**Leitbild:** Wimmelbuch trifft Sportcomic. Fröhlich, dicht, handgezeichnet wirkend – aber die
funktionalen Elemente (Datum, Uhrzeit, Adresse) bleiben nüchtern und gut lesbar. Das ist die
Kernregel: *Die Illustration wimmelt, die Information nicht.*

**Farben** (Charlottenburger TSV: Blau/Weiß als Ausgangspunkt)

| Rolle | Hex | Einsatz |
|---|---|---|
| Vereinsblau | `#1B3A8C` | Kopfzeile, Heimspiele |
| Federball-Gelb | `#FFC53D` | Akzente, Countdown, Buttons |
| Auswärts-Koralle | `#FF6B5B` | Auswärtsspiele |
| Hallen-Grün | `#2FA36B` | Karten, Anfahrt |
| Papierweiß | `#FFFDF6` | Hintergrund (leicht warm, nicht steril) |
| Tinte | `#1C1B1A` | Text |

**Typografie**
- Headlines: eine kräftige, leicht comichafte Schrift – *Bangers*, *Baloo 2* oder *Fredoka*
  (alle Google Fonts, kostenlos, auch kommerziell)
- Fließtext: *Inter* oder *Source Sans 3* – wegen Lesbarkeit bewusst neutral

**Wiederkehrende Motive**
- Federball-Flugbahnen als gestrichelte Linien zwischen den Sektionen
- Handgezeichnete Rahmen mit leichtem Schlagschatten („Sticker"-Look)
- Leichte Zufallsrotation (−2° bis +2°) auf Karten – wirkt wie aufgeklebt
- Sanfte Animation beim Scrollen; Federball fliegt beim Laden einmal quer durchs Bild

**Barrierefreiheit:** Kontrast mindestens 4,5:1 für Text; `prefers-reduced-motion`
respektieren; die Farbcodierung Heim/Auswärts immer zusätzlich durch Text („HEIM"/„AUSWÄRTS")
absichern, nie nur durch Farbe.

---

## 7. Technik & Hosting

**Stack:** bewusst minimal. Statisches HTML + CSS + etwas Vanilla-JS, Daten in JSON.
Kein Framework, kein Build-Schritt, keine Datenbank. Die Seite muss in fünf Jahren noch
funktionieren, ohne dass jemand `npm install` ausführt.

```
Badminton/
├─ index.html              Die Seite
├─ assets/
│  ├─ style.css
│  ├─ app.js
│  └─ bilder/              Hero, Maskottchen, Icons
├─ data/
│  ├─ spielplan.json       ✅ fertig (56 Spiele, 14 eigene)
│  ├─ hallen.json          ✅ fertig (11 Hallen mit Adressen)
│  ├─ teams.json           ✅ fertig (8 Teams)
│  ├─ vorberichte.json     → zu schreiben
│  └─ tabelle.json         → nach jedem Spieltag aktualisieren
└─ konzept/                Diese Dokumente
```

**Hosting-Optionen**

| | Aufwand | Kosten | Karten | Eigene URL |
|---|---|---|---|---|
| **GitHub Pages** | einmalig ~30 min | 0 € | ✅ voll | `name.github.io/badminton` oder eigene Domain |
| **Netlify Drop** | Ordner reinziehen | 0 € | ✅ voll | zufällige URL, Domain optional |
| **Claude Artifact** | 1 Klick | 0 € | ⚠️ nur statisch/Deep-Link | claude.ai-Link |
| Vereins-Webspace | je nach CTSV | ? | ✅ voll | unter ctsv.de |

**Empfehlung: Netlify Drop für den Start** (in zwei Minuten online, Link sofort teilbar),
**GitHub Pages, sobald die Seite stabil ist** (Versionierung, kostenlose eigene Domain).

**Datenaktualisierung:** nuLiga liefert nach jedem Spieltag neue Tabellenstände. Drei Wege:
1. *Manuell* – nach jedem Spieltag Tabelle abschreiben (2 Minuten, 14 × pro Saison)
2. *Halbautomatisch* – ich lese die nuLiga-Seite aus und aktualisiere die JSONs (empfohlen)
3. *Vollautomatisch* – geplante Aufgabe, die wöchentlich scrapt und einen Commit macht

Achtung: nuLiga hat keine offene API; der direkte Abruf wird teilweise blockiert. Weg 2 ist
robust und realistisch.

---

## 8. Umsetzungsplan

| Schritt | Inhalt | Status |
|---|---|---|
| 1 | Liga-Daten strukturieren | ✅ erledigt |
| 2 | Konzept, Bildquellen, Prompts | ✅ erledigt |
| 3 | Bilder erzeugen (OpenAI) | → du |
| 4 | Seite bauen, Bilder einsetzen | → ich |
| 5 | 14 Vorberichte schreiben | → ich, du redigierst |
| 6 | Hosting einrichten, Link an die Mannschaft | → gemeinsam |
| 7 | Nach Saisonstart: Ergebnisse, echte Fotos | → laufend |

**Realistischer Aufwand bis zum Livegang:** ein Abend für die Bilder, ein Abend für die Seite.
Der Saisonauftakt am 30.09. ist ein gutes, machbares Ziel.

---

## 9. Ideen für später

- **Spieler-des-Spieltags**-Abstimmung (kleines Formular, Ergebnis auf der Seite)
- **Hallen-Ranking** mit Bewertungen: Boden, Licht, Duschen, Kneipe in der Nähe
- **„Wer fährt?"**-Übersicht bei Auswärtsspielen (Fahrgemeinschaften)
- **Saison-Rückblick** als Wimmelbild, in dem alle 14 Spiele als Szene auftauchen
- **Dritte Halbzeit:** die Kneipe nach dem Spiel, pro Halle eine Empfehlung
