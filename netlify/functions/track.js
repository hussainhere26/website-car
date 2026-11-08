import { getStore } from "@netlify/blobs";
const s = (v, n = 80) => String(v == null ? "" : v).slice(0, n);
const inc = (o, k) => { if (!k) return; k = s(k); o[k] = (o[k] || 0) + 1; };

export default async (req, context) => {
  if (req.method !== "POST") return new Response("ok");
  let e;
  try { e = JSON.parse(await req.text()); } catch { return new Response("bad", { status: 400 }); }
  if (!["view", "product", "click"].includes(e.type)) return new Response("bad", { status: 400 });

  const store = getStore("analytics");
  const key = "day-" + new Date().toISOString().slice(0, 10);
  const d = (await store.get(key, { type: "json" })) ||
    { views: 0, visitors: {}, products: {}, clicks: {}, countries: {}, devices: {}, referrers: {} };
  const country = s(context?.geo?.country?.name || "Unknown");
  const vid = s(e.vid, 20);

  if (e.type === "view") {
    d.views++; d.visitors[vid] = 1;
    inc(d.countries, country); inc(d.devices, e.device); inc(d.referrers, e.ref || "Direct");
  } else if (e.type === "product") {
    inc(d.products, s(e.pid, 5) + "|" + s(e.title));
  } else {
    inc(d.clicks, e.what);
  }
  await store.setJSON(key, d);

  const recent = (await store.get("recent", { type: "json" })) || [];
  recent.unshift({ t: Date.now(), type: e.type, country, device: s(e.device, 10), detail: s(e.title || e.what || e.ref), v: vid.slice(0, 5) });
  await store.setJSON("recent", recent.slice(0, 60));
  return new Response("ok");
};
