# Ergebnisdaten und Pseudonymisierung

*Gilt ab dem ersten Spieltag der Saison 2026/27*

---

## 1. Warum überhaupt pseudonymisieren

nuLiga veröffentlicht die Spielberichte mit Klarnamen — das ist deren Sache und durch den
Spielbetrieb gedeckt. Wenn wir dieselben Namen in eine eigene Datenbank übernehmen und
auswerten, ist das eine **neue Verarbeitung zu einem neuen Zweck**, für die wir keine
Grundlage haben. Ein Gegner, der bei uns namentlich in einer Schwächenanalyse auftaucht,
hätte damit ein berechtigtes Problem — völlig unabhängig davon, ob die Seite privat ist.

Für die Analysen brauchen wir die Namen ohnehin nicht. Wir brauchen nur, dass **dieselbe
Person über die Saison hinweg dieselbe Kennung behält**. Genau das leistet ein Pseudonym.

---

## 2. Das Verfahren

**Eigene Spieler:** Vornamen im Klartext — Jens, Hiep, Robert, Alex, Nils, Karo, Cathy.
Das ist unsere Mannschaft auf unserer Seite.

**Gegner:** Vereinskürzel plus Buchstabe, vergeben in der Reihenfolge des ersten Auftretens
und danach unveränderlich:

| Verein | Kürzel | Beispielpseudonyme |
|---|---|---|
| Deutsch-Chinesischer BV II | DCBV | DCBV-A, DCBV-B, … |
| Vorspiel QSB | VOR | VOR-A, VOR-B, … |
| DIBVM V | DIB | DIB-A, … |
| SV Berliner Brauereien VIII | SVBB | SVBB-A, … |
| TuS Lichterfelde | TUSL | TUSL-A, … |
| SG BC Tempelhof/Friedenau V | TEMP | TEMP-A, … |
| SG Gaselan Fürstenwalde II | GASE | GASE-A, … |

Das liest sich in einer Auswertung sogar besser als ein Name: *„DCBV-A ist ihr mit Abstand
stärkstes Einzel, 6:0 in dieser Saison"* sagt genau das, was wir wissen wollen.

**Der Schlüssel** — die Zuordnung Pseudonym ↔ Klarname — liegt **nicht im Repository**,
sondern nur lokal in `D:\Claude\Projekte\Badminton\klarnamen-schluessel.json` und ist über
`.gitignore` vom Hochladen ausgeschlossen. Er dient allein dazu, beim nächsten Spielbericht
dieselbe Person wiederzuerkennen. Getrennte Aufbewahrung von Daten und Schlüssel ist genau
das, was Pseudonymisierung von bloßem Umbenennen unterscheidet.

**Nicht übernommen wird** alles, was wir nicht brauchen: Passnummern, Vereinsfunktionen,
Geburtsjahrgänge. Nur Disziplin, Sätze, Ballpunkte.

---

## 3. Struktur von `site/data/ergebnisse.js`

Eine Begegnung, geschlüsselt nach der nuLiga-Meeting-Id:

```js
window.ERGEBNISSE = {
  "365090": {
    datum: "2026-09-30",
    heim: "Charlottenburger TSV II",
    gast: "Deutsch-Chinesischer BV II",
    gesamt: "5:3",                 // Spiele
    saetze: "12:7",
    ballpunkte: "375:326",
    beginn: "19:30", ende: "21:45",
    berichtUrl: "https://bvbb-badminton.liga.nu/...groupMeetingReport?meeting=365090...",
    spiele: [
      {
        disziplin: "1.HD",         // 1.HD DD 2.HD 1.HE DE GD 2.HE 3.HE
        heim: ["Robert", "Alex"],
        gast: ["DCBV-A", "DCBV-B"],
        saetze: [[21,14],[21,14]], // je Satz [heim, gast]
        ballpunkte: [42, 28],
        ergebnis: "2:0"            // Sätze
      }
    ]
  }
};
```

Acht Einträge je Begegnung, 56 Begegnungen in der Staffel — am Saisonende rund
**448 Einzelbegegnungen**, davon 112 mit unserer Beteiligung. Das ist eine ordentliche
Grundlage.

---

## 4. Was sich daraus rechnen lässt

**Über uns**
- Bilanz je Person und Disziplin (Einzel, Doppel, Mixed getrennt)
- beste Doppelpaarung — bei sieben Leuten überschaubar viele Kombinationen, aber genug für eine Rangfolge
- Dritt-Satz-Quote: gewinnen wir die engen Spiele?
- Ballpunkte gegen Spielpunkte: Das Beispiel oben endete 5:3 bei 375:326 — wer knapp gewinnt und deutlich verliert, steht besser da, als es sich anfühlt
- Heim gegen Auswärts, und die Frage der Saison: mittwochs 19:30 gegen sonntags 10:00

**Über die anderen**
- Wer spielt bei welchem Gegner welche Position, und wie stark
- Welche Disziplin ist bei wem die Lücke — nützlich für die Aufstellung
- Formkurven über die Rückrunde

**Für die Berichte:** Genau daraus entstehen die Nachberichte. „Cathy hat das zweite Damen-
einzel im dritten Satz mit 22:20 gedreht" ist ein Satz, den man nur schreiben kann, wenn die
Daten da sind.

---

## 5. Was auf der öffentlichen Seite erscheint

- Ergebnisse der Begegnungen (5:3 usw.) — stehen ohnehin öffentlich bei nuLiga
- Auswertungen zu **unserer** Mannschaft mit unseren Vornamen
- Gegnerbezogene Auswertungen nur aggregiert oder mit Pseudonym
- Ein Link auf den offiziellen Spielbericht bei nuLiga — wer Klarnamen sehen will,
  sieht sie dort, an der Stelle, an der sie hingehören
