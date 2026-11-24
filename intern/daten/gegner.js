/* Gegneranalyse aus nuLiga. NUR INTERN — enthält Klarnamen fremder Spieler.
   Wird von Netlify nicht ausgeliefert (publish = "site").
   Erhoben 27.09.2026. Quellen: clubPools (Ranglisten), groupPage (Tabellen/Spielpläne),
   groupMeetingReport (Spielberichte). "einzel" = Bilanz Siege:Niederlagen in HE bzw. DE. */

window.GEGNER = {
 "erhoben": "27.09.2026 (DCBV II, Vorspiel QSB) / 18.11.2026 (Tempelhof/Friedenau V)",
 "teams": [
  {
   "kurz": "DCBV II",
   "name": "Deutsch-Chinesischer BV II",
   "spielTermin": "2026-09-30",
   "heimspielFuerUns": true,
   "verein": { "id": 16386, "gegruendet": null, "halle": "TU", "mf": "Yu, Jingyang" },
   "vorsaison": { "liga": "F-Klasse 1", "platz": 2, "s": 11, "u": 2, "n": 1,
                  "punkte": "24:4", "spiele": "85:27", "saetze": "176:72" },
   "vollstaendig": "14 von 14 Begegnungen vollständig angetreten — kein kampfloses Spiel abgegeben.",
   "kaderProSpiel": "6 bis 8 Personen, meist 7",
   "berichteAusgewertet": "14 von 14",
   "gemeldet": [
    { "name": "Yang, Xuanming", "rang": 80,  "doppel": 90,  "rolle": "Stamm II",
      "einsaetze": 10, "einzel": "7:1", "notiz": "Stärkster verbliebener Einzelspieler." },
    { "name": "Wang, Chen",     "rang": 90,  "doppel": 110, "rolle": "Stamm II",
      "einsaetze": 4,  "einzel": "3:1", "notiz": "Spielte stets 3. HE." },
    { "name": "Yu, Jingyang",   "rang": 100, "doppel": 80,  "rolle": "Stamm II",
      "einsaetze": 12, "einzel": "5:2", "notiz": "Mannschaftsführer. Doppelrang 80 — spielt 1. HD." },
    { "name": "Cui, Pengcheng", "rang": 120, "doppel": 100, "rolle": "Stamm II",
      "einsaetze": 11, "einzel": "–",   "notiz": "Reiner Doppelspieler: 8 HD, 6 Mixed, kein Einzel." },
    { "name": "Xie, Yu",        "rang": 50,  "doppel": 50,  "rolle": "Stamm II, Dame",
      "einsaetze": 9,  "einzel": "3:2", "notiz": "" },
    { "name": "Sun, Ying",      "rang": 60,  "doppel": 60,  "rolle": "Stamm II, Dame",
      "einsaetze": 11, "einzel": "1:1", "notiz": "Trägt das Mixed: 8 Einsätze." }
   ],
   "reservepool": [
    { "name": "Zhang, Jun",     "rang": 50, "doppel": 50, "einsaetze": 0, "einzel": "–",
      "notiz": "2025/26 in Mannschaft 1 festgespielt — kam aus der C-Klasse." },
    { "name": "Jung, Hyun-Suk", "rang": 55, "doppel": 45, "einsaetze": 0, "einzel": "–",
      "notiz": "NEU. Sperrfrist nach Vereinswechsel bis einschl. 25.10.2026 — am 30.09. NICHT spielberechtigt." },
    { "name": "Guo, Xiaohui",   "rang": 60, "doppel": 60, "einsaetze": 3, "einzel": "0:2",
      "notiz": "Festgespielt in Mannschaft 2 ab 05.12.2025." },
    { "name": "Chen, Nuo",      "rang": 65, "doppel": 65, "einsaetze": 0, "einzel": "–",
      "notiz": "NEU, spielberechtigt ab 21.09.2026 — am 30.09. einsetzbar, Stärke unbekannt." },
    { "name": "Zhang, Xi",      "rang": 70, "doppel": 70, "einsaetze": 2, "einzel": "–",
      "notiz": "Nur Doppel, beide Male 1. HD." },
    { "name": "Liao, Shuhai",   "rang": 75, "doppel": 75, "einsaetze": 0, "einzel": "–",
      "notiz": "NEU, spielberechtigt ab 25.09.2026 — am 30.09. einsetzbar, Stärke unbekannt." },
    { "name": "Zhou, Kunyuan",  "rang": 110, "doppel": 120, "einsaetze": 5, "einzel": "2:0",
      "notiz": "Festgespielt in Mannschaft 2 ab 28.01.2026." }
   ],
   "abgaenge": [
    { "name": "Lin, Yuxuan", "einsaetze": 12, "einzel": "9:3",
      "notiz": "Tragende Säule der Vorsaison, 12× HE und 12× HD. Festgespielt in M1 ab 08.03.2026, 2026/27 nicht mehr gemeldet." },
    { "name": "Tang, Jun",   "einsaetze": 5,  "einzel": "3:2", "notiz": "Spielte 1. HE. Nicht mehr gemeldet." },
    { "name": "Zhang, Tao",  "einsaetze": 2,  "einzel": "0:1", "notiz": "Nicht mehr gemeldet." },
    { "name": "Hong, Yifei", "einsaetze": 3,  "einzel": "–",   "notiz": "Dame. Nicht mehr gemeldet." },
    { "name": "Li, Qijie",   "einsaetze": 1,  "einzel": "1:0", "notiz": "Abgemeldet 17.12.2025." },
    { "name": "Wang, Zhengjun", "einsaetze": 1, "einzel": "–", "notiz": "Abgemeldet 17.12.2025." }
   ]
  },
  {
   "kurz": "Vorspiel QSB",
   "name": "Vorspiel – Queerer Sportverein Berlin e. V.",
   "spielTermin": "2026-10-01",
   "heimspielFuerUns": false,
   "verein": { "id": 12148, "gegruendet": 1986, "halle": "AD", "mf": "Zajicek, Harald" },
   "vorsaison": { "liga": "D-Klasse 2", "platz": 4, "s": 6, "u": 3, "n": 5,
                  "punkte": "15:13", "spiele": "63:49", "saetze": "136:110" },
   "vollstaendig": "13 von 14 Begegnungen angetreten; zum letzten Saisonspiel am 08.03.2026 bei SSV Rotation II nicht angetreten (8:0 gewertet).",
   "kaderProSpiel": "fast immer genau 6 Personen — kein Puffer",
   "berichteAusgewertet": "12 von 14 (zu zwei Begegnungen liegt in nuLiga kein Spielbericht vor)",
   "historie": "Spielt mindestens seit 2022/23 durchgehend im Punktspielbetrieb; Herzberg und Libetario sind seit 2022/23 durchgehend gemeldet. Daneben eine eigene Mannschaft in der Hobby-Liga Nord-West.",
   "gemeldet": [
    { "name": "Libetario, Michael", "rang": 10, "doppel": 10, "rolle": "Stamm",
      "einsaetze": 5,  "einzel": "4:1", "notiz": "Nur halbe Saison gespielt, dann stark." },
    { "name": "Herzberg, Florian",  "rang": 20, "doppel": 20, "rolle": "Stamm",
      "einsaetze": 10, "einzel": "7:2", "notiz": "Bester Einzelspieler, trägt die Mannschaft." },
    { "name": "Mandel, Marek",      "rang": 30, "doppel": 50, "rolle": "Stamm",
      "einsaetze": 7,  "einzel": "5:2", "notiz": "Einzelrang 30, Doppelrang 50 — geht auseinander." },
    { "name": "Kieweg, Michael",    "rang": 50, "doppel": 40, "rolle": "Stamm",
      "einsaetze": 7,  "einzel": "2:2", "notiz": "" },
    { "name": "Zajicek, Harald",    "rang": 90, "doppel": 90, "rolle": "Stamm",
      "einsaetze": 9,  "einzel": "1:5", "notiz": "Mannschaftsführer. Im Einzel die schwächste Bilanz der Stammherren." },
    { "name": "Zeh, Ulrike",        "rang": 20, "doppel": 50, "rolle": "Stamm, Dame",
      "einsaetze": 10, "einzel": "0:8", "notiz": "Spielte fast jedes DE — acht Niederlagen, kein Sieg." },
    { "name": "King, Monique",      "rang": 50, "doppel": 20, "rolle": "Stamm, Dame",
      "einsaetze": 3,  "einzel": "–",  "notiz": "Nur Doppel. Doppelrang 20." }
   ],
   "reservepool": [
    { "name": "Liebe, Helan",     "rang": 10,  "doppel": 10,  "einsaetze": 0, "einzel": "–",
      "notiz": "Dame, Ranglistenplatz 1 des Vereins — aber nur Reserve und 2025/26 ohne Einsatz. Unbekannte Größe." },
    { "name": "Haack, Benjamin",  "rang": 70,  "doppel": 30,  "einsaetze": 2, "einzel": "–",
      "notiz": "Doppelrang 30 — im Doppel deutlich höher eingestuft als im Einzel." },
    { "name": "Butzin, Jannika",  "rang": 40,  "doppel": 30,  "einsaetze": 3, "einzel": "3:0",
      "notiz": "Dame. Drei Einzel, drei Siege — die beste Damenbilanz des Vereins." },
    { "name": "Täuber, Helmuth",  "rang": 40,  "doppel": 60,  "einsaetze": 2, "einzel": "1:1", "notiz": "" },
    { "name": "Gerbing, Konrad",  "rang": 60,  "doppel": 70,  "einsaetze": 2, "einzel": "0:2", "notiz": "" },
    { "name": "Kubik, Inga",      "rang": 30,  "doppel": 40,  "einsaetze": 1, "einzel": "1:0", "notiz": "Dame." },
    { "name": "Ning, Haiyang",    "rang": 60,  "doppel": 60,  "einsaetze": 7, "einzel": "–",
      "notiz": "Dame. Sieben Einsätze, ausschließlich Doppel und Mixed." },
    { "name": "Arnold, Balthasar","rang": 80,  "doppel": 80,  "einsaetze": 0, "einzel": "–", "notiz": "" },
    { "name": "Natalis, Marcel",  "rang": 100, "doppel": 100, "einsaetze": 6, "einzel": "0:1", "notiz": "" }
   ],
   "abgaenge": []
  }
,
  {
    "kurz": "Tempelhof V",
    "name": "SG BC Tempelhof/Friedenau V",
    "spielTermin": "2026-11-22",
    "heimspielFuerUns": false,
    "verein": {
      "id": 12138,
      "gegruendet": null,
      "halle": "DI",
      "mf": "Schoetz, Carsten"
    },
    "vorsaison": null,
    "vollstaendig": "3 von 3 Begegnungen der Saison 2026/27 vollstaendig mit vier Herren und zwei Damen angetreten - kein kampfloses Spiel abgegeben.",
    "kaderProSpiel": "genau 6 Personen, kein Puffer. Am 04.10. zwei andere (Dr. Heidepriem, Ernst) als an den beiden Novemberterminen (Hayungs, Timmke).",
    "berichteAusgewertet": "3 von 3 der Saison 2026/27 (396229, 396230, 396216). Vorsaison nicht erhoben - clubTeams ignoriert den Saisonparameter, dafuer braeuchte man das BVBB-Archiv 25/26.",
    "historie": "Fuenfte Herrenmannschaft eines grossen Vereins: Aktive in der Regionalliga Nord, II in der Landesliga 1, III in der Bezirksklasse 2, IV in der D-Klasse 1 (Parallelstaffel zu unserer), V bei uns. Die Rangliste des BC Tempelhof fuehrt 66 Herren und 33 Damen, und die V ist aus den hinteren Raengen gebildet - Herren 340 bis 430, Damen 230 bis 250. Fuenf Hallen (BO, DI, FM o, GH, MH); unser Spiel am 22.11. ist in DI, ihr Heimspiel am 04.10. war in BO. AUFSTELLUNG: in beiden Novemberspielen Zeichen fuer Zeichen identisch - 1.HD Konieczny/Schoetz, OD Hayungs/Roick, 1.HE Konieczny, DE Timmke, GD Roick/Kaiser, 2.HE Schoetz, OE Hayungs, DD Kaiser/Timmke. Am 04.10. dasselbe Muster mit Dr. Heidepriem an Hayungs' Stelle und Ernst an Timmkes. PUNKTEQUELLEN: von ihren sieben Spielpunkten kommen VIER von den Damen (Damendoppel 2:1, Dameneinzel 2:1), zwei von Konieczny, einer von Schoetz. Offenes Doppel, Mixed und offenes Einzel haben sie in drei Begegnungen NIE gewonnen - 0:3, 0:3, 0:3. VERSTAERKUNG MOEGLICH: Stammspieler der I bis IV duerfen nach Anlage III E Abs. 1 nicht in der V spielen, und mehrere Reservespieler sind seit dem 07./08./17.11. an die IV festgespielt (Huterer, Thelen, Speck, Altenhein, Ho) - fuer die V gesperrt. Frei waeren aber Reservespieler mit den Raengen 240 bis 290 (Taegener, Monnerjahn, Knauer, Kappes, Mauson, Stumpf), also auf dem Papier staerker als ihre eigenen Stammspieler. Bisher haben sie davon keinen Gebrauch gemacht.",
    "gemeldet": [
      {
        "name": "Konieczny, Robert",
        "rang": 340,
        "doppel": 340,
        "rolle": "Stamm V",
        "einsaetze": 3,
        "einzel": "1:2",
        "notiz": "Ihre Nummer eins, immer 1.HD und 1.HE. Beim DCBV beides gewonnen (1.HE 21:17/21:12), bei den Brauereien dem Spitzenspieler einen Satz abgenommen (10:21, 22:20, 13:21). Gegen Lichterfelde chancenlos."
      },
      {
        "name": "Schoetz, Carsten",
        "rang": 350,
        "doppel": 350,
        "rolle": "Stamm V, Mannschaftsfuehrer",
        "einsaetze": 3,
        "einzel": "1:2",
        "notiz": "Immer 1.HD und 2.HE. Starker Auftakt gegen Lichterfelde (21:11/21:18), danach zweimal glatt verloren - beim DCBV 17:21 und 1:21. Formschwankung oder Kraftfrage."
      },
      {
        "name": "Hayungs, Jochen",
        "rang": 360,
        "doppel": 370,
        "rolle": "Stamm V",
        "einsaetze": 2,
        "einzel": "0:2",
        "notiz": "NICHT zu verwechseln mit Dr. Heidepriem - nuLiga fuehrt Titel mit, und bei Hayungs steht keiner. Nur die beiden Novemberspiele, dort OD und OE. OE 13:21/11:21 gegen Yang Xuanming (DCBVs staerksten, Einzelrang 80, Vorsaison 7:1) und 13:21/13:21 gegen Van (Brauereien, Tabellenzweiter) - deutlich, aber gegen gute Gegner. ACHTUNG: seine beiden OD-Niederlagen sagen vor allem etwas ueber den Partner Roick, der kein einziges Doppel gewonnen hat. Robert kennt moeglicherweise einen starken Spieler dieses Namens - das OD ist weniger geschenkt, als die 0:3-Bilanz aussieht. Am 04.10. nicht dabei."
      },
      {
        "name": "Roick, Klaus",
        "rang": 430,
        "doppel": 410,
        "rolle": "Stamm V",
        "einsaetze": 3,
        "einzel": "-",
        "notiz": "Reiner Doppelspieler: dreimal OD, dreimal GD, kein Einzel - und keines der sechs Doppel gewonnen. Rangniedrigster der Sechs."
      },
      {
        "name": "Kaiser, Simone",
        "rang": 230,
        "doppel": 250,
        "rolle": "Stamm V, Dame",
        "einsaetze": 3,
        "einzel": "0:1",
        "notiz": "Die nach EIGENER Vereinsmeldung staerkere der beiden Damen: 230/250 gegen Timmkes 250/310 - in beiden Listen vorn. Immer Damendoppel, dazu Mixed (zweimal) oder Dameneinzel (einmal). Mit Timmke im DD zweimal gewonnen; im Mixed mit Roick dreimal verloren. Ihr einziges Einzel war gegen Lichterfelde, den Tabellenfuehrer: 10:21/14:21. Robert kennt sie persoenlich und haelt sie fuer stark."
      },
      {
        "name": "Timmke, Sandra",
        "rang": 250,
        "doppel": 310,
        "rolle": "Stamm V, Dame",
        "einsaetze": 2,
        "einzel": "2:0",
        "notiz": "Beste BILANZ der Mannschaft, aber nicht zwingend die staerkere Dame: die Vereinsrangliste stellt Kaiser vor sie. Dameneinzel 2:0 - 21:11/21:9 beim DCBV gegen eine Ersatzspielerin, 21:19/22:20 bei den Brauereien, also hauchduenn. Noch keine Spitzendame gesehen. Das DD mit Kaiser gewinnt die engen Spiele: 25:23/23:21 und 22:20/21:16 - nervenstark, aber niemand wurde ueberrannt. Am 04.10. nicht dabei."
      },
      {
        "name": "Fuchs, Kerstin",
        "rang": 240,
        "doppel": 240,
        "rolle": "Stamm V, Dame",
        "einsaetze": 0,
        "einzel": "-",
        "notiz": "Gemeldet, aber in dieser Saison noch nicht eingesetzt."
      }
    ],
    "reservepool": [
      {
        "name": "Dr. Heidepriem, Raphael",
        "rang": 370,
        "doppel": 360,
        "einsaetze": 1,
        "einzel": "0:1",
        "notiz": "Am 04.10. OD und OE. Das offene Einzel endete 0:21/0:21 - nicht angetreten oder aufgegeben. Seither nicht mehr dabei."
      },
      {
        "name": "Ernst, Hanna",
        "rang": 180,
        "doppel": 130,
        "einsaetze": 1,
        "einzel": "-",
        "notiz": "DIE VARIABLE FUER DEN 22.11.: Doppelrang 130 - in der Vereinsrangliste weit vor Kaiser (250) und Timmke (310), als Reservespielerin frei einsetzbar. Steht sie in der Halle, ist das Damendoppel eine andere Aufgabe. Am 04.10. DD und GD; im DD mit Kaiser gegen Lichterfelde einen Satz geholt (28:26)."
      },
      {
        "name": "Ernst, Anne",
        "rang": 90,
        "doppel": 100,
        "einsaetze": 0,
        "einzel": "-",
        "notiz": "Gemeldet fuer die III - nach Anlage III E Abs. 1 in der V NICHT spielberechtigt. Nur zur Einordnung der Namensgleichheit mit Hanna Ernst."
      }
    ],
    "abgaenge": []
  }
 ]
};
