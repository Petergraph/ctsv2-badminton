# Netlify: Veröffentlichen und danach editieren

*Für Robert und Jens · Stand 12.09.2026*

---

## Teil 1 · Was Netlify eigentlich ist

Netlify nimmt einen Ordner mit HTML/CSS/JS-Dateien und macht daraus eine öffentliche Website
mit HTTPS. Kein Server, keine Datenbank, keine Wartung. Für eine Mannschaftsseite ist der
kostenlose Tarif absurd überdimensioniert: 100 GB Traffic im Monat – unsere Seite braucht
mit allen Bildern vielleicht 3 MB pro Besuch, das sind rechnerisch über 30.000 Aufrufe
monatlich. Wir haben sieben Spieler.

**Wichtig vorweg:** Eine per Drag-and-Drop hochgeladene Seite ist zunächst **anonym und mit
einem temporären Passwort geschützt**. Öffentlich wird sie erst, wenn du sie „beanspruchst"
(*claim*) – also einen kostenlosen Account anlegst und die Seite ihm zuordnest. Das ist ein
Klick, aber man muss ihn kennen, sonst wundert man sich, warum die Mannschaft ein
Passwort sieht.

---

## Teil 2 · Die Seite online bringen (einmalig, ca. 5 Minuten)

1. **https://app.netlify.com/drop** öffnen.
2. Den Ordner `D:/Claude/Projekte/Badminton/site` (den baue ich) **per Maus in das Feld ziehen**.
   Wichtig: den *Ordner*, nicht die einzelnen Dateien. Darin muss eine `index.html` liegen.
3. Nach ein paar Sekunden erscheint eine URL wie `https://glowing-otter-4f2a1c.netlify.app`.
4. **„Claim this site"** klicken → mit E-Mail oder GitHub registrieren. Erst jetzt ist die
   Seite dauerhaft und ohne Passwort erreichbar.
5. **Site umbenennen:** im Dashboard unter *Site configuration → General → Site details →
   Change site name*. Aus dem Zufallsnamen wird z. B.
   `https://ctsv2-badminton.netlify.app`. Das ist der Link für die WhatsApp-Gruppe.

Optional später: eigene Domain (`badminton-ctsv.de`, ca. 10 €/Jahr beim Registrar),
das HTTPS-Zertifikat richtet Netlify automatisch ein.

---

## Teil 3 · Die Seite aktualisieren

### Weg A — Drag-and-Drop (wie beim ersten Mal)

Im Netlify-Dashboard auf die Seite gehen → Reiter **Deploys** → den aktualisierten Ordner
wieder in das Feld ziehen. Nach ~20 Sekunden ist die neue Version live. Die alte bleibt in
der Deploy-Historie stehen; ein Klick auf **„Publish deploy"** bei einem älteren Eintrag
macht eine kaputte Änderung sofort rückgängig.

*Vorteil:* nichts zu lernen. *Nachteil:* funktioniert nur eingeloggt, und wer eingeloggt ist,
ist eine Person.

### Weg B — GitHub (empfohlen, wenn Jens mitmachen soll)

Der Ordner liegt in einem GitHub-Repository, Netlify hängt daran. Jede Änderung im Repo
löst automatisch ein neues Deployment aus – niemand muss mehr etwas hochladen.

Einmalige Einrichtung (mache ich):
1. Repository `ctsv2-badminton` anlegen, Ordner hineinlegen
2. Jens als **Collaborator** einladen (kostenlos, beliebig viele Personen)
3. In Netlify: *Add new site → Import an existing project → GitHub* → Repo auswählen

Danach editiert ihr **direkt im Browser auf github.com**, ohne Git-Kenntnisse:

