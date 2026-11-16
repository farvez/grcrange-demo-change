import { test } from "node:test";
import assert from "node:assert/strict";
import { exportRows } from "../src/export.js";

test("exports id and amount only", () => {
  assert.deepEqual(exportRows([{ id: 1, amount: 5, secret: "x" }]), [{ id: 1, amount: 5 }]);
});
