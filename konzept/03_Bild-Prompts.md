# Fertige Bild-Prompts für OpenAI (GPT Image / DALL·E)

Alle Prompts auf Englisch – die Bildmodelle verstehen englische Prompts deutlich präziser.
Deutsche Begriffe nur dort, wo sie als Schrift *im Bild* erscheinen sollen (und selbst dann:
**Text im Bild lieber vermeiden**, Modelle verschreiben sich; Beschriftung setzen wir in HTML
darüber).

---

## 0. Der Stil-Baustein – bitte in JEDEN Prompt kopieren

Das ist der wichtigste Teil des ganzen Dokuments. Ohne identischen Stilsatz sehen 20 Bilder
aus wie von 20 Leuten.

> **STYLE:** playful hand-drawn comic illustration, European picture-book / Wimmelbuch style
> (think Ali Mitgutsch meets modern flat vector), bold confident ink outlines of varying
> weight, warm flat colour fills with light paper texture, slightly wobbly imperfect lines,
> cheerful and busy but never cluttered, friendly rounded character shapes, no photorealism,
> no 3D render, no gradients-heavy digital airbrush look.
> **PALETTE:** deep club blue #1B3A8C, shuttle yellow #FFC53D, coral #FF6B5B, hall green
> #2FA36B, warm off-white paper #FFFDF6, ink black #1C1B1A.
> **NEGATIVE:** no text, no letters, no logos, no brand marks, no real-world trademarks,
> no watermark, no photorealistic faces.

**Konsistenz-Trick:** Erzeuge zuerst Prompt A (Hero). Wenn dir das Ergebnis gefällt, hänge
dieses Bild bei allen folgenden Prompts als Referenz an und ergänze:
*"Match the illustration style, line weight and colour palette of the attached reference image exactly."*

---

## A · Hero-Wimmelbild (das wichtigste Bild)

**Format:** 16:9 (später auf ca. 3:1 beschnitten) · **Datei:** `assets/bilder/hero.png`

```
A wide, busy, cheerful Wimmelbuch-style comic scene of a lively amateur badminton club night
inside an old school gymnasium in Berlin. Wooden parquet floor with painted court lines,
tall windows, wall bars, a slightly sagging net, a scoreboard on wheels. Around fifteen
diverse amateur players of all ages and body types, all in different funny micro-situations:
one leaping for a smash, one tying a shoelace, two arguing cheerfully about a line call,
one drinking from a huge thermos, one untangling a racket bag, a dog sitting patiently on a
bench with a shuttlecock in its mouth, someone rescuing a shuttlecock stuck in a ceiling lamp
with a broom, a cake on the bench beside the water bottles. Dozens of shuttlecocks flying
through the air on dotted flight paths. Warm evening light through the windows.
Wide panoramic composition, lots of small details to discover, generous empty space in the
upper middle third of the image for a headline to be placed later.
[STYLE-BAUSTEIN EINFÜGEN]
```

---

## B · Die sieben Gegner-Maskottchen

**Format:** 1:1 · **Dateien:** `assets/bilder/gegner-<kurz>.png`
Jeweils ein freundliches Comic-Wappentier. Kein Vereinslogo, keine echten Embleme – reine
Erfindung, abgeleitet von Bezirk und Vereinsname.

**Gemeinsamer Rahmen für alle sieben** (vor jeden Einzelprompt setzen):

```
A single friendly comic mascot character, full body, centred, holding a badminton racket,
standing on a small circular badge-like base, isolated on a plain warm off-white background,
sticker-like with a subtle drop shadow, square composition, no text anywhere.
[STYLE-BAUSTEIN EINFÜGEN]
```

Und dann jeweils:

**B1 · Deutsch-Chinesischer BV II** *(Kreuzberg, Hector-Peterson-Schule)*
> A cheerful red panda in a tracksuit, mid-smash, one paw ringing an old doorbell mounted on
> a little post beside it (a private joke about the entrance buzzer), tiny paper lantern
> clipped to its racket bag.

