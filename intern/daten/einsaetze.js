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
  stand: "noch keine Spiele absolviert",
  eintraege: []
};
