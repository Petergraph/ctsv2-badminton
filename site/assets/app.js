/* Charlottenburger TSV II – Saison 2026/27
   Baut die Seite aus den Dateien in data/. Normalerweise muss hier nichts geändert werden. */

(function () {
  "use strict";

  var MEIN = "Charlottenburger TSV II";
  var MONATE = ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"];
  var TAGE = { Mo: "Montag", Di: "Dienstag", Mi: "Mittwoch", Do: "Donnerstag", Fr: "Freitag", Sa: "Samstag", So: "Sonntag" };
  var API = "/api/anwesenheit";
  var DAUER_MS = 3 * 36e5;
  var live = false;
  var EMOJI = {
    "Deutsch-Chinesischer BV II": "🐼",
    "Vorspiel QSB": "🦎",
    "DIBVM V": "🦔",
    "SV Berliner Brauereien VIII": "🐴",
    "TuS Lichterfelde": "🐕",
    "SG BC Tempelhof/Friedenau V": "🕊️",
    "SG Gaselan Fürstenwalde II": "🐻",
    "Charlottenburger TSV II": "🦢"
  };
  var WAHL = [
    { wert: "ja",         zeichen: "✓", titel: "dabei" },
    { wert: "vielleicht", zeichen: "?", titel: "unklar" },
    { wert: "nein",       zeichen: "✕", titel: "raus" }
  ];

  var spiele   = (window.SPIELPLAN.spiele || []).filter(function (s) { return s.eigenesSpiel; });
  var hallen   = window.HALLEN;
  var berichte = window.VORBERICHTE || {};
  var kaderRoh = window.KADER;
  var teams    = window.TEAMS.teams || [];
  var SOLL     = kaderRoh.sollstaerke || { herren: 4, damen: 2, ausnahmenProSaison: 2 };

  /* Eine flache Personenliste mit Geschlecht und Gruppe */
  function sammle(liste, dame, ersatz) {
    return (liste || []).map(function (p) {
      return { name: p.vorname, comic: p.comic, rolle: p.rolle, dame: dame, ersatz: ersatz };
    });
  }
  var stamm = sammle(kaderRoh.herren, false, false).concat(sammle(kaderRoh.damen, true, false));
  var ersatzleute = sammle((kaderRoh.ersatz || {}).herren, false, true)
    .concat(sammle((kaderRoh.ersatz || {}).damen, true, true));
  var personen = stamm.concat(ersatzleute);

  /* ---------- Zustand der Zusagen ----------
     zustand[datum][name] = "ja" | "vielleicht" | "nein" | ""
     Startwerte aus data/anwesenheit.js, danach hat der Server das letzte Wort —
     aber nur für Namen, zu denen er tatsächlich etwas weiß. */
  var zustand = {};
  var treffpunkte = {};
  (function seed() {
    var datei = window.ANWESENHEIT || {};
    spiele.forEach(function (s) {
      var e = datei[s.datum] || {};
      zustand[s.datum] = Object.assign({}, e.status || {});
      treffpunkte[s.datum] = e.treffpunkt || "";
    });
  })();

  function status(datum, name) { return (zustand[datum] || {})[name] || ""; }

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }
  function bild(pfad, alt) {
    return pfad ? '<img src="assets/bilder/' + esc(pfad) + '" alt="' + esc(alt) + '">' : null;
  }
  function startZeit(s) { return new Date(s.datum + "T" + s.zeit + ":00"); }
  function vorbei(s)    { return startZeit(s).getTime() + DAUER_MS < Date.now(); }
  function langesDatum(s) { return (TAGE[s.tag] || s.tag) + ", " + s.datumDe; }
  function mapsLink(h) {
    return "https://www.google.com/maps/dir/?api=1&destination=" +
      encodeURIComponent(h.strasse + ", " + h.plz + " " + h.ort);
  }

  var kommend  = spiele.filter(function (s) { return !vorbei(s); });
  var gespielt = spiele.filter(vorbei).reverse();

  /* ---------- Sollstärke ---------- */
  function bilanz(datum) {
    var h = 0, d = 0, unklar = 0, offen = 0, raus = 0;
    personen.forEach(function (p) {
      var st = status(datum, p.name);
      if (st === "ja") { p.dame ? d++ : h++; }
      else if (st === "vielleicht") unklar++;
      else if (st === "nein") raus++;
      else offen++;
    });
    var lage = "knapp";
    if (h >= SOLL.herren && d >= SOLL.damen) lage = "komplett";
    else if ((h === SOLL.herren - 1 && d >= SOLL.damen) || (h >= SOLL.herren && d === SOLL.damen - 1)) lage = "ausnahme";
    return { herren: h, damen: d, unklar: unklar, raus: raus, offen: offen, lage: lage };
  }
  function ausnahmenVerplant() {
    return spiele.filter(function (s) { return bilanz(s.datum).lage === "ausnahme"; }).length;
  }

  /* ---------- Nächstes Spiel ---------- */
  var naechstes = kommend[0];
  if (naechstes) {
    var h0 = hallen[naechstes.halle];
    document.getElementById("ns-gegner").innerHTML =
      (naechstes.heimspiel ? "Heim gegen " : "Auswärts bei ") + "<strong>" + esc(naechstes.gegner) + "</strong>";
    document.getElementById("ns-meta").innerHTML =
      "<span>" + esc(langesDatum(naechstes)) + "</span><span>" + esc(naechstes.zeit) +
      " Uhr</span><span>" + esc(h0.name) + " · " + esc(h0.ort) + "</span>";
    document.getElementById("ns-anfahrt").href = mapsLink(h0);
    document.getElementById("ns-kalender").addEventListener("click", function () { icsFuer([naechstes]); });
    document.getElementById("ns-bericht").addEventListener("click", function () { oeffne(naechstes.id, true); });
    document.getElementById("cd-wann").textContent =
      naechstes.tag + ", " + naechstes.datumDe + " · " + naechstes.zeit + " Uhr";
    countdown(startZeit(naechstes));
  } else {
    document.getElementById("ns-gegner").textContent = "Saison beendet";
    document.getElementById("cd").innerHTML = "<div><b>🏸</b><span>bis nächste Saison</span></div>";
  }

  function countdown(ziel) {
    var t = document.getElementById("cd-t"), s = document.getElementById("cd-s"), m = document.getElementById("cd-m");
    function tick() {
      var diff = ziel - new Date();
      if (diff <= 0) { document.getElementById("cd").innerHTML = "<div><b>Läuft!</b></div>"; return; }
      t.textContent = Math.floor(diff / 864e5);
      s.textContent = String(Math.floor(diff / 36e5) % 24).padStart(2, "0");
      m.textContent = String(Math.floor(diff / 6e4) % 60).padStart(2, "0");
    }
    tick();
    setInterval(tick, 30000);
  }

  /* ---------- Spielkarten ---------- */
  function karte(s) {
    var h = hallen[s.halle];
    var art = s.heimspiel ? "heim" : "ausw";
    var teil = s.datum.split("-");
    var b = berichte[s.datum] || {};
    var istVorbei = vorbei(s);

    var rechts = s.ergebnis
      ? '<span class="ergebnis ' + (ergebnisGut(s) ? "sieg" : "niederlage") + '">' + esc(s.ergebnis) + "</span>"
      : '<span class="marke ' + art + '">' + (s.heimspiel ? "Heim" : "Auswärts") + "</span>";

    return '' +
      '<div class="eintrag" data-art="' + art + '" id="e-' + s.id + '">' +
        '<button class="spiel" type="button" aria-expanded="false" aria-controls="d-' + s.id + '" data-id="' + s.id + '">' +
          '<span class="datum"><b>' + teil[2] + "</b><span>" + MONATE[+teil[1] - 1] + " " + teil[0].slice(2) + "</span></span>" +
          "<span><h3>" + (s.heimspiel ? "gegen " : "bei ") + esc(s.gegner) + "</h3>" +
          "<p>" + esc(s.tag) + " · " + esc(s.zeit) + " Uhr · " + esc(h.name) + " · " + esc(h.ort) +
          (istVorbei ? "" : '<span class="kurzlage" data-kurz="' + s.datum + '">' + kurzlage(s.datum) + "</span>") +
          "</p></span>" +
          rechts +
        "</button>" +
        '<div class="detail" id="d-' + s.id + '" hidden>' +
          '<div class="detail-koerper">' +
            '<div class="detail-text">' +
              "<h4>" + esc(b.titel || "Vorbericht folgt") + "</h4>" +
              absaetze(b.text || "Der Vorbericht zu diesem Spiel wird noch geschrieben.") +
              (b.nachbericht ? '<h4 class="nach">Wie es ausging</h4>' + absaetze(b.nachbericht) : "") +
              (s.berichtUrl
                ? '<p><a class="knopf" href="' + esc(s.berichtUrl) + '" target="_blank" rel="noopener">📋 Spielbericht bei nuLiga</a></p>'
                : "") +
              (h.hinweis ? '<div class="fuffzig"><b>🔑 Die letzten 50 Meter</b><p>' + esc(h.hinweis) + "</p></div>" : "") +
            "</div>" +
            '<div class="detail-seite">' +
              (istVorbei ? "" : '<div class="anwesenheit" data-datum="' + s.datum + '">' + blockInhalt(s.datum) + "</div>") +
              '<div class="karte-flaeche" data-lat="' + h.lat + '" data-lon="' + h.lon + '" data-name="' + esc(h.name) + '">' +
                '<div class="hinweis">Karte wird geladen …</div>' +
              "</div>" +
              '<p class="adresse">' + esc(h.name) + "<span>" + esc(h.strasse) + " · " + esc(h.plz) + " " + esc(h.ort) + "</span>" +
              (h.oepnv ? "<span>🚇 " + esc(h.oepnv) + "</span>" : "") + "</p>" +
              '<div class="knopfreihe">' +
                '<a class="knopf" href="' + mapsLink(h) + '" target="_blank" rel="noopener">🚗 Route</a>' +
                '<a class="knopf" href="https://www.vbb.de/fahrinfo/" target="_blank" rel="noopener">🚆 ÖPNV</a>' +
                '<button class="knopf" type="button" data-ics="' + s.id + '">📅 Kalender</button>' +
              "</div>" +
            "</div>" +
          "</div>" +
        "</div>" +
      "</div>";
  }

  function ergebnisGut(s) {
    var p = String(s.ergebnis).split(":");
    if (p.length !== 2) return false;
    return s.heimspiel ? +p[0] > +p[1] : +p[1] > +p[0];
  }
  function absaetze(text) {
    return String(text).split(/\n\n+/).map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("");
  }

  function kurzlage(datum) {
    var b = bilanz(datum);
    if (b.herren + b.damen === 0) return " · noch keine Zusagen";
    var symbol = b.lage === "komplett" ? "✅" : b.lage === "ausnahme" ? "⚠️" : "🔴";
    return " · " + symbol + " " + b.herren + " H / " + b.damen + " D";
  }

  /* ---------- Anwesenheitsblock ---------- */
  function blockInhalt(datum) {
    var b = bilanz(datum);
    var meldung, klasse;
    if (b.lage === "komplett") {
      meldung = "Komplett — " + b.herren + " Herren, " + b.damen + " Damen";
      klasse = "gut";
    } else if (b.lage === "ausnahme") {
      var verplant = ausnahmenVerplant();
      meldung = "Ausnahme — " + b.herren + " Herren, " + b.damen + (b.damen === 1 ? " Dame" : " Damen") +
        " · " + verplant + " von " + SOLL.ausnahmenProSaison + " Ausnahmen der Saison" +
        (verplant > SOLL.ausnahmenProSaison ? " (zu viele!)" : "");
      klasse = verplant > SOLL.ausnahmenProSaison ? "schlecht" : "warnung";
    } else {
      meldung = "Noch nicht spielfähig — " + b.herren + " von " + SOLL.herren + " Herren, " +
        b.damen + " von " + SOLL.damen + " Damen";
      klasse = "schlecht";
    }

    return '<h4>Wer ist dabei?</h4>' +
      '<p class="lage ' + klasse + '">' + esc(meldung) + "</p>" +
      gruppe(datum, "Herren", stamm.filter(function (p) { return !p.dame; })) +
      gruppe(datum, "Damen", stamm.filter(function (p) { return p.dame; })) +
      (ersatzleute.length
        ? gruppe(datum, "Einspringer", ersatzleute)
        : '<p class="ersatz-leer">Einspringer stehen noch keine in <code>data/kader.js</code>. ' +
          "Wer aushelfen kann, wird dort eingetragen und taucht dann hier auf.</p>") +
      (treffpunkte[datum] ? '<p class="treffpunkt">📌 ' + esc(treffpunkte[datum]) + "</p>" : "") +
      '<p class="noch-nicht">' + (live
        ? "Ein Klick pro Person, für alle sichtbar."
        : "Nicht mit dem Server verbunden — Änderungen bleiben nur in diesem Browser.") + "</p>";
  }

  function gruppe(datum, titel, leute) {
    if (!leute.length) return "";
    return '<p class="gruppen-titel">' + esc(titel) + "</p><ul class=\"zusagen\">" +
      leute.map(function (p) {
        var st = status(datum, p.name);
        return '<li class="z-' + (st || "offen") + '"><span class="wer">' + esc(p.name) + "</span>" +
          '<span class="wahl" role="group" aria-label="Zusage ' + esc(p.name) + '">' +
          WAHL.map(function (w) {
            return '<button type="button" class="w' + (st === w.wert ? " aktiv" : "") +
              '" data-zusage data-datum="' + datum + '" data-name="' + esc(p.name) +
              '" data-wert="' + w.wert + '" aria-pressed="' + (st === w.wert) +
              '" title="' + esc(p.name) + ": " + w.titel + '">' + w.zeichen + "</button>";
          }).join("") + "</span></li>";
      }).join("") + "</ul>";
  }

  /* Nur den betroffenen Block neu zeichnen — nicht die ganze Seite.
     Das war die Ursache dafür, dass die Liste heruntersprang. */
  function zeichneBlock(datum) {
    var el = document.querySelector('.anwesenheit[data-datum="' + datum + '"]');
    if (el) el.innerHTML = blockInhalt(datum);
    var kurz = document.querySelector('[data-kurz="' + datum + '"]');
    if (kurz) kurz.innerHTML = kurzlage(datum);
  }
  function zeichneAlles() {
    document.querySelectorAll(".anwesenheit[data-datum]").forEach(function (el) {
      el.innerHTML = blockInhalt(el.dataset.datum);
    });
    document.querySelectorAll("[data-kurz]").forEach(function (el) {
      el.innerHTML = kurzlage(el.dataset.kurz);
    });
  }

  /* ---------- Server ----------
     Serverwerte gewinnen, aber nur für Namen, zu denen der Server etwas weiß.
     Vorher wurde der ganze Tag ersetzt — dabei sind fremde Zusagen verschwunden. */
  function uebernehmen(daten) {
    if (!daten) return;
    Object.keys(daten).forEach(function (d) {
      var vomServer = (daten[d] && daten[d].status) || {};
      zustand[d] = zustand[d] || {};
      Object.keys(vomServer).forEach(function (name) { zustand[d][name] = vomServer[name]; });
    });
  }

  function ladeZusagen() {
    if (!window.fetch || location.protocol === "file:") return;
    fetch(API, { headers: { accept: "application/json" } })
      .then(function (r) { return r.ok ? r.json() : Promise.reject(r.status); })
      .then(function (daten) { live = true; uebernehmen(daten); zeichneAlles(); })
      .catch(function () { /* Function nicht erreichbar: stille Rückfallebene */ });
  }

  /* Alle Schreibvorgänge hintereinander, nie parallel.
     Zwei gleichzeitige Anfragen haben sich vorher gegenseitig überschrieben. */
  var kette = Promise.resolve();
  function setzeZusage(datum, name, wert) {
    var vorher = status(datum, name);
    if (vorher === wert) wert = "";                 /* nochmal klicken = zurücknehmen */
    zustand[datum] = zustand[datum] || {};
    zustand[datum][name] = wert;
    zeichneBlock(datum);
    if (!live) return;

    kette = kette.then(function () {
      return fetch(API, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ datum: datum, name: name, status: wert, code: teamCode() })
      }).then(function (r) {
        if (r.status === 403) {
          var eingabe = window.prompt("Mannschaftscode:");
          if (eingabe) { teamCode(eingabe); return setzeZusage(datum, name, wert); }
          throw new Error("kein Code");
        }
        if (!r.ok) throw new Error(r.status);
        return r.json();
      }).then(function (daten) {
        uebernehmen(daten);
        zeichneBlock(datum);
      }).catch(function () {
        zustand[datum][name] = vorher;
        zeichneBlock(datum);
        window.alert("Konnte nicht gespeichert werden. Bitte noch einmal versuchen.");
      });
    });
  }

  function teamCode(neu) {
    try {
      if (neu !== undefined) { localStorage.setItem("ctsv2-code", neu); return neu; }
      return localStorage.getItem("ctsv2-code") || "";
    } catch (e) { return ""; }
  }

  /* ---------- Listen aufbauen ---------- */
  var listeKommend = document.getElementById("spiele-kommend");
  var listeGespielt = document.getElementById("spiele-gespielt");
  listeKommend.innerHTML = kommend.map(karte).join("") ||
    '<p class="leer">Alle Spiele sind gespielt. Schöne Sommerpause.</p>';
  listeGespielt.innerHTML = gespielt.map(karte).join("") ||
    '<p class="leer">Noch kein Spiel gespielt — hier landen die Begegnungen, sobald sie vorbei sind.</p>';
  document.getElementById("zaehler-kommend").textContent =
    kommend.length + (kommend.length === 1 ? " Spiel offen" : " Spiele offen");
  document.getElementById("zaehler-gespielt").textContent =
    gespielt.length + " von " + spiele.length + " gespielt";

  ladeZusagen();

  [listeKommend, listeGespielt].forEach(function (liste) {
    liste.addEventListener("click", function (ev) {
      var zus = ev.target.closest("[data-zusage]");
      if (zus) {
        ev.stopPropagation();
        setzeZusage(zus.dataset.datum, zus.dataset.name, zus.dataset.wert);
        return;
      }
      var ics = ev.target.closest("[data-ics]");
      if (ics) {
        ev.stopPropagation();
        var s = spiele.filter(function (x) { return x.id === ics.dataset.ics; })[0];
        if (s) icsFuer([s]);
        return;
      }
      var knopf = ev.target.closest(".spiel");
      if (knopf) oeffne(knopf.dataset.id);
    });
  });

  function oeffne(id, scrollen) {
    var knopf = document.querySelector('.spiel[data-id="' + id + '"]');
    var detail = document.getElementById("d-" + id);
    if (!knopf || !detail) return;
    var auf = knopf.getAttribute("aria-expanded") === "true";
    knopf.setAttribute("aria-expanded", auf ? "false" : "true");
    detail.hidden = auf;
    if (!auf) {
      karteAn(detail.querySelector(".karte-flaeche"));
      if (scrollen) detail.scrollIntoView({ block: "center" });
    }
  }

  /* ---------- Karten ---------- */
  function karteAn(el) {
    if (!el || el.dataset.fertig) return;
    el.dataset.fertig = "1";
    if (typeof window.L === "undefined") {
      el.innerHTML = '<div class="hinweis karte-ersatz"><span aria-hidden="true">📍</span>' +
        "<b>" + el.dataset.name + "</b><span>Die zoombare Karte gibt es auf der veröffentlichten Seite. " +
        "Route und Verbindung findest du direkt darunter.</span></div>";
      return;
    }
    el.innerHTML = "";
    var karte = L.map(el, { scrollWheelZoom: false }).setView([+el.dataset.lat, +el.dataset.lon], 15);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(karte);
    L.marker([+el.dataset.lat, +el.dataset.lon]).addTo(karte).bindPopup(el.dataset.name);
  }

  /* ---------- Filter ---------- */
  document.querySelectorAll(".filter button[data-f]").forEach(function (b) {
    b.addEventListener("click", function () {
      document.querySelectorAll(".filter button[data-f]").forEach(function (x) {
        x.setAttribute("aria-pressed", String(x === b));
      });
      var f = b.dataset.f;
      listeKommend.querySelectorAll(".eintrag").forEach(function (el) {
        el.hidden = f !== "alle" && el.dataset.art !== f;
      });
    });
  });

  /* ---------- Zahlen der Saison ---------- */
  (function zahlen() {
    var gefahren = gespielt.filter(function (s) { return !s.heimspiel; }).length;
    var siege = spiele.filter(function (s) { return s.ergebnis && ergebnisGut(s); }).length;
    var frueh = spiele.filter(function (s) { return s.zeit < "12:00"; }).length;
    document.getElementById("zahlen").innerHTML = [
      { wert: gespielt.length + " / " + spiele.length, label: "Spiele absolviert" },
      { wert: siege + (siege === 1 ? " Sieg" : " Siege"), label: "bisher" },
      { wert: gefahren + " / 7", label: "Auswärtsfahrten hinter uns" },
      { wert: frueh + "×", label: "Anwurf vor 12 Uhr" }
    ].map(function (k) {
      return '<div class="kachel"><b>' + esc(k.wert) + "</b><span>" + esc(k.label) + "</span></div>";
    }).join("");
  })();

  /* ---------- Kalender ---------- */
  function icsZeit(d) { return d.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z"; }
  function icsFuer(auswahl, dateiname) {
    var zeilen = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//CTSV II//Badminton//DE", "CALSCALE:GREGORIAN"];
    auswahl.forEach(function (s) {
      var h = hallen[s.halle];
      var start = startZeit(s);
      zeilen.push(
        "BEGIN:VEVENT",
        "UID:" + s.id + "@ctsv2-badminton",
        "DTSTAMP:" + icsZeit(new Date()),
        "DTSTART:" + icsZeit(start),
        "DTEND:" + icsZeit(new Date(start.getTime() + DAUER_MS)),
        "SUMMARY:Badminton " + (s.heimspiel ? "(H) gegen " : "(A) bei ") + s.gegner,
        "LOCATION:" + [h.name, h.strasse, h.plz + " " + h.ort].join("\\, "),
        "DESCRIPTION:" + (h.hinweis ? "Hinweis: " + h.hinweis : "D-Klasse 2, Saison 2026/27"),
        "END:VEVENT"
      );
    });
    zeilen.push("END:VCALENDAR");
    var blob = new Blob([zeilen.join("\r\n")], { type: "text/calendar;charset=utf-8" });
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = dateiname || "badminton-" + (auswahl.length > 1 ? "saison" : auswahl[0].datum) + ".ics";
    document.body.appendChild(a);
    a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
  }
  document.getElementById("alle-termine").addEventListener("click", function () {
    icsFuer(spiele, "badminton-ctsv2-saison-2026-27.ics");
  });

  /* ---------- Tabelle ---------- */
  var tab = window.TABELLE;
  document.getElementById("tabellen-stand").textContent = "Stand: " + tab.stand;
  document.getElementById("tabelle").innerHTML =
    "<thead><tr><th>#</th><th>Mannschaft</th><th>Beg.</th><th>Punkte</th><th>Spiele</th></tr></thead><tbody>" +
    tab.zeilen.map(function (z) {
      return "<tr" + (z.team === MEIN ? ' class="wir"' : "") + "><td>" + z.rang + "</td><td>" +
        esc(z.team) + "</td><td>" + z.begegnungen + "</td><td>" + esc(z.punkte) + "</td><td>" +
        esc(z.spiele) + "</td></tr>";
    }).join("") + "</tbody>";

  /* ---------- Gegner ---------- */
  document.getElementById("gegner").innerHTML = teams
    .filter(function (t) { return t.name !== MEIN; })
    .map(function (t) {
      var h = hallen[t.heimhalle];
      var m = bild(t.maskottchen, "Maskottchen " + t.name) || (EMOJI[t.name] || "🏸");
      return '<div class="gegner-karte"><div class="maskottchen" aria-hidden="true">' + m + "</div><div><h3>" +
        esc(t.name) + "</h3><p>" + esc(h.name) + " · " + esc(h.ort) + "</p>" +
        (t.web ? '<p><a href="' + esc(t.web) + '" target="_blank" rel="noopener">Vereinsseite</a></p>' : "") +
        "</div></div>";
    }).join("");

  /* ---------- Kader ---------- */
  document.getElementById("kader").innerHTML = personen.map(function (p) {
    var portrait = bild(p.comic, p.name) || "🏸";
    return '<div class="spieler' + (p.ersatz ? " ist-ersatz" : "") + '"><div class="portrait" aria-hidden="true">' +
      portrait + "</div><b>" + esc(p.name) + "</b><span>" +
      esc(p.rolle || (p.ersatz ? "Einspringer" : "Kader 26/27")) + "</span></div>";
  }).join("");

  /* ---------- Deep-Link ---------- */
  if (location.hash.indexOf("#spiel/") === 0) {
    var ziel = location.hash.slice(7);
    var treffer = spiele.filter(function (s) { return s.datum === ziel || s.id === ziel; })[0];
    if (treffer) setTimeout(function () { oeffne(treffer.id, true); }, 100);
  }
})();
