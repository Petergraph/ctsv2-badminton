/* Charlottenburger TSV II – Saison 2026/27
   Baut die Seite aus den Dateien in data/. Normalerweise muss hier nichts geändert werden. */

(function () {
  "use strict";

  var MEIN = "Charlottenburger TSV II";
  var MONATE = ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"];
  var TAGE = { Mo: "Montag", Di: "Dienstag", Mi: "Mittwoch", Do: "Donnerstag", Fr: "Freitag", Sa: "Samstag", So: "Sonntag" };
  var API = "/api/anwesenheit";          /* Netlify-Function, siehe netlify/functions/ */
  var live = false;                      /* true, sobald der Server antwortet */
  var DAUER_MS = 3 * 36e5;               /* ein Spieltag dauert ca. 3 Stunden */
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
  var STATUS = {
    ja:        { zeichen: "✅", text: "dabei" },
    nein:      { zeichen: "❌", text: "raus" },
    vielleicht:{ zeichen: "❓", text: "unklar" },
    "":        { zeichen: "·",  text: "keine Rückmeldung" }
  };

  var spiele   = (window.SPIELPLAN.spiele || []).filter(function (s) { return s.eigenesSpiel; });
  var hallen   = window.HALLEN;
  var berichte = window.VORBERICHTE || {};
  var anwes    = window.ANWESENHEIT || {};
  var teams    = window.TEAMS.teams || [];
  var kader    = [].concat(window.KADER.herren, window.KADER.damen);

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
  var gespielt = spiele.filter(vorbei).reverse();   /* jüngstes Spiel zuerst */

  /* ---------- Nächstes Spiel im Kopfbereich ---------- */
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
          (istVorbei ? "" : zusageKurz(anwes[s.datum] || { status: {} })) + "</p></span>" +
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
              (istVorbei ? "" : anwesenheitsBlock(s)) +
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

  function zusagen(a) {
    var z = { ja: 0, nein: 0, vielleicht: 0, offen: 0 };
    kader.forEach(function (p) {
      var st = (a.status || {})[p.vorname] || "";
      if (st === "ja") z.ja++; else if (st === "nein") z.nein++;
      else if (st === "vielleicht") z.vielleicht++; else z.offen++;
    });
    return z;
  }
  function zusageKurz(a) {
    var z = zusagen(a);
    if (z.ja === 0 && z.nein === 0 && z.vielleicht === 0) return " · <em>noch keine Rückmeldungen</em>";
    return " · <em>" + z.ja + " von " + kader.length + " dabei</em>";
  }

  function anwesenheitsBlock(s) {
    return '<div class="anwesenheit" id="anw-' + s.datum + '" data-datum="' + s.datum + '">' +
      anwesenheitsInhalt(s.datum) + "</div>";
  }

  function anwesenheitsInhalt(datum) {
    var a = anwes[datum] || { status: {}, treffpunkt: "" };
    var z = zusagen(a);
    var reihen = kader.map(function (p) {
      var st = (a.status || {})[p.vorname] || "";
      return '<li><button type="button" class="zusage z-' + (st || "offen") +
        '" data-zusage data-name="' + esc(p.vorname) + '" data-datum="' + datum +
        '" aria-label="' + esc(p.vorname) + ": " + STATUS[st].text + ', klicken zum Ändern">' +
        '<span aria-hidden="true">' + STATUS[st].zeichen + "</span> " + esc(p.vorname) +
        " <small>" + STATUS[st].text + "</small></button></li>";
    }).join("");
    return '<h4>Wer ist dabei?</h4>' +
      '<p class="zaehler">' + z.ja + " dabei · " + z.vielleicht + " unklar · " + z.nein +
      " raus · " + z.offen + " ohne Antwort</p>" +
      "<ul>" + reihen + "</ul>" +
      (a.treffpunkt ? '<p class="treffpunkt">📌 ' + esc(a.treffpunkt) + "</p>" : "") +
      '<p class="noch-nicht">' + (live
        ? "Klick auf den Namen: dabei → unklar → raus → keine Angabe. Gilt für alle."
        : "Noch nicht mit dem Server verbunden — die Werte stehen in data/anwesenheit.js.") +
      "</p>";
  }

  /* Zusagen vom Server holen und die Blöcke auffrischen */
  function ladeAnwesenheit() {
    if (!window.fetch || location.protocol === "file:") return;
    fetch(API, { headers: { accept: "application/json" } })
      .then(function (r) { return r.ok ? r.json() : Promise.reject(r.status); })
      .then(function (daten) {
        live = true;
        Object.keys(daten).forEach(function (d) {
          anwes[d] = Object.assign({}, anwes[d], daten[d],
            { status: Object.assign({}, (anwes[d] || {}).status, daten[d].status) });
        });
        aktualisiereAlleBloecke();
      })
      .catch(function () { /* Function nicht da: stille Rückfallebene */ });
  }

  function aktualisiereAlleBloecke() {
    document.querySelectorAll(".anwesenheit[data-datum]").forEach(function (el) {
      el.innerHTML = anwesenheitsInhalt(el.dataset.datum);
    });
    document.querySelectorAll(".spiel[data-id]").forEach(function (b) {
      var s = spiele.filter(function (x) { return x.id === b.dataset.id; })[0];
      var em = b.querySelector("p em");
      if (s && em && !vorbei(s)) em.outerHTML = zusageKurz(anwes[s.datum] || { status: {} }).replace(" · ", "");
    });
  }

  function naechsterStatus(st) {
    var folge = ["", "ja", "vielleicht", "nein"];
    return folge[(folge.indexOf(st) + 1) % folge.length];
  }

  function setzeZusage(datum, name, status) {
    var vorher = ((anwes[datum] || {}).status || {})[name] || "";
    anwes[datum] = anwes[datum] || { status: {} };
    anwes[datum].status = anwes[datum].status || {};
    anwes[datum].status[name] = status;                 /* sofort anzeigen */
    aktualisiereAlleBloecke();
    if (!live) return;

    var nutzlast = { datum: datum, name: name, status: status, code: teamCode() };
    fetch(API, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(nutzlast)
    }).then(function (r) {
      if (r.status === 403) {
        var eingabe = window.prompt("Mannschaftscode:");
        if (eingabe) { teamCode(eingabe); setzeZusage(datum, name, status); return; }
      }
      if (!r.ok) throw new Error(r.status);
      return r.json();
    }).then(function (daten) {
      if (daten) { Object.keys(daten).forEach(function (d) { anwes[d] = daten[d]; }); aktualisiereAlleBloecke(); }
    }).catch(function () {
      anwes[datum].status[name] = vorher;               /* zurückdrehen */
      aktualisiereAlleBloecke();
      window.alert("Konnte nicht gespeichert werden. Noch mal versuchen?");
    });
  }

  function teamCode(neu) {
    try {
      if (neu !== undefined) { localStorage.setItem("ctsv2-code", neu); return neu; }
      return localStorage.getItem("ctsv2-code") || "";
    } catch (e) { return ""; }
  }

  function absaetze(text) {
    return String(text).split(/\n\n+/).map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("");
  }

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

  ladeAnwesenheit();

  /* ---------- Auf- und zuklappen ---------- */
  [listeKommend, listeGespielt].forEach(function (liste) {
    liste.addEventListener("click", function (ev) {
      var knopf = ev.target.closest(".spiel");
      if (knopf) { oeffne(knopf.dataset.id); return; }
      var zus = ev.target.closest("[data-zusage]");
      if (zus) {
        ev.stopPropagation();
        var jetztSt = ((anwes[zus.dataset.datum] || {}).status || {})[zus.dataset.name] || "";
        setzeZusage(zus.dataset.datum, zus.dataset.name, naechsterStatus(jetztSt));
        return;
      }
      var ics = ev.target.closest("[data-ics]");
      if (ics) {
        var s = spiele.filter(function (x) { return x.id === ics.dataset.ics; })[0];
        if (s) icsFuer([s]);
      }
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

  /* ---------- Karten (Leaflet, mit Rückfallebene) ---------- */
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
    var el = document.getElementById("zahlen");
    var kacheln = [
      { wert: gespielt.length + " / " + spiele.length, label: "Spiele absolviert" },
      { wert: siege + (siege === 1 ? " Sieg" : " Siege"), label: "bisher" },
      { wert: gefahren + " / 7", label: "Auswärtsfahrten hinter uns" },
      { wert: frueh + "×", label: "Anwurf vor 12 Uhr" }
    ];
    el.innerHTML = kacheln.map(function (k) {
      return '<div class="kachel"><b>' + esc(k.wert) + "</b><span>" + esc(k.label) + "</span></div>";
    }).join("");
  })();

  /* ---------- Kalender-Export ---------- */
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
  document.getElementById("kader").innerHTML = kader.map(function (p) {
    var portrait = bild(p.comic, p.vorname) || "🏸";
    return '<div class="spieler"><div class="portrait" aria-hidden="true">' + portrait + "</div><b>" +
      esc(p.vorname) + "</b><span>" + esc(p.rolle || p.steckbrief || "Kader 26/27") + "</span></div>";
  }).join("");

  /* ---------- Deep-Link ---------- */
  if (location.hash.indexOf("#spiel/") === 0) {
    var ziel = location.hash.slice(7);
    var treffer = spiele.filter(function (s) { return s.datum === ziel || s.id === ziel; })[0];
    if (treffer) setTimeout(function () { oeffne(treffer.id, true); }, 100);
  }
})();
