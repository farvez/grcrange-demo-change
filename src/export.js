// A toy export endpoint handler, for the demo only.
const LIMIT = 10; // exports per client per minute
const seen = new Map();

export function allow(clientId, now = Date.now()) {
  const recent = (seen.get(clientId) || []).filter((t) => now - t < 60_000);
  if (recent.length >= LIMIT) return false;
  seen.set(clientId, [...recent, now]);
  return true;
}

export function exportRows(rows) {
  return rows.map((r) => ({ id: r.id, amount: r.amount }));
}