**B2 · Vorspiel QSB** *(Schöneberg, Havelland-Schule – Verein mit sechs Hallen)*
> A jolly rainbow-striped chameleon with a badminton racket, surrounded by six tiny floating
> doorways of different shapes (a joke about the club's six different gyms), looking
> delighted and slightly overwhelmed, confetti in the air.

**B3 · DIBVM V** *(spielt in vier Hallen – Moabit, Wedding und mehr)*
> A friendly wandering hedgehog wearing a backpack and a tiny explorer hat, holding a badminton
> racket like a walking stick, a rolled-up map under one arm, four small pennants on its
> backpack, cheerfully lost.

**B4 · SV Berliner Brauereien VIII** *(Prenzlauer Berg, Templiner Straße)*
> A round jovial draft horse in a sports jersey, badminton racket in one hoof, an oversized
> foaming mug of golden lemonade in the other, a small wooden beer barrel used as a
> racket-bag stool beside it, big friendly moustache-like muzzle markings.

**B5 · TuS Lichterfelde** *(Steglitz, Bröndby-Oberschule)*
> A tidy, slightly serious dachshund in a neat retro sports kit with a sweatband, badminton
> racket held perfectly straight, standing in front of a small comic archway gate (a joke
> about the "drive through the gateway" entrance note), immaculate posture.

**B6 · SG BC Tempelhof/Friedenau V** *(Tempelhof, Wilfried-Gravenstein-Halle)*
> A confident comic pigeon wearing aviator goggles and a scarf, badminton racket under one
> wing, standing on a tiny stylised airfield windsock base, wings spread proudly, a paper
> plane looping around its head.

**B7 · SG Gaselan Fürstenwalde II** *(Fürstenwalde, E.DIS Arena – 60 km raus aus Berlin)*
> A big good-natured brown bear in a country sports jacket, badminton racket over one
> shoulder, a steaming thermos of coffee in the other paw, small pine trees and a signpost at
> its feet, sunrise colours behind it, sleepy but friendly expression.

**B0 · Und unser eigenes Wappentier · Charlottenburger TSV II** *(Charlottenburg, Peter-Ustinov-Schule)*
> A proud but slightly scruffy comic swan wearing a blue-and-white club jersey, badminton
> racket held like a sword, small crown tilted at a jaunty angle, standing in front of a
> little side door marked with an arrow (a joke about the side entrance to the upper hall),
> confident grin.

---

## C · Hallen- und Bezirks-Vignetten (für die Spieltag-Detailseiten)

**Format:** 4:3 · **Dateien:** `assets/bilder/halle-<code>.png`
Diese Bilder sitzen über der Anfahrtskarte und geben dem Auswärtsspiel ein Gesicht.

**C1 · KF – unsere Heimhalle, Charlottenburg**
> A warm comic illustration of a 1950s Berlin school gymnasium seen from the street on a blue
> evening, lit windows glowing yellow, a small side door with a hand-drawn arrow and a queue
> of cheerful players with racket bags going in, bare trees, a bicycle rack, one cat on a wall.
> [STYLE-BAUSTEIN]

**C2 · ED – Fürstenwalde, die große Auswärtsfahrt**
> A comic illustration of a small convoy of three battered hatchbacks driving east out of the
> city at dawn on an empty country road, pine forest either side, badminton rackets and a
> giant shuttlecock strapped to a roof rack, huge orange sunrise, a road sign shape with no
> readable text, sleepy faces visible through the windscreens, steam rising from coffee cups.
> [STYLE-BAUSTEIN]

**C3 · Allgemeine Auswärts-Vignette (für Hallen ohne eigenes Bild)**
> A comic illustration of a small group of amateur badminton players with racket bags standing
> in front of a closed school courtyard gate at night, one of them on tiptoe pressing a
> doorbell panel, another checking a phone map, a street lamp, a bicycle, gentle rain,
> everyone in good spirits despite being clearly in the wrong courtyard.
> [STYLE-BAUSTEIN]

**C4 · ÖPNV-Vignette**
> A comic illustration of the inside of a Berlin U-Bahn carriage in the evening, four amateur
> badminton players with racket bags and sports clothes, one asleep against the window,
> one eating a bread roll, shuttlecocks poking out of a bag, warm yellow interior light,
> other passengers watching with mild amusement.
> [STYLE-BAUSTEIN]

---

## D · Die Mannschaft – Comic-Sketche

**Format:** 1:1 oder 3:4 · **Dateien:** `assets/bilder/spieler-<name>.png`
Kader: **Jens, Hiep, Robert, Alex, Nils** (Herren) · **Karo, Cathy** (Damen)

**Gemeinsamer Rahmen:**
```
A friendly comic portrait illustration of a single amateur badminton player, waist-up,
in club colours (deep blue and white jersey), holding a badminton racket, warm off-white
background, sticker-like with a subtle drop shadow, kind and humorous rather than heroic,
no text anywhere.
[STYLE-BAUSTEIN EINFÜGEN]
```

### D1 · Weg mit Foto (empfohlen: eigenes Foto vom Training, nicht aus dem Netz)
Foto anhängen und ergänzen:
> Turn the attached photo into a comic character in the style described above. Keep the
> person clearly recognisable — hairstyle, glasses, beard, build, overall vibe — but simplify
> into bold outlines and flat colours. Do not photorealistically reproduce the face; make it
> a warm, flattering caricature. Give the character a badminton racket and a club jersey.

*Praktischer Hinweis:* Bild pro Person einzeln erzeugen, nie mehrere Gesichter in einem
Prompt – Modelle vermischen sie sonst.

### D2 · Weg ohne Foto – über Charakterbeschreibung
Oft lustiger als Ähnlichkeit. Ein Satz pro Person genügt, Vorschläge zum Anpassen:

| Spieler:in | Prompt-Zusatz (anpassen!) |
|---|---|
| **Jens** | *the unflappable veteran: calm expression, retro headband, perfectly worn-in shoes, drop shot mid-flight, looks like he has seen everything* |
| **Hiep** | *the fast one: crouched low, blurred motion lines, mid-lunge for a net kill, huge grin, one shoe half off* |
| **Robert** | *the team captain: clipboard in one hand, racket in the other, reading glasses pushed up on the forehead, a small stack of paperwork under one arm, patient smile* |
| **Alex** | *the power hitter: enormous wind-up for an overhead smash, racket bent by the force, shuttlecock already leaving the frame in a puff of speed lines* |
| **Nils** | *the newcomer with the biggest racket bag in the league: three rackets, two water bottles, a banana and a first-aid kit, boundless enthusiasm* |
| **Karo** | *the tactician: standing relaxed at the net, one eyebrow raised, already knowing where the next three shots will go, tiny dotted trajectory lines around her* |
| **Cathy** | *the rally machine: mid-defensive dive, hair flying, utterly delighted, a long dotted shuttle path looping behind her showing an endless rally* |

Wichtig: Die Zuschreibungen sind frei erfunden – vor dem Livegang in der Mannschaft
absegnen lassen, dann werden sie richtig gut.

---

## E · Deko, Icons und Muster

**E1 · Hintergrundmuster** (1:1, kacheln, `assets/bilder/muster.png`)
> A seamless repeating tile pattern of small hand-drawn badminton shuttlecocks and rackets,
> scattered evenly at different angles, very light and subtle, thin ink outlines on a warm
> off-white background, low contrast so text remains readable on top, flat two-colour design.

**E2 · Icon-Set** (einzeln erzeugen, 1:1, transparenter Hintergrund)
> A single hand-drawn comic icon of **X**, bold ink outline, flat colour fill, centred on a
> transparent background, simple and clearly readable at small size, no text.

Für **X** einsetzen: `a shuttlecock` · `a badminton racket` · `a house (home match)` ·
`a suitcase (away match)` · `a map pin` · `a doorbell button` · `an underground train` ·
`a clock` · `a calendar page` · `a trophy` · `a key`

**E3 · Trennelement zwischen Sektionen** (breit, transparent)
> A wide horizontal decorative divider: a single dotted shuttlecock flight path arcing across
> the frame from left to right, with a small hand-drawn shuttlecock at the right end,
> ink line on transparent background, nothing else.

---

## Arbeitsreihenfolge und Checkliste

1. ☐ **A** Hero erzeugen, mehrere Versuche, bis der Stil sitzt → wird zum Referenzbild
2. ☐ **B0** eigenes Maskottchen (Schwan) mit Hero als Referenz
3. ☐ **B1–B7** die sieben Gegner, alle mit derselben Referenz
4. ☐ **E1–E3** Muster, Icons, Trenner
5. ☐ **C1–C4** Hallen-Vignetten
6. ☐ **D** Spieler-Sketche nach dem Foto-Termin beim Training

**Dateiablage:** alles nach `D:/Claude/Projekte/Badminton/assets/bilder/`,
Benennung wie oben angegeben – dann kann ich sie ohne Nachfragen einbauen.

**Vor dem Hochladen noch:** Bilder auf ca. 1600 px Breite verkleinern und als WebP speichern
(spart 70–80 % Ladezeit). Das mache ich beim Einbau, du musst nichts komprimieren.
