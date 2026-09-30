/* Einsätze aus den nuLiga-Spielberichten.
   Wird von der wöchentlichen Aufgabe gefüllt, sobald Spiele stattgefunden haben.

   Struktur: ein Eintrag je Einsatz einer Person in einem Mannschaftskampf.
     { datum: "2026-09-30", mannschaft: "II", name: "Schultz-Heienbrock, Robert",
       disziplinen: ["1.HD","2.HE"], berichtUrl: "https://..." }

   Der Zähler auf der Seite wertet daraus:
   - Einsätze in HÖHEREN Mannschaften je Person und Saison (Grenze: 2, siehe REGELN.md)
   - Einsätze in der eigenen Mannschaft
   - gleichzeitige Einsätze am selben Tag (unzulässig) */

window.EINSAETZE = {
  "stand": "Stand 28.09.2026 – gespielt: I am 26.09., III und IV am 27.09. Die II startet erst am 30.09.",
  "hinweis": "Für die IV (Köpenicker BC VIII – CTSV IV, 3:5 am 27.09.) hat nuLiga bisher nur das Gesamtergebnis eingetragen; der Spielbericht enthält keine Namen und ist noch nicht genehmigt. Sobald er gefüllt ist, kommen die Einsätze der IV hier dazu.",
  "eintraege": [
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
      "name": "Wandel, Julia",
      "disziplinen": [
        "DD",
        "GD"
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
      "name": "Wandel, Jens",
      "disziplinen": [
        "OD",
        "GD"
      ],
      "berichtUrl": "https://bvbb-badminton.liga.nu/cgi-bin/WebObjects/nuLigaBADDE.woa/wa/groupMeetingReport?meeting=396046&championship=BBMM+26%2F27&group=41956"
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
      "name": "Müller, Janina",
      "disziplinen": [
        "DD",
        "GD"
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
      "name": "Durie, Sven Duncan",
      "disziplinen": [
        "OD",
        "2.HE"
      ],
      "berichtUrl": "https://bvbb-badminton.liga.nu/cgi-bin/WebObjects/nuLigaBADDE.woa/wa/groupMeetingReport?meeting=396465&championship=BBMM+26%2F27&group=42137"
    }
  ]
};
