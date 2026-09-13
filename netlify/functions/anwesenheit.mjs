/* Anwesenheitscheck für die Mannschaftsseite CTSV II.
 *
 * GET  /api/anwesenheit   -> alle Zusagen als JSON
 * POST /api/anwesenheit   -> Zusagen eines Spieltags setzen
 *      Body: { "datum": "2026-09-30",
 *              "status": { "Jens": "ja", "Karo": "vielleicht", ... },
 *              "code": "..." }
 *
 * Der Client schickt bewusst den KOMPLETTEN Stand des jeweiligen Spieltags,
 * nicht nur den einen geänderten Namen. Grund: Falls ein Schreibvorgang
 * verloren geht, repariert der nächste Klick den Stand von selbst.
 *
 * Gespeichert wird in Netlify Blobs, Store "anwesenheit", Schlüssel "saison".
 *
 * WICHTIG: consistency "strong". Der Standard von Netlify Blobs ist "eventual" —
 * ein Lesevorgang direkt nach dem Schreiben kann dann bis zu 60 Sekunden lang
 * eine veraltete Fassung liefern. Weil jeder Aufruf hier liest, ändert und
 * zurückschreibt, hat das reihenweise frisch gesetzte Zusagen wieder gelöscht.
 *
 * Kein Konto, keine Anmeldung: wer den Link hat, kann klicken. Für sieben Leute
 * ist das gewollt. Wer es enger haben will, setzt in Netlify unter
 * Site configuration -> Environment variables die Variable TEAM_CODE — dann
 * fragt die Seite einmalig nach diesem Wort und merkt es sich im Browser.
 */

import { getStore } from "@netlify/blobs";

/* Namen werden nur auf eine harmlose Form geprüft, nicht gegen eine feste Liste:
   Einspringer kommen im Laufe der Saison dazu, und die Seite zeigt ohnehin nur
   Namen an, die in data/kader.js stehen. */
const NAME = /^\p{L}[\p{L}\p{M} .'\-]{0,29}$/u;
const STATI = ["ja", "nein", "vielleicht", ""];
const DATUM = /^\d{4}-\d{2}-\d{2}$/;
const SCHLUESSEL = "saison";
const MAX_NAMEN = 40;

const json = (daten, status = 200) =>
  new Response(JSON.stringify(daten), {
    status,
    headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" }
  });

const fehler = (text, status) => json({ fehler: text }, status);

export default async (req) => {
  const store = getStore({ name: "anwesenheit", consistency: "strong" });

  if (req.method === "GET") {
    const daten = (await store.get(SCHLUESSEL, { type: "json" })) || {};
    return json(daten);
  }

  if (req.method !== "POST") return fehler("Nur GET und POST", 405);

  let body;
  try {
    body = await req.json();
  } catch {
    return fehler("Kein gültiges JSON", 400);
  }

  const code = process.env.TEAM_CODE;
  if (code && body.code !== code) return fehler("Falscher Mannschaftscode", 403);
  if (!DATUM.test(String(body.datum || ""))) {
    return fehler("Datum fehlt oder hat das falsche Format", 400);
  }

  /* Eingehende Zusagen prüfen. Ältere Fassungen der Seite schickten einen
     einzelnen Namen — das wird weiterhin angenommen. */
  const eingang =
    body.status && typeof body.status === "object"
      ? body.status
      : body.name !== undefined
        ? { [body.name]: body.status }
        : null;

  if (!eingang) return fehler("Keine Zusagen übermittelt", 400);

  const namen = Object.keys(eingang);
  if (namen.length === 0 || namen.length > MAX_NAMEN) {
    return fehler("Unzulässige Anzahl Namen", 400);
  }
  const sauber = {};
  for (const name of namen) {
    if (!NAME.test(name)) return fehler(`Name nicht zulässig: ${name}`, 400);
    const wert = eingang[name];
    if (!STATI.includes(wert)) return fehler(`Unbekannter Status für ${name}`, 400);
    sauber[name] = wert;
  }

  const daten = (await store.get(SCHLUESSEL, { type: "json" })) || {};
  const tag = daten[body.datum] || {};
  tag.status = Object.assign({}, tag.status, sauber);
  tag.geaendert = new Date().toISOString();
  daten[body.datum] = tag;

  await store.setJSON(SCHLUESSEL, daten);
  return json(daten);
};

export const config = { path: "/api/anwesenheit" };
