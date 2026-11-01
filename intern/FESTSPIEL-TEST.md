# Empirischer Test der Festspielregel — Versuchsplan

**Angelegt:** 26.10.2026, Lauf geplant für 12:00 Uhr desselben Tages.
**Frage:** Beginnt die Zählung der Einsätze „in höheren Mannschaften" neu, nachdem sich
jemand in einer tieferen Mannschaft festgespielt hat?

## Die drei Lesarten

| | These | Vorhersage für Alex am 04.11.2026 |
|---|---|---|
| **Robert** | Der Zähler läuft über die ganze Saison. Drei Einsätze oben → untere Mannschaft weg. | Vermerk wechselt auf „Festgespielt in Mannschaft 2 ab 04.11.2026" |
| **Alex** | Jedes Festspielen setzt den Zähler zurück. Nach der Bindung an die IV (07.10.) hat er wieder zwei freie Einsätze oben. | kein neuer Vermerk, es bleibt bei Mannschaft 4 |
| **Claude** | Anlage III F Abs. 2 sanktioniert nur, wer eine untere Mannschaft *hat*; für reine Ersatzspieler regelt der Wortlaut den Fall nicht. Wendet nuLiga die Jugendformel aus Abschnitt P an („mehr als zwei Einsätze **in dieser Mannschaft**"), ergibt sich dasselbe wie bei Robert. | wie Robert |

Roberts Lesart und die Softwareformel fallen zusammen. Der Test unterscheidet im Kern
**Robert gegen Alex**.

## Versuchsaufbau

Grundgesamtheit: **Saison 2025/26**, alle 85 Vereine des BVBB, alle 17 Spielklassen.

1. **Vermerke sammeln.** Je Verein die Vereinsranglisten Herren und Damen ziehen
   (`clubPools?displayTyp=vorrunde&club=<id>&contestType=<Herren|Damen>&seasonName=2025%2F26`)
   und jede Zeile mit „Festgespielt in Mannschaft N ab TT.MM.JJJJ" erfassen.
   *Stichprobe vom 26.10.: 10 Vereine ergaben 91 Vermerke, davon 59 bei Reservespielern.
   Hochrechnung: etwa 750 Vermerke insgesamt, Ladezeit etwa eine Minute.*

2. **Einsätze sammeln.** Alle Spielberichte der 17 Gruppen laden
   (`groupPage?displayTyp=gesamt&displayDetail=meetings&championship=BBMM%2025/26&group=<id>`,
   dann je Begegnung `groupMeetingReport?meeting=<id>&championship=BBMM+25%2F26&group=<id>`)
   und je Person Datum, Verein und Mannschaft festhalten. Etwa 950 Berichte.

3. **Kritische Fälle herausfiltern.** Gesucht ist, wer nach seinem Vermerksdatum
   **mindestens drei weitere Einsätze oberhalb** der Vermerksmannschaft hatte **und danach
   erneut in der Vermerksmannschaft oder tiefer** angetreten ist.
   Nach Roberts Lesart ist dieser letzte Einsatz regelwidrig, nach Alex' Lesart zulässig.

4. **Wertung prüfen.** Für jeden kritischen Fall das Ergebnis der betroffenen Begegnung
   ansehen: regulär gewertet oder als Niederlage/annulliert?

## Auswertungsschema

| Befund | Schluss |
|---|---|
| **A** — keine kritischen Fälle gefunden | Roberts Lesart bleibt unwiderlegt, ist aber nicht bewiesen (Abwesenheitsbeweis) |
| **B1** — kritische Fälle da, Spiele **annulliert / gegen die Mannschaft gewertet** | Roberts Lesart bestätigt |
| **B2** — kritische Fälle da, Spiele **regulär gewertet** | Alex' Lesart bestätigt |

Bei **B2** zusätzlich prüfen, ob die Begegnung überhaupt beanstandet wurde — eine nicht
beanstandete Regelwidrigkeit ist kein Beleg für ihre Zulässigkeit, nur für fehlende Kontrolle.
Das gehört in den Bericht.

## Datengrundlage

Gruppen 2025/26: BBL 38015 · Landesliga 1 38016 · Landesliga 2 38017 · Bezirksklasse 1 38035 ·
Bezirksklasse 2 38036 · A1 38038 · A2 38037 · B1 38039 · B2 38040 · C1 38041 · C2 38042 ·
D1 38055 · D2 38056 · E1 38058 · E2 38057 · F1 38059 · F2 38075

Die 85 Vereins-IDs stehen in `FESTSPIEL-TEST-vereine.json` daneben.

## Technik (am 26.10. erprobt)

- liga.nu ist aus dem Cloud-Container **nicht** erreichbar. Alles über den eingebauten Browser:
  erst auf eine liga.nu-Seite navigieren, dann `fetch()` aus dem Seitenkontext (same-origin).
- Zugriff auf `bvbb-badminton.liga.nu` ist für diesen Rechner dauerhaft erteilt.
- In Blöcken arbeiten und Zwischenstände wegschreiben — ein einzelner Skriptaufruf sollte
  nicht mehr als etwa 150 Seiten laden.
