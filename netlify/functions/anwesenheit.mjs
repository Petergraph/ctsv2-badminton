/* Anwesenheitscheck für die Mannschaftsseite CTSV II.
 *
 * GET  /.netlify/functions/anwesenheit          -> alle Zusagen als JSON
 * POST /.netlify/functions/anwesenheit          -> eine Zusage setzen
 *      Body: { "datum": "2026-09-30", "name": "Jens", "status": "ja", "code": "..." }
 *
 * Gespeichert wird in Netlify Blobs, Store "anwesenheit", Schlüssel "saison".
 * Kein Konto, keine Anmeldung: wer den Link hat, kann klicken. Für sieben Leute
 * ist das gewollt. Wer es enger haben will, setzt in Netlify unter
 * Site configuration -> Environment variables die Variable TEAM_CODE — dann
 * fragt die Seite einmalig nach diesem Wort und merkt es sich im Browser.
 */

import { getStore } from "@netlify/blobs";

const KADER = ["Jens", "Hiep", "Robert", "Alex", "Nils", "Karo", "Cathy"];
const STATI = ["ja", "nein", "vielleicht", ""];
const DATUM = /^\d{4}-\d{2}-\d{2}$/;
const SCHLUESSEL = "saison";

const json = (daten, status = 200) =>
  new Response(JSON.stringify(daten), {
    status,
    headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" }
  });

const fehler = (text, status) => json({ fehler: text }, status);

export default async (req) => {
  const store = getStore("anwesenheit");

  if (req.method === "GET") {
    const daten = (await store.get(SCHLUESSEL, { type: "json" })) || {};
    return json(daten);
  }

  if (req.method !== "POST") {
    return fehler("Nur GET und POST", 405);
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return fehler("Kein gültiges JSON", 400);
  }

  const code = process.env.TEAM_CODE;
  if (code && body.code !== code) {
    return fehler("Falscher Mannschaftscode", 403);
  }
  if (!DATUM.test(String(body.datum || ""))) {
    return fehler("Datum fehlt oder hat das falsche Format", 400);
  }
  if (!KADER.includes(body.name)) {
    return fehler("Unbekannter Name", 400);
  }
  if (!STATI.includes(body.status)) {
    return fehler("Unbekannter Status", 400);
  }

  /* Lesen, ändern, schreiben. Bei sieben Leuten ist ein gleichzeitiger Klick
     so unwahrscheinlich, dass eine Sperre den Aufwand nicht wert wäre. */
  const daten = (await store.get(SCHLUESSEL, { type: "json" })) || {};
  const tag = daten[body.datum] || { status: {} };
  tag.status = tag.status || {};
  tag.status[body.name] = body.status;
  tag.geaendert = new Date().toISOString();
  daten[body.datum] = tag;

  await store.setJSON(SCHLUESSEL, daten);
  return json(daten);
};

export const config = { path: "/api/anwesenheit" };
