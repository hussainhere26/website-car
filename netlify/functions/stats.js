import { getStore } from "@netlify/blobs";

export default async (req) => {
  const pw = process.env.ADMIN_PASSWORD;
  if (!pw || req.headers.get("x-admin-key") !== pw)
    return new Response("Unauthorized", { status: 401 });

  const store = getStore("analytics");
  const dates = [...Array(30)].map((_, i) => new Date(Date.now() - i * 864e5).toISOString().slice(0, 10));
  const raw = await Promise.all(dates.map((d) => store.get("day-" + d, { type: "json" })));
  const all = new Set();
  const days = dates.map((date, i) => {
    const d = raw[i] || {};
    Object.keys(d.visitors || {}).forEach((v) => all.add(v));
    return { date, views: d.views || 0, visitors: Object.keys(d.visitors || {}).length,
      products: d.products || {}, clicks: d.clicks || {}, countries: d.countries || {},
      devices: d.devices || {}, referrers: d.referrers || {} };
  });
  const recent = (await store.get("recent", { type: "json" })) || [];
  return Response.json({ days, uniqueTotal: all.size, recent });
};
