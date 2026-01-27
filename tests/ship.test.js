import test from "node:test";
import assert from "node:assert/strict";
import { Ship } from "../src/helpers.js";

test("Ship type", () => {
  const carrier = new Ship({ length: 5, type: "carrier" });
  assert.strictEqual(carrier.type, "carrier");
});

test("Ship length", () => {
  const carrier = new Ship({ length: 5, type: "carrier" });
  assert.strictEqual(carrier.length, 5);
});

test("Ship hit", () => {
  const carrier = new Ship({ length: 5, type: "carrier" });
  carrier.hit();
  assert.strictEqual(carrier.hits, 1);
});

test("Ship sunk", () => {
  const carrier = new Ship({ length: 5, type: "carrier" });
  carrier.hit();
  carrier.hit();
  carrier.hit();
  carrier.hit();
  carrier.hit();
  assert.strictEqual(carrier.isSunk(), true);
});

test("Ship orientation", () => {
  const carrier = new Ship({
    length: 5,
    type: "carrier",
    orientation: "portrait",
  });
  assert.strictEqual(carrier.orientation, "portrait");
});

test("Ship orientation default", () => {
  const carrier = new Ship({ length: 5, type: "carrier" });
  assert.strictEqual(carrier.orientation, "landscape");
});
