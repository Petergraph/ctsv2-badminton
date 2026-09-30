# Laufprotokoll der wöchentlichen Aufgabe

Jeder Montagslauf trägt hier **oben** einen neuen Abschnitt ein — neueste zuerst.
Diese Datei existiert, weil die Sitzung einer geplanten Aufgabe in der mobilen App nicht
auffindbar ist: die Push-Nachricht kommt an, der Bericht bleibt in einer eigenen Sitzung, die
nur auf dem Desktop in der Aufgabenübersicht steht. Hier steht er dauerhaft und geräteunabhängig.

Liegt in `intern/` und wird deshalb **nicht** veröffentlicht.

**Aufbau eines Eintrags** — die Aufgabe hält sich an diese Reihenfolge, damit man Wochen
nebeneinander lesen kann:

1. Kopfzeile `## TT.MM.JJJJ — Kurzfazit in einem Halbsatz`
2. **Neue Ergebnisse** je Mannschaft, mit Aufstellung der eigenen Leute
3. **Tabellenstand** der D-Klasse 2
4. **Regelprüfung** (Anlage III E/F/H) — ausdrücklich auch dann, wenn nichts zu melden ist
5. **Termine und Hallen** — Verlegungen, Wechsel, neue Überschneidungen
6. **Geänderte Dateien** und was noch offen ist

---

## 28.09.2026 — Saisonstart: I gewinnt, III und IV verlieren

**Neue Ergebnisse**

| | | | |
|---|---|---|---|
| I | Sa 26.09. auswärts | PSV Berlin II | **5:3 gewonnen** |
| III | So 27.09. auswärts | TuS Lichterfelde II | 2:6 verloren |
| IV | So 27.09. auswärts | Köpenicker BC VIII | 3:5 verloren |

Die II startet erst am 30.09.

*Aufstellung I (26.09.):* Kowalski (1. HD, 1. HE), Eissa, Borschevski, **Wandel, Jens**,
Julia Wandel, Arwen Braun.
*Aufstellung III (27.09.):* Godiveau (1. HD, 1. HE), Bhaskaran, Durie, Erbe,
Janina Müller, Arwen Braun.

Zur **IV** liegen noch keine Namen vor: nuLiga hat nur das Gesamtergebnis eingetragen, der
Spielbericht ist nicht genehmigt. Holt der nächste Lauf nach.

**Tabellenstand D-Klasse 2** — 1 von 56 Begegnungen gewertet. Brauereien VIII und DIBVM V je
1:1 Punkte nach einem 4:4, alle übrigen bei 0:0. Wir noch ohne Spiel.

**Regelprüfung**

- **Jens Wandel** (gemeldet als Stammspieler der III) hat am 26.09. in der **I** gespielt.
  Das ist Einsatz **1 von 2** nach oben. Mit dem 30.09. und dem 01.10. in der II folgen Einsatz 2
  und 3 — **ab dem 01.10. ist er für die III nicht mehr spielberechtigt** (Anlage III F Abs. 2).
  Das ist so gewollt, er spielt fest bei uns. Der Mannschaftsführer der III sollte es wissen.
- **Andreas Erbe** (Stamm IV) hat am 27.09. in der **III** ausgeholfen — Einsatz 1 von 2.
- Kein Einsatz in einer niedrigeren Mannschaft (Anlage III E Abs. 1). Keine gleichzeitigen
  Einsätze. Keine unvollständigen Aufstellungen.

**Termine und Hallen** — keine neuen Verlegungen, keine Hallenwechsel. Weiterhin als verlegt
markiert: II am 04.11. und 24.01., III am 21.03.

**Geänderte Dateien:** `site/data/spielplan.js`, `site/data/tabelle.js`,
`intern/daten/vereinsspiele.js`, `intern/daten/rangliste.js` (Stand fortgeschrieben, Doppelränge
erhalten), `intern/daten/einsaetze.js` (12 Einträge).

**Offen:** Spielbericht der IV vom 27.09. · in `einsaetze.js` stehen einzelne Disziplinen als
„OD"/„OE" statt „2.HD"/„3.HE" — abweichende Schreibweise in den nuLiga-Berichten der C- und
F-Klasse, beim nächsten Lauf normalisieren.

---

## 21.09.2026 — noch keine Ergebnisse, zwei fremde Verlegungen

Erste Spiele erst am 26./27.09. Zwei Verlegungen in der D-Klasse 2, beide ohne uns:
DIBVM V – SVBB VIII jetzt Sa 26.09. 12:00 (statt So 27.09. 12:30); DCBV II – Gaselan II jetzt
So 08.11. 15:30 (statt 22.11.). Spielpläne I/III/IV und Vereinsrangliste unverändert.
Geändert: `spielplan.js`, `vereinsspiele.js` (nur „abgerufen").

---

## 14.09.2026 — Hallenwechsel bei Vorspiel QSB

Noch keine Ergebnisse. Vorspiel QSB trägt alle sechs Heimspiele jetzt in Halle **AD**
(Adalbertstr. 53, 10179 Berlin-Mitte) aus statt in **KL** (Havelland-Schule, Schöneberg).
Betrifft unser Auswärtsspiel am 01.10. Geändert: `spielplan.js` (6× Halle), `hallen.js`
(AD ergänzt, KL bleibt stehen), `vorberichte.js` (Text zum 01.10. neu). Die Spiel-IDs behalten
das alte Kürzel `KL`, damit bereits exportierte Kalendereinträge gültig bleiben.