| Was | Wie |
|---|---|
| Vorbericht ändern | `data/vorberichte.json` öffnen → Stift-Symbol → Text ändern → *Commit changes* |
| Ergebnis eintragen | `data/spielplan.json` → beim Spiel `"ergebnis": "5:3"` ergänzen |
| Tabelle aktualisieren | `data/tabelle.json` überschreiben |
| Foto hinzufügen | Ordner `assets/bilder` öffnen → *Add file → Upload files* → Datei hineinziehen |
| Spieler-Comic eintragen | in `data/kader.json` bei der Person `"comic": "spieler-jens.png"` setzen |

Rund 60 Sekunden nach dem Commit ist die Änderung live. Wer etwas kaputt macht: in der
Datei auf *History* klicken, alte Version wiederherstellen. Es kann nichts verloren gehen.

---

## Teil 4 · „Frei für alle" – das geht so nicht, und das ist gut

Der Wunsch ist verständlich, aber die Begriffe fallen auseinander:

- **Lesen** ist bereits frei für alle. Die Seite ist öffentlich, jeder mit dem Link kommt drauf,
  ohne Anmeldung.
- **Editieren** heißt technisch „darf deployen". Das ist immer an ein Konto gebunden – bei
  Netlify wie bei GitHub. Einen Schalter „jeder darf ändern" gibt es nicht.
- Und selbst wenn es ihn gäbe, wollten wir ihn nicht: Eine öffentliche `.netlify.app`-Adresse
  wird von Crawlern und Bots innerhalb von Tagen gefunden. Ein offenes Editierformular auf
  einer öffentlichen Seite ist keine theoretische Lücke, sondern eine Einladung. Das hat
  nichts mit „muss gesichert werden" zu tun – es geht nicht um Geheimhaltung, sondern darum,
  dass die Arbeit stehen bleibt.

**Was stattdessen funktioniert:**

| Modell | Wer kann editieren | Aufwand | Kosten |
|---|---|---|---|
| **GitHub-Collaborators** (empfohlen) | beliebig viele, jeder mit eigenem Login | Jens braucht einen GitHub-Account (2 Min.) | 0 € |
| Gemeinsamer Netlify-Login | alle, die das Passwort haben | keiner | 0 € |
| Netlify-Team mit mehreren Mitgliedern | beliebig viele | wenig | **kostenpflichtig** – der freie Tarif deckt nur *ein* Mitglied |

Der gemeinsame Login ist der bequeme Weg, hat aber zwei Haken: Es lässt sich nicht mehr
nachvollziehen, wer was geändert hat, und wenn du denselben Netlify-Account später für etwas
anderes nutzt, hängt das mit drin. Falls ihr ihn trotzdem wollt: eine eigene Mailadresse nur
für diese Seite anlegen und nichts anderes darüber laufen lassen.

**Empfehlung:** GitHub. Der einmalige Aufwand für Jens ist ein Account und fünf Minuten
Erklärung, danach ist es genauso einfach wie ein Google-Doc bearbeiten – mit dem Bonus, dass
jede Änderung nachvollziehbar und rücknehmbar ist.

---

## Teil 5 · Wenn es später bequemer werden soll

Wenn JSON-Dateien editieren auf Dauer nervt, gibt es **Decap CMS** (früher Netlify CMS):
eine kleine Redaktionsoberfläche unter `/admin` auf der eigenen Seite – Formularfelder für
Vorbericht, Ergebnis, Foto-Upload, Speichern-Knopf. Im Hintergrund schreibt sie genau in
dieselben Dateien im GitHub-Repo. Kostenlos, aber eine Stunde Einrichtung. Sinnvoll erst,
wenn die Seite wirklich läuft und mehrere Leute regelmäßig schreiben.

---

## Kurzfassung für die WhatsApp-Gruppe

> Die Seite läuft auf Netlify, ist für alle offen erreichbar und kostet nichts.
> Ändern können sie Robert und Jens über GitHub – Text ändern, Foto hochladen, fertig,
> eine Minute später ist es online. Kaputtmachen kann man nichts, jede Version bleibt erhalten.
