// A toy export endpoint handler, for the demo only.
export function exportRows(rows) {
  return rows.map((r) => ({ id: r.id, amount: r.amount }));
}
