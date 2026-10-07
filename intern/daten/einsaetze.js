/* Einsätze aus den nuLiga-Spielberichten.
   Wird von der wöchentlichen Aufgabe gefüllt.

   Struktur: ein Eintrag je Einsatz einer Person in einem Mannschaftskampf.
     { datum: "2026-09-30", mannschaft: "II", name: "Schultz-Heienbrock, Robert",
       disziplinen: ["1.HD","OE"], berichtUrl: "https://..." }

   Der Zähler auf der Seite wertet daraus:
   - Einsätze in HÖHEREN Mannschaften je Person und Saison (Grenze: 2, siehe REGELN.md)
   - Einsätze in der eigenen Mannschaft
   - gleichzeitige Einsätze am selben Tag (unzulässig) */

window.EINSAETZE = {
  "stand": "Stand 05.10.2026 – gespielt: I am 26.09. und 01.10., III am 27.09. und 01.10., IV am 27.09., II am 30.09. und 01.10. Alle sieben Spielberichte sind genehmigt und ausgelesen.",
  "hinweis": "Disziplinkuerzel stehen genau so, wie nuLiga sie liefert. OD (offenes Doppel) und OE (offenes Einzel) sind ab Saison 2026/27 eigene Disziplinen und ersetzen 2.HD und 3.HE — sie werden NICHT dorthin zurueckuebersetzt (siehe REGELN.md).",
  "eintraege": [
    {
      "datum": "2026-09-26",
      "mannschaft": "I",
      "name": "Borschevski, Kirill Dmitri",
      "disziplinen": [
        "OD",
        "2.HE"
      ],
      "berichtUrl": "https://bvbb-badminton.liga.nu/cgi-bin/WebObjects/nuLigaBADDE.woa/wa/groupMeetingReport?meeting=396046&championship=BBMM+26%2F27&group=41956"
    },
    {
      "datum": "2026-09-26",
      "mannschaft": "I",
      "name": "Braun, Arwen, Gemma",
      "disziplinen": [
        "DD",
        "DE"
      ],
      "berichtUrl": "https://bvbb-badminton.liga.nu/cgi-bin/WebObjects/nuLigaBADDE.woa/wa/groupMeetingReport?meeting=396046&championship=BBMM+26%2F27&group=41956"
    },
    {
      "datum": "2026-09-26",
      "mannschaft": "I",
      "name": "Eissa, Mohamed",
      "disziplinen": [
        "1.HD",
        "OE"
      ],
      "berichtUrl": "https://bvbb-badminton.liga.nu/cgi-bin/WebObjects/nuLigaBADDE.woa/wa/groupMeetingReport?meeting=396046&championship=BBMM+26%2F27&group=41956"
    },
    {
      "datum": "2026-09-26",
      "mannschaft": "I",
      "name": "Kowalski, Christoph",
      "disziplinen": [
        "1.HD",
        "1.HE"
      ],
      "berichtUrl": "https://bvbb-badminton.liga.nu/cgi-bin/WebObjects/nuLigaBADDE.woa/wa/groupMeetingReport?meeting=396046&championship=BBMM+26%2F27&group=41956"
    },
    {
      "datum": "2026-09-26",
      "mannschaft": "I",
      "name": "Wandel, Jens",
      "disziplinen": [
        "OD",
        "GD"
      ],
      "berichtUrl": "https://bvbb-badminton.liga.nu/cgi-bin/WebObjects/nuLigaBADDE.woa/wa/groupMeetingReport?meeting=396046&championship=BBMM+26%2F27&group=41956"
    },
    {
      "datum": "2026-09-26",
      "mannschaft": "I",
      "name": "Wandel, Julia",
      "disziplinen": [
        "DD",
        "GD"
      ],
      "berichtUrl": "https://bvbb-badminton.liga.nu/cgi-bin/WebObjects/nuLigaBADDE.woa/wa/groupMeetingReport?meeting=396046&championship=BBMM+26%2F27&group=41956"
    },
    {
      "datum": "2026-09-27",
      "mannschaft": "III",
      "name": "Bhaskaran, Sarin",
      "disziplinen": [
        "1.HD",
        "OE"
      ],
      "berichtUrl": "https://bvbb-badminton.liga.nu/cgi-bin/WebObjects/nuLigaBADDE.woa/wa/groupMeetingReport?meeting=396465&championship=BBMM+26%2F27&group=42137"
    },
    {
      "datum": "2026-09-27",
      "mannschaft": "III",
      "name": "Braun, Arwen, Gemma",
      "disziplinen": [
        "DD",
        "DE"
      ],
      "berichtUrl": "https://bvbb-badminton.liga.nu/cgi-bin/WebObjects/nuLigaBADDE.woa/wa/groupMeetingReport?meeting=396465&championship=BBMM+26%2F27&group=42137"
    },
    {
      "datum": "2026-09-27",
      "mannschaft": "III",
      "name": "Durie, Sven Duncan",
      "disziplinen": [
        "OD",
        "2.HE"
      ],
      "berichtUrl": "https://bvbb-badminton.liga.nu/cgi-bin/WebObjects/nuLigaBADDE.woa/wa/groupMeetingReport?meeting=396465&championship=BBMM+26%2F27&group=42137"
    },
    {
      "datum": "2026-09-27",
      "mannschaft": "III",
      "name": "Erbe, Andreas",
      "disziplinen": [
        "OD",
        "GD"
      ],
      "berichtUrl": "https://bvbb-badminton.liga.nu/cgi-bin/WebObjects/nuLigaBADDE.woa/wa/groupMeetingReport?meeting=396465&championship=BBMM+26%2F27&group=42137"
    },
    {
      "datum": "2026-09-27",
      "mannschaft": "III",
      "name": "Godiveau, Eric",
      "disziplinen": [
        "1.HD",
        "1.HE"
      ],
      "berichtUrl": "https://bvbb-badminton.liga.nu/cgi-bin/WebObjects/nuLigaBADDE.woa/wa/groupMeetingReport?meeting=396465&championship=BBMM+26%2F27&group=42137"
    },
    {
      "datum": "2026-09-27",
      "mannschaft": "III",
      "name": "Müller, Janina",
      "disziplinen": [
        "DD",
        "GD"
      ],
      "berichtUrl": "https://bvbb-badminton.liga.nu/cgi-bin/WebObjects/nuLigaBADDE.woa/wa/groupMeetingReport?meeting=396465&championship=BBMM+26%2F27&group=42137"
    },
    {
      "datum": "2026-09-27",
      "mannschaft": "IV",
      "name": "Erbe, Andreas",
      "disziplinen": [
        "1.HD",
        "GD"
      ],
      "berichtUrl": "https://bvbb-badminton.liga.nu/cgi-bin/WebObjects/nuLigaBADDE.woa/wa/groupMeetingReport?meeting=396572&championship=BBMM+26%2F27&group=42155"
    },
    {
      "datum": "2026-09-27",
      "mannschaft": "IV",
      "name": "Heusel, Jannis",
      "disziplinen": [
        "OD",
        "2.HE"
      ],
      "berichtUrl": "https://bvbb-badminton.liga.nu/cgi-bin/WebObjects/nuLigaBADDE.woa/wa/groupMeetingReport?meeting=396572&championship=BBMM+26%2F27&group=42155"
    },
    {
      "datum": "2026-09-27",
      "mannschaft": "IV",
      "name": "Heyer, Johannes",
      "disziplinen": [
        "OD",
        "OE"
      ],
      "berichtUrl": "https://bvbb-badminton.liga.nu/cgi-bin/WebObjects/nuLigaBADDE.woa/wa/groupMeetingReport?meeting=396572&championship=BBMM+26%2F27&group=42155"
    },
    {
      "datum": "2026-09-27",
      "mannschaft": "IV",
      "name": "Kanis, Laura",
      "disziplinen": [
        "DD",
        "DE"
      ],
      "berichtUrl": "https://bvbb-badminton.liga.nu/cgi-bin/WebObjects/nuLigaBADDE.woa/wa/groupMeetingReport?meeting=396572&championship=BBMM+26%2F27&group=42155"
    },
    {
      "datum": "2026-09-27",
      "mannschaft": "IV",
      "name": "Kaune, Nils",
      "disziplinen": [
        "1.HD",
        "1.HE"
      ],
      "berichtUrl": "https://bvbb-badminton.liga.nu/cgi-bin/WebObjects/nuLigaBADDE.woa/wa/groupMeetingReport?meeting=396572&championship=BBMM+26%2F27&group=42155"
    },
    {
      "datum": "2026-09-27",
      "mannschaft": "IV",
      "name": "Nehls, Anissa Vivien",
      "disziplinen": [
        "DD",
        "GD"
      ],
      "berichtUrl": "https://bvbb-badminton.liga.nu/cgi-bin/WebObjects/nuLigaBADDE.woa/wa/groupMeetingReport?meeting=396572&championship=BBMM+26%2F27&group=42155"
    },
    {
      "datum": "2026-09-30",
      "mannschaft": "II",
      "name": "Jürgen, Alexander",
      "disziplinen": [
        "OD",
        "GD"
      ],
      "berichtUrl": "https://bvbb-badminton.liga.nu/cgi-bin/WebObjects/nuLigaBADDE.woa/wa/groupMeetingReport?meeting=396236&championship=BBMM+26%2F27&group=42121"
    },
    {
      "datum": "2026-09-30",
      "mannschaft": "II",
      "name": "Nguyen, Huu Loc",
      "disziplinen": [
        "OD",
        "2.HE"
      ],
      "berichtUrl": "https://bvbb-badminton.liga.nu/cgi-bin/WebObjects/nuLigaBADDE.woa/wa/groupMeetingReport?meeting=396236&championship=BBMM+26%2F27&group=42121"
    },
    {
      "datum": "2026-09-30",
      "mannschaft": "II",
      "name": "Schnak, Catherine",
      "disziplinen": [
        "DD",
        "GD"
      ],
      "berichtUrl": "https://bvbb-badminton.liga.nu/cgi-bin/WebObjects/nuLigaBADDE.woa/wa/groupMeetingReport?meeting=396236&championship=BBMM+26%2F27&group=42121"
    },
    {
      "datum": "2026-09-30",
      "mannschaft": "II",
      "name": "Schultz-Heienbrock, Robert",
      "disziplinen": [
        "1.HD",
        "OE"
      ],
      "berichtUrl": "https://bvbb-badminton.liga.nu/cgi-bin/WebObjects/nuLigaBADDE.woa/wa/groupMeetingReport?meeting=396236&championship=BBMM+26%2F27&group=42121"
    },
    {
      "datum": "2026-09-30",
      "mannschaft": "II",
      "name": "Wandel, Jens",
      "disziplinen": [
        "1.HD",
        "1.HE"
      ],
      "berichtUrl": "https://bvbb-badminton.liga.nu/cgi-bin/WebObjects/nuLigaBADDE.woa/wa/groupMeetingReport?meeting=396236&championship=BBMM+26%2F27&group=42121"
    },
    {
      "datum": "2026-09-30",
      "mannschaft": "II",
      "name": "Wiegleb, Karoline",
      "disziplinen": [
        "DD",
        "DE"
      ],
      "berichtUrl": "https://bvbb-badminton.liga.nu/cgi-bin/WebObjects/nuLigaBADDE.woa/wa/groupMeetingReport?meeting=396236&championship=BBMM+26%2F27&group=42121"
    },
    {
      "datum": "2026-10-01",
      "mannschaft": "I",
      "name": "Borschevski, Kirill Dmitri",
      "disziplinen": [
        "1.HD",
        "1.HE"
      ],
      "berichtUrl": "https://bvbb-badminton.liga.nu/cgi-bin/WebObjects/nuLigaBADDE.woa/wa/groupMeetingReport?meeting=396035&championship=BBMM+26%2F27&group=41956"
    },
    {
      "datum": "2026-10-01",
      "mannschaft": "I",
      "name": "Eissa, Mohamed",
      "disziplinen": [
        "OD",
        "2.HE"
      ],
      "berichtUrl": "https://bvbb-badminton.liga.nu/cgi-bin/WebObjects/nuLigaBADDE.woa/wa/groupMeetingReport?meeting=396035&championship=BBMM+26%2F27&group=41956"
    },
    {
      "datum": "2026-10-01",
      "mannschaft": "I",
      "name": "Heusel, Jannis",
      "disziplinen": [
        "OD",
        "OE"
      ],
      "berichtUrl": "https://bvbb-badminton.liga.nu/cgi-bin/WebObjects/nuLigaBADDE.woa/wa/groupMeetingReport?meeting=396035&championship=BBMM+26%2F27&group=41956"
    },
    {
      "datum": "2026-10-01",
      "mannschaft": "I",
      "name": "Kanis, Laura",
      "disziplinen": [
        "DD",
        "DE"
      ],
      "berichtUrl": "https://bvbb-badminton.liga.nu/cgi-bin/WebObjects/nuLigaBADDE.woa/wa/groupMeetingReport?meeting=396035&championship=BBMM+26%2F27&group=41956"
    },
    {
      "datum": "2026-10-01",
      "mannschaft": "I",
      "name": "Nguyen, Huu Loc",
      "disziplinen": [
        "1.HD",
        "GD"
      ],
      "berichtUrl": "https://bvbb-badminton.liga.nu/cgi-bin/WebObjects/nuLigaBADDE.woa/wa/groupMeetingReport?meeting=396035&championship=BBMM+26%2F27&group=41956"
    },
    {
      "datum": "2026-10-01",
      "mannschaft": "I",
      "name": "Wandel, Julia",
      "disziplinen": [
        "DD",
        "GD"
      ],
      "berichtUrl": "https://bvbb-badminton.liga.nu/cgi-bin/WebObjects/nuLigaBADDE.woa/wa/groupMeetingReport?meeting=396035&championship=BBMM+26%2F27&group=41956"
    },
    {
      "datum": "2026-10-01",
      "mannschaft": "II",
      "name": "Jürgen, Alexander",
      "disziplinen": [
        "OD",
        "GD"
      ],
      "berichtUrl": "https://bvbb-badminton.liga.nu/cgi-bin/WebObjects/nuLigaBADDE.woa/wa/groupMeetingReport?meeting=396233&championship=BBMM+26%2F27&group=42121"
    },
    {
      "datum": "2026-10-01",
      "mannschaft": "II",
      "name": "Kaune, Nils",
      "disziplinen": [
        "1.HD",
        "OE"
      ],
      "berichtUrl": "https://bvbb-badminton.liga.nu/cgi-bin/WebObjects/nuLigaBADDE.woa/wa/groupMeetingReport?meeting=396233&championship=BBMM+26%2F27&group=42121"
    },
    {
      "datum": "2026-10-01",
      "mannschaft": "II",
      "name": "Schnak, Catherine",
      "disziplinen": [
        "DD",
        "GD"
      ],
      "berichtUrl": "https://bvbb-badminton.liga.nu/cgi-bin/WebObjects/nuLigaBADDE.woa/wa/groupMeetingReport?meeting=396233&championship=BBMM+26%2F27&group=42121"
    },
    {
      "datum": "2026-10-01",
      "mannschaft": "II",
      "name": "Schultz-Heienbrock, Robert",
      "disziplinen": [
        "OD",
        "2.HE"
      ],
      "berichtUrl": "https://bvbb-badminton.liga.nu/cgi-bin/WebObjects/nuLigaBADDE.woa/wa/groupMeetingReport?meeting=396233&championship=BBMM+26%2F27&group=42121"
    },
    {
      "datum": "2026-10-01",
      "mannschaft": "II",
      "name": "Wandel, Jens",
      "disziplinen": [
        "1.HD",
        "1.HE"
      ],
      "berichtUrl": "https://bvbb-badminton.liga.nu/cgi-bin/WebObjects/nuLigaBADDE.woa/wa/groupMeetingReport?meeting=396233&championship=BBMM+26%2F27&group=42121"
    },
    {
      "datum": "2026-10-01",
      "mannschaft": "II",
      "name": "Wiegleb, Karoline",
      "disziplinen": [
        "DD",
        "DE"
      ],
      "berichtUrl": "https://bvbb-badminton.liga.nu/cgi-bin/WebObjects/nuLigaBADDE.woa/wa/groupMeetingReport?meeting=396233&championship=BBMM+26%2F27&group=42121"
    },
    {
      "datum": "2026-10-01",
      "mannschaft": "III",
      "name": "Bhaskaran, Sarin",
      "disziplinen": [
        "1.HD",
        "OE"
      ],
      "berichtUrl": "https://bvbb-badminton.liga.nu/cgi-bin/WebObjects/nuLigaBADDE.woa/wa/groupMeetingReport?meeting=396464&championship=BBMM+26%2F27&group=42137"
    },
    {
      "datum": "2026-10-01",
      "mannschaft": "III",
      "name": "Braun, Arwen, Gemma",
      "disziplinen": [
        "DD",
        "DE"
      ],
      "berichtUrl": "https://bvbb-badminton.liga.nu/cgi-bin/WebObjects/nuLigaBADDE.woa/wa/groupMeetingReport?meeting=396464&championship=BBMM+26%2F27&group=42137"
    },
    {
      "datum": "2026-10-01",
      "mannschaft": "III",
      "name": "Durie, Sven Duncan",
      "disziplinen": [
        "OD",
        "2.HE"
      ],
      "berichtUrl": "https://bvbb-badminton.liga.nu/cgi-bin/WebObjects/nuLigaBADDE.woa/wa/groupMeetingReport?meeting=396464&championship=BBMM+26%2F27&group=42137"
    },
    {
      "datum": "2026-10-01",
      "mannschaft": "III",
      "name": "Erbe, Andreas",
      "disziplinen": [
        "OD",
        "GD"
      ],
      "berichtUrl": "https://bvbb-badminton.liga.nu/cgi-bin/WebObjects/nuLigaBADDE.woa/wa/groupMeetingReport?meeting=396464&championship=BBMM+26%2F27&group=42137"
    },
    {
      "datum": "2026-10-01",
      "mannschaft": "III",
      "name": "Godiveau, Eric",
      "disziplinen": [
        "1.HD",
        "1.HE"
      ],
      "berichtUrl": "https://bvbb-badminton.liga.nu/cgi-bin/WebObjects/nuLigaBADDE.woa/wa/groupMeetingReport?meeting=396464&championship=BBMM+26%2F27&group=42137"
    },
    {
      "datum": "2026-10-01",
      "mannschaft": "III",
      "name": "Müller, Janina",
      "disziplinen": [
        "DD",
        "GD"
      ],
      "berichtUrl": "https://bvbb-badminton.liga.nu/cgi-bin/WebObjects/nuLigaBADDE.woa/wa/groupMeetingReport?meeting=396464&championship=BBMM+26%2F27&group=42137"
    }
  ]
};
