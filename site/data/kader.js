/* Kader Charlottenburger TSV II, Saison 2026/27.
   "comic": Dateiname eines Bildes in assets/bilder/, sonst leer lassen.

   SOLLSTÄRKE pro Spiel: 4 Herren + 2 Damen.
   Zweimal pro Saison darf mit 3 Herren oder mit 1 Dame angetreten werden.

   Einspringer: Leute, die aushelfen, wenn jemand fehlt. Namen hier eintragen,
   dann tauchen sie im Anwesenheitscheck als eigene Gruppe auf. */

window.KADER = {
  herren: [
    { vorname: "Jens",   comic: "", rolle: "" },
    { vorname: "Hiep",   comic: "", rolle: "" },
    { vorname: "Robert", comic: "", rolle: "Mannschaftsführer" },
    { vorname: "Alex",   comic: "", rolle: "" },
    { vorname: "Nils",   comic: "", rolle: "" }
  ],
  damen: [
    { vorname: "Karo",  comic: "", rolle: "" },
    { vorname: "Cathy", comic: "", rolle: "" }
  ],
  ersatz: {
    herren: [
      /* { vorname: "Name", comic: "", rolle: "Einspringer" }, */
    ],
    damen: [
      /* { vorname: "Name", comic: "", rolle: "Einspringerin" }, */
    ]
  },
  sollstaerke: { herren: 4, damen: 2, ausnahmenProSaison: 2 }
};
