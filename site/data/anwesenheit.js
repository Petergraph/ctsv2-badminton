/* Wer ist beim jeweiligen Spiel dabei?
   Status pro Person: "ja" | "nein" | "vielleicht" | "" (noch nichts gesagt)

   Solange der Klick-Anwesenheitscheck noch nicht läuft, wird hier von Hand
   eingetragen. Sobald die Netlify-Function steht, überschreibt sie diese Werte —
   die Struktur bleibt identisch, es geht also nichts verloren.

   "treffpunkt" ist frei: Abfahrtszeit, Fahrgemeinschaft, was auch immer. */

window.ANWESENHEIT = {
  "2026-09-30": { treffpunkt: "Halle offen ab 19:00", status: { Jens: "", Hiep: "", Robert: "ja", Alex: "", Nils: "", Karo: "", Cathy: "" } },
  "2026-10-01": { treffpunkt: "", status: {} },
  "2026-11-04": { treffpunkt: "", status: {} },
  "2026-11-14": { treffpunkt: "", status: {} },
  "2026-11-22": { treffpunkt: "", status: {} },
  "2026-12-02": { treffpunkt: "", status: {} },
  "2026-12-12": { treffpunkt: "", status: {} },
  "2027-01-08": { treffpunkt: "", status: {} },
  "2027-01-20": { treffpunkt: "", status: {} },
  "2027-01-24": { treffpunkt: "", status: {} },
  "2027-02-17": { treffpunkt: "", status: {} },
  "2027-02-21": { treffpunkt: "Fahrgemeinschaften bis Donnerstag in die Gruppe", status: {} },
  "2027-03-07": { treffpunkt: "", status: {} },
  "2027-03-17": { treffpunkt: "", status: {} }
};
