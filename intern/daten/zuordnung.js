/* Brücke zwischen den Rufnamen, mit denen wir planen, und den Klarnamen der
   nuLiga-Rangliste. NUR wenn hier ein Name steht, kann die Seite Einsätze und
   Festspiel-Konto einer Person zuordnen.

   Herren am 26.09.2026 von Robert bestätigt. Damen weiterhin Vermutung. */

window.ZUORDNUNG = {
  "Robert": "Schultz-Heienbrock, Robert",   /* bestätigt */
  "Jens":   "Wandel, Jens",                 /* bestätigt */
  "Hiep":   "Nguyen, Huu Loc",              /* bestätigt */
  "Alex":   "Jürgen, Alexander",            /* bestätigt — Reserve, Einzelrang 130, Doppelrang 140 */
  "Nils":   "Kaune, Nils",                  /* bestätigt — Nachmeldung, spielberechtigt seit 18.09.2026 */
  "Karo":   "",   /* Vorschlag: "Wiegleb, Karoline" — bitte prüfen */
  "Cathy":  ""    /* Vorschlag: "Schnak, Catherine" — bitte prüfen */
};

/* ---------------------------------------------------------------------------
   Abweichungen zwischen gemeldeter Liste und Wirklichkeit.

   rangliste.js bleibt unangetastet: das ist die genehmigte Meldung und der
   Maßstab, an dem der Spielausschuss misst. Hier steht, welche Abweichungen
   uns bekannt sind, damit die Seite den Unterschied anzeigen kann statt ihn
   zu glätten.
   --------------------------------------------------------------------------- */

/* Nicht mehr im Verein, in nuLiga aber weiter als Stammspieler der II geführt
   (anders als Plaschnick/Ünal, die am 18.07.2026 abgemeldet wurden).
   Solange sie in der Liste stehen, hat die II formal vier Herren-Stammspieler
   und faktisch zwei. */
window.NICHT_IM_VEREIN = {
  "Pfender, Matthias":    { seit: "2026-09-26", quelle: "Robert" },
  "Bartoscheck, Sebastian": { seit: "2026-09-26", quelle: "Robert" }
};

/* Wer tatsächlich für eine andere Mannschaft spielt als gemeldet.
   Jens: in nuLiga Stammspieler der III (Rang 70), spielt aber fest bei uns und
   nicht für die III. Das Hochziehen ist zulässig (Anlage III F Abs. 2 Satz 1) und
   bei uns unbegrenzt: die Zwei-Einsatz-Grenze sperrt ihn nie für die höhere
   Mannschaft. Sie nimmt ihm ab dem dritten Einsatz die Berechtigung für die
   III — gewollt, aber dann endgültig. Dritter Einsatz wäre der 04.11.2026.
   Saubere Lösung: Ummeldung vor Beginn der Rückrunde mit Genehmigung des
   Spielausschusses (Anlage III E Abs. 1), also bis Ende 12/2026. */
window.SPIELT_FUER = {
  "Jens": { mannschaft: "II", seit: "2026-09-26", gewollt: true,
            grund: "Erster Herr der II, seit Pfender und Bartoscheck weg sind." }
};
