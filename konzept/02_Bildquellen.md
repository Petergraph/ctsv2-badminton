# Woher kommen die Bilder?

Vier Quellen, in der Reihenfolge ihrer Nützlichkeit für unser Projekt.

---

## 1. Selbst generieren (OpenAI) – die Hauptquelle

Für einen **comic-artigen, wimmeligen** Look ist das der einzige Weg, auf dem alle Bilder
zusammenpassen. Stockfotos sind es nie: Sie sind uneinheitlich, glatt und sehen nach
Versicherungswerbung aus.

**Womit:** `GPT Image` / DALL·E über ChatGPT (Plus/Pro) oder die OpenAI-API.
Über die API kostet ein Bild in guter Qualität ungefähr 4–17 Cent; für unsere ~20 Bilder
also deutlich unter 5 €. Über ChatGPT ist es im Abo enthalten.

**Formate, die wir brauchen:**

| Zweck | Seitenverhältnis | Anzahl |
|---|---|---|
| Hero-Wimmelbild (Kopfzeile) | 3:1 quer (bzw. 16:9 und beschneiden) | 1 |
| Gegner-Maskottchen | 1:1 | 7 |
| Spieler-Sketche (Kader) | 1:1 oder 3:4 | 7 |
| Hallen-/Bezirks-Vignetten | 4:3 | 4–6 |
| Icons & Deko (Federball, Schläger, Pfeile) | 1:1, transparent | 6–10 |

→ Die fertigen Prompts stehen in **`03_Bild-Prompts.md`**.

**Rechtlich:** Von OpenAI erzeugte Bilder darfst du laut Nutzungsbedingungen frei verwenden,
auch öffentlich. Zwei Grenzen beachten: keine echten Vereinslogos/Wappen nachbauen lassen,
und keine erkennbaren realen Personen außerhalb unserer Mannschaft.

---

## 2. Comic-Sketche der Mannschaft (dein Plan – gute Idee, mit einer Einschränkung)

Aus einem Foto einen Comic-Sketch machen zu lassen funktioniert gut. Aber:

- **Fotos aus dem Netz sind der falsche Ausgangspunkt.** Nicht wegen der Technik, sondern
  weil du für ein Bild deiner Mitspieler auf einer öffentlichen Seite ohnehin ihr
  Einverständnis brauchst – und wenn du das einholst, kannst du auch gleich nach einem
  Foto fragen. Ein Handyfoto beim nächsten Training reicht völlig: frontal, gutes Licht,
  neutraler Hintergrund. Nebeneffekt: Der „Fotoshooting"-Termin nach dem Training macht
  erfahrungsgemäß mehr Spaß als die Website selbst.
- **Ohne Foto geht es auch.** Für Jens, Hiep, Robert, Alex, Nils, Karo und Cathy kann man
  Charaktere rein über eine Beschreibung erzeugen (Spielstil, Lieblingsschlag, Marotte) –
  das ist oft lustiger als eine Ähnlichkeit und garantiert konfliktfrei. Prompts für beide
  Wege stehen in `03_Bild-Prompts.md`, Abschnitt D.
- **Konsistenz-Trick:** Erzeuge zuerst *ein* Charakterbild, das dir gefällt, und hänge es
  bei allen weiteren als Referenzbild an mit dem Zusatz „same illustration style as the
  attached image". So sehen alle sieben wie aus einem Buch aus.

---

## 3. Kostenlose Stock-Bilder – für Fotos, nicht für den Comic-Look

Nützlich als Hintergrund für Hallen-Sektionen oder als Fallback, solange keine eigenen
Fotos existieren.

| Quelle | Lizenz | Anmeldung | Bemerkung |
|---|---|---|---|
| **Pexels** | eigene freie Lizenz, kommerziell ok, keine Namensnennung nötig | nein | beste Badminton-Auswahl |
| **Unsplash** | Unsplash-Lizenz, kommerziell ok | nein | ästhetisch, wenig Badminton |
| **Pixabay** | Pixabay Content License | nein | viel Material, Qualität schwankt |
| **openverse.org** | Meta-Suche über CC-Material | nein | Lizenz **pro Bild** prüfen |
| **Wikimedia Commons** | meist CC-BY/CC-BY-SA | nein | Namensnennung nötig, Bezirks-/Hallenfotos |

Suchbegriffe, die etwas bringen: `badminton shuttlecock`, `badminton racket`, `sports hall`,
`gym floor`, `indoor court`. Für Berlin-Motive: `Berlin Charlottenburg`, `U-Bahn Berlin`.

**Achtung Falle:** Freepik, Vecteezy und ähnliche werben mit „free", verlangen aber
Namensnennung oder ein Abo für die kommerzielle Nutzung. Für eine Vereinsseite unnötiger Ärger.

---

## 4. Ohne Bilder – CSS und SVG

Ein überraschend großer Teil der Fröhlichkeit kommt ganz ohne Bilddateien:

- Federball-Flugbahnen als gestrichelte SVG-Kurven zwischen den Sektionen
- Wiederholbares Hintergrundmuster aus Federbällen (ein kleines SVG, gekachelt)
- Wimmel-Effekt durch viele kleine, leicht rotierte Elemente statt eines großen Bildes
- Emoji als Notlösung für Icons (🏸 🚇 🍺 🔑) – lädt sofort, kostet nichts

Vorteil: winzige Dateien, perfekte Schärfe auf jedem Bildschirm, funktioniert auch im
Dark Mode. Empfehlung: Deko grundsätzlich als SVG/CSS, generierte Bilder nur für Hero,
Maskottchen und Charaktere.

---

## Empfehlung für den Start

1. **1 Hero-Wimmelbild** – das prägt den ganzen Auftritt
2. **7 Gegner-Maskottchen** – das ist der Gag, der die Seite trägt
3. **Deko rein per SVG/CSS** – kostet nichts und lädt schnell
4. **Spieler-Sketche später**, nach dem Fotoshooting beim Training

Damit ist die Seite ab Tag eins vollständig – Bilder von echten Menschen kommen dazu, wenn
sie da sind, und niemand wartet darauf.
