/* Brücke zwischen den Rufnamen, mit denen wir planen, und den Klarnamen der
   nuLiga-Rangliste. NUR wenn hier ein Name steht, kann die Seite Einsätze und
   Festspiel-Konto einer Person zuordnen.

   Herren am 26.09.2026 von Robert bestätigt. Damen sowie Eric und Sarin am 16.11.2026
   von Robert bestätigt — die Tabelle ist damit vollständig. */

window.ZUORDNUNG = {
  "Matthias": "Pfender, Matthias",          /* bestätigt — Robert, 18.11.2026: umgezogen, aber weiter
                                               im Verein. Stammspieler der II, Rang 60/60 — formal
                                               unser stärkster Herr, nur selten in Berlin. */
  "Robert": "Schultz-Heienbrock, Robert",   /* bestätigt */
  "Jens":   "Wandel, Jens",                 /* bestätigt */
  "Hiep":   "Nguyen, Huu Loc",              /* bestätigt */
  "Alex":   "Jürgen, Alexander",            /* bestätigt — Reserve, Einzelrang 130, Doppelrang 140 */
  "Nils":   "Kaune, Nils",                  /* bestätigt — Nachmeldung, spielberechtigt seit 18.09.2026 */
  "Karo":   "Wiegleb, Karoline",     /* bestätigt — Robert, 16.11.2026 */
  "Katharina": "Kippert, Katharina", /* bestätigt — Robert, 16.11.2026; in nuLiga Stammspielerin UNSERER II */
  "Cathy":  "Schnak, Catherine",     /* bestätigt — Robert, 16.11.2026 */
  "Eric":   "Godiveau, Eric",        /* bestätigt — Robert, 16.11.2026; Stamm III, hilft bei uns aus */
  "Sarin":  "Bhaskaran, Sarin"       /* bestätigt — Robert, 16.11.2026; Stamm III, hilft bei uns aus */
};

/* ---------------------------------------------------------------------------
   Abweichungen zwischen gemeldeter Liste und Wirklichkeit.

   rangliste.js bleibt unangetastet: das ist die genehmigte Meldung und der
   Maßstab, an dem der Spielausschuss misst. Hier steht, welche Abweichungen
   uns bekannt sind, damit die Seite den Unterschied anzeigen kann statt ihn
   zu glätten.
   --------------------------------------------------------------------------- */

/* Wer in nuLiga als Stammspieler der II geführt wird, aber nicht mehr im Verein ist.

   Stand 18.11.2026: NIEMAND — die Liste ist leer, und das ist der richtige Stand.
   - Pfender, Matthias: war hier ab 26.09.2026 eingetragen. Das war ein IRRTUM. Er ist nur
     umgezogen und weiter Mitglied; am 22.11.2026 spielt er für uns. Von einer Abmeldung beim
     Spielausschuss ist also ausdrücklich ABZUSEHEN — sie stand bis zum 18.11. als Vorhaben im
     Projektstand.
   - Bartoscheck, Sebastian: war hier ab 26.09.2026 eingetragen und ist in nuLiga zum
     07.11.2026 regulär abgemeldet. Damit stimmen Meldung und Wirklichkeit überein, und der
     Eintrag ist erledigt. In rangliste.js steht er weiter mit dem Status "abgemeldet 07.11.2026".

   Folge: Die II hat wieder DREI verfügbare Herren-Stammspieler (Pfender 60, Nguyen 80,
   Schultz-Heienbrock 90) statt zwei. */
window.NICHT_IM_VEREIN = {};

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
