# Die Regeln, auf denen die interne Seite rechnet

Quelle: **BVBB, Satzung und Ordnungen, Stand 04.04.2025**, Anlage III zur Spielordnung.
Die BBMM-Ausschreibung verweist für das Festspielen ausdrücklich auf diese Anlage.

---

## Festspielen — Anlage III F. Ersatzspieler*innen

**Quelle: Volltext der Satzung und Ordnungen des BVBB, Stand 04.04.2025, Anlage III, S. 78.**
Liegt im Ordner `D:\Claude\Projekte\Badminton\Regeln\`. Am 25.10.2026 im Wortlaut geprüft.

### Absatz 1 — für Ersatzspieler*innen ohne Stammmannschaft

> „Ersatzspieler*in kann jeder zum Verein (Spielgemeinschaft) gehörende Spieler*in mit einer
> Spielberechtigung sein. Sie müssen, soweit sie nicht Stammspieler*innen einer unteren Mannschaft
> sind, vorher gemeldet sein. **Ersatzspieler*innen können in jeder Mannschaft eingesetzt werden**,
> müssen aber an dem Platz in einer Mannschaft spielen, der ihrer Rangfolge in der aktuellen
> Rangliste entspricht."

### Absatz 2 — für Stammspieler*innen einer unteren Mannschaft

> „**Spieler*innen einer unteren Mannschaft** eines Vereins können in jeder höheren Mannschaft ihres
> Vereins als Ersatz eingesetzt werden. Sie müssen dort an dem Platz spielen, der ihrer Rangfolge in
> der aktuellen Rangliste entspricht. Werden Ersatzspieler*innen häufiger als insgesamt zwei Mal pro
> Spielsaison in höheren Mannschaften eingesetzt, so haben sie **für die untere Mannschaft** ihre
> Spielberechtigung verloren."

### Was daraus folgt — und was NICHT

Die Ordnung unterscheidet zwei Lagen, und das ist der ganze Mechanismus:

| | gilt | Begrenzung |
|---|---|---|
| **Stammspieler*in einer unteren Mannschaft** | Abs. 2 | zwei Einsätze oben pro Saison; ab dem dritten ist die **untere** Mannschaft verloren |
| **Ersatzspieler*in ohne Stammmannschaft** | Abs. 1 | **keine** — „in jeder Mannschaft einsetzbar", nur der Ranglistenplatz ist bindend |

Für reine Ersatzspieler*innen läuft die Sanktion aus Abs. 2 leer: Sie haben keine untere Mannschaft,
für die eine Spielberechtigung verloren gehen könnte.

**Nicht in der Ordnung steht**, trotz gezielter Suche im Volltext:

- keine Regel, nach der ein Einsatz in einer **tieferen** Mannschaft eine Bindung auslöst;
- kein **Zählerneustart** nach einer Bindung — Abs. 2 sagt „insgesamt zwei Mal pro Spielsaison";
- keine Festspielregel für Ersatzspieler*innen ohne Stammmannschaft überhaupt.

Das Wort „festgespielt" kommt im gesamten Regelwerk nur viermal vor, und die einzige materielle
Definition steht in **Abschnitt P** — der ausdrücklich nur für **BBJMM/BBSMM** (Jugend und Senioren)
gilt, nicht für die BBMM:

> „Ein*e Spieler*in, der*die in einer anderen Jugend-/Schüler*innenmannschaft des Vereins als
> Ersatzspieler*in eingesetzt wird, hat sich dann **in dieser Mannschaft** festgespielt, wenn er*sie
> **mehr als zwei Einsätze** […] in dieser Mannschaft hatte."

Vermutlich wendet nuLiga diese Jugendlogik auf alle Wettbewerbe an — das erklärt die Vermerke
„Festgespielt in Mannschaft N ab TT.MM.JJJJ" auch bei reinen Ersatzspieler*innen der BBMM.

### Der Vermerk in nuLiga ist Buchführung, nicht Normtext

Die BBMM-Ausschreibung 2026/27 sagt wörtlich: „In nuScore werden Festspielregeln oder
Beschränkungen nicht geprüft." Im Streitfall entscheidet der Spielausschuss nach der Ordnung.
Wo eine Aufstellung daran hängt, wird dort nachgefragt — nicht in der Statusspalte abgelesen.

### Empirisch geprüft — Saison 2025/26, Lauf vom 26.10.2026

Alle 85 BVBB-Vereine, 17 Spielklassen, 905 auswertbare Spielberichte, 11.520 Einsätze, 519
nuLiga-Vermerke. Ergebnis: Die Software führt den Zähler **stufenweise kumulativ über die ganze
Saison** — Einsätze oberhalb einer Mannschaft zählen auch dann noch, wenn sie *vor* der Bindung an
diese Mannschaft lagen. Das Modell reproduziert 511 der 519 Vermerke exakt (98,5 %); die acht
Abweichungen betreffen Vereine mit fehlender Aufstellung. In den **276 Fällen**, in denen sich
„kumulativ" und „Neustart nach jeder Bindung" unterscheiden, folgt nuLiga **271 : 0** dem
kumulativen Zähler; in den fünf übrigen stimmt die Mannschaft mit dem kumulativen Modell, nur das
Datum weicht wegen fehlender Aufstellungen ab. **Einen Zählerneustart gibt es nicht.** (Zahlen aus
der unabhängigen Nachrechnung vom 26.10.2026, 12 Uhr; der erste Lauf zählte mit engerer Definition
119 : 118 : 0 — gleiche Richtung, kleinere Fallzahl.)

Zur Sanktion dagegen Befund A: In der ganzen Saison hat **niemand** nach einer Bindung noch
einmal tiefer gespielt (0 von 11.520 Einsätzen), also gibt es auch keine Umwertung wegen
Festspielens. Von drei Umwertungen der Saison betraf eine einen nicht einsatzberechtigten Spieler
(Nachmeldefrist, Anlage S) — der Mechanismus existiert, er wurde fürs Festspielen nur nie gebraucht.

Rohdaten und vollständiger Bericht außerhalb des Repos: `D:\Claude\Projekte\Badminton\Festspielregel\`
(`Ergebnis.md`, `Vermerke.json`, `Einsaetze.json`).

### Für uns, Stand 25.10.2026

- **Jens** (Stammspieler der III) fällt unter Abs. 2. Einsätze oben: 26.09. (I), 30.09. (II),
  01.10. (II) — der dritte am 01.10. hat ihm die III gekostet. nuLiga-Vermerk korrekt.
- **Alex und Nils** sind reine Ersatzspieler ohne Stammmannschaft und fallen unter Abs. 1:
  **unbegrenzt in jeder Mannschaft einsetzbar.** Dass nuLiga Alex seit dem 07.10. als „festgespielt
  in Mannschaft 4" führt, hat in der BBMM-Ordnung keine Entsprechung.
- **Karo** ebenso.

## Kein gleichzeitiger Einsatz — Anlage III F. Absatz 2, Fortsetzung

> „Spieler*innen dürfen nicht gleichzeitig in verschiedenen Mannschaften eingesetzt werden.
> **Gleichzeitig ist ein Einsatz immer dann, wenn der erste Mannschaftswettkampf noch nicht
> beendet ist, bevor der zweite angesetzt ist.** Der*die dort eingesetzte Spieler*in ist im
> zweiten Mannschaftswettkampf nicht spielberechtigt."

Das trifft unmittelbar auf unsere acht Doppeltermine in der Kuno-Fischer-Straße zu:
Beide Begegnungen beginnen dort **zur selben Uhrzeit**. Niemand kann an diesen Abenden
in zwei Mannschaften spielen.

## Stammspieler dürfen nicht nach unten — Anlage III E. Ranglisten, Absatz 1

> „Es ist weiterhin zu kennzeichnen, für welche Mannschaft die Spieler*innen als
> Stammspieler*innen vorgesehen sind. **Sie dürfen in keiner niedrigeren Mannschaft ihres
> Vereins spielen.** Alle nicht als Stammspieler*innen gekennzeichneten Spieler*innen gelten
> automatisch als Ersatzspieler."

Das ist ein hartes Verbot, kein Kontingent. Nach oben aushelfen ist erlaubt (dann greift die
Zwei-Einsatz-Grenze), nach unten gar nicht.

## Aufstellung nach Rangliste — Anlage III E. Absätze 2 und 3

> „Die Herreneinzel (1. HE, 2.HE, 3.HE) müssen aufsteigend gemäß der gemeldeten Rangfolge
> aufgestellt werden."

> „Die Herrendoppel sind so aufzustellen, dass bei der Addition der Ranglistenplätze die Paarung
> mit der kleineren Summe das erste Herrendoppel spielt."

Auch Ersatzspieler*innen müssen „an dem Platz in einer Mannschaft spielen, der ihrer Rangfolge
in der aktuellen Rangliste entspricht" (Anlage III F. Absatz 1).

## Unvollständiges Antreten — Anlage III H.

Hier weicht die Ordnung von der verbreiteten Faustregel ab. Es gibt **kein Recht**, zweimal pro
Saison mit drei Herren oder einer Dame anzutreten. Richtig ist:

> „Ist ein*e Spieler*in zum Zeitpunkt des Spielbeginns nicht spielbereit, so fällt **mindestens ein
> Spiel kampflos** an die gegnerische Mannschaft."

> „Tritt eine Mannschaft mit weniger als vier Herren an, ist der gleichzeitige Einsatz eines der drei
> anwesenden Spieler im Herreneinzel und im Mixed möglich, die gegnerische Mannschaft muss
> allerdings **vor Abgabe ihrer Aufstellung** darüber in Kenntnis gesetzt werden. […] Gleiches gilt,
> wenn nur eine Dame anwesend ist, für das Dameneinzel und das Mixed."

> „Tritt eine Mannschaft in der Bezirksklasse und tiefer **mehr als zweimal unvollständig** an, so
> müssen ab dem dritten Mal […] **zwei Spiele** abgegeben werden."

**Für uns (D-Klasse, also „Bezirksklasse und tiefer"):** Unvollständig antreten kostet immer
mindestens ein Spiel. Die Zwei ist keine Erlaubnis, sondern die Schwelle, ab der es doppelt so
teuer wird. Die Ampel auf der öffentlichen Seite ist deshalb als „kostet ein Spiel" zu lesen,
nicht als „ist erlaubt".

Weiter gilt: Fehlen Spieler, **muss in den Einzeln aufgerückt werden**, und das erste Herrendoppel
ist stets auszutragen (Anlage III H. Absatz 3).

## Nachmeldungen

Ersatzspieler*innen können nur **bis zum 15. Februar** nachgemeldet werden und sind sieben Tage
nach Eingang beim Spielausschuss spielberechtigt (Anlage III F. Absatz 6).
Ummeldungen innerhalb der Rangliste sind **vor Beginn der Rückrunde** mit Genehmigung des
Spielausschusses möglich (Anlage III E. Absatz 1).

---

# Saison 2026/27: Offenes Einzel und offenes Doppel

**Quelle:** „Änderungen der Anlagen zur Spielordnung — Öffnung der Disziplinen 2. Herrendoppel und
3. Herreneinzel (Auftrag Verbandstag 2025)", Tilo Hieronymus, Stand 01.06.2026, S. 50–53.
Liegt im Ordner `D:\Claude\Projekte\Badminton\Regeln\`. Am 25.10.2026 im Wortlaut geprüft.

### ACHTUNG: Das Dokument ist ein Entwurf

Letzte Seite, wörtlich:

> „Es handelt sich ausdrücklich **noch nicht um eine abschließend geprüfte und beschlossene
> Fassung**. Vor einer endgültigen Umsetzung sind noch weitere fachliche, rechtliche und technische
> Prüfungen erforderlich. […] Ein verbindlicher Zeitpunkt für das Inkrafttreten kann daher derzeit
> noch nicht benannt werden."

Gespielt wird trotzdem danach: Die BBMM-Ausschreibung kündigt die Änderung „ab August 2026" an, und
nuLiga führt OD und OE in den Spielberichten. Wer sich auf eine Feinheit dieses Entwurfs berufen
will, fragt vorher beim Spielausschuss nach.

### Spielfolge (B. Spielreihenfolge, neue Fassung)

> „Eine Mannschaft besteht aus **sechs bis acht** Stammspieler*innen. Dabei müssen **mindestens drei
> Herren und mindestens zwei Damen** als Stammspieler*innen gemeldet sein. Bei einem
> Mannschaftswettkampf dürfen **bis zu zwölf** Spieler*innen eingesetzt werden."

Acht Spiele: **1 DE, 1 DD, 2 HE, 1 HD, 1 OD, 1 OE, 1 Mixed.**
Reihenfolge ohne Einigung: **HD, DD, OD, 1. HE, DE, Mixed, 2. HE, OE.**
Niemand darf mehr als zwei Spiele bestreiten, und nur in verschiedenen Disziplinen.

### Aufstellung (E. Ranglisten, neue Fassung)

> „(2) Das 1. Herreneinzel und das 2. Herreneinzel sind so aufzustellen, dass der ranghöhere Spieler
> das 1. Herreneinzel spielt. **Wird das Offene Einzel durch einen Herrn bestritten**, ist auch
> dieses entsprechend der Reihenfolge der eingesetzten Herren nach der Einzelrangliste aufzustellen."

> „(3) **Werden im Herrendoppel und im Offenen Doppel jeweils zwei Herren eingesetzt**, gelten diese
> Paarungen hinsichtlich ihrer Reihenfolge als zwei Herrendoppel. In diesem Fall ist das Herrendoppel
> so aufzustellen, dass bei der Addition der Ranglistenplätze die Paarung mit der kleineren Summe das
> Herrendoppel spielt. Bei Summengleichheit hat die Paarung mit dem ranglistenhöheren Spieler das
> Herrendoppel zu spielen."

**Damit ist die Frage von Anfang Oktober beantwortet:** Die Additionsregel greift **nur**, wenn in
beiden Doppeln je zwei Herren stehen. Sobald eine Dame im Offenen Doppel spielt, gilt sie nicht —
die Ordnung schreibt für diesen Fall keine Reihenfolge vor. Der Doppelrechner auf der internen
Seite ist also für genau den Fall richtig, für den er gebaut wurde (vier Herren), und für keinen
anderen.

### Unvollständiges Antreten (H. Nichtantreten, neue Fassung)

> „Eine Mannschaft gilt als nicht angetreten, wenn zum Zeitpunkt des Spielbeginns **nicht mindestens
> drei Herren und eine Dame** spielbereit sind."

In der Bezirksklasse und tiefer — also bei uns:

> „Tritt eine Mannschaft mit weniger als vier Herren an, ist der gleichzeitige Einsatz eines der drei
> anwesenden **Herren** in einem Herreneinzel und im Mixed möglich. **Ist nur eine Dame anwesend, ist
> ihr gleichzeitiger Einsatz im Dameneinzel und im Mixed ebenfalls möglich.** In beiden Fällen muss
> die gegnerische Mannschaft vor Abgabe ihrer Aufstellung darüber in Kenntnis gesetzt werden."

> „(3) Fehlen in einer Mannschaft Herren, muss in den Einzeln aufgerückt werden. Außerdem ist stets
> das Herrendoppel auszutragen. Müssen dadurch das Herrendoppel und, sofern im Offenen Doppel zwei
> Herren eingesetzt werden, auch das Offene Doppel neu aufgestellt werden, darf auch die gegnerische
> Mannschaft das Herrendoppel und gegebenenfalls das Offene Doppel neu aufstellen."

**Praktisch für uns:** Mit drei Herren und einer Dame gilt die Mannschaft als angetreten. Das ist
weniger streng als die Sollstärke 4+2, die wir bisher angenommen haben — kampflose Spiele fallen
trotzdem an (je 50 € Bußgeld), aber es ist kein Nichtantreten.

