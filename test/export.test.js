import { test } from "node:test";
import assert from "node:assert/strict";
import { exportRows } from "../src/export.js";

test("exports id and amount only", () => {
  assert.deepEqual(exportRows([{ id: 1, amount: 5, secret: "x" }]), [{ id: 1, amount: 5 }]);
});

import { allow } from "../src/export.js";

test("blocks the eleventh export in a minute", () => {
  for (let i = 0; i < 10; i++) assert.equal(allow("c1", 1000 + i), true);
  assert.equal(allow("c1", 2000), false);
});
