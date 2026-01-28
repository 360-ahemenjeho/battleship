import test from "node:test";
import assert from "node:assert/strict";
import { Board } from "../src/helpers.js";

test("Board", () => {
  const board = new Board(8);
  assert.strictEqual(board.size, 8);
});

test("Board grid", () => {
  const board = new Board(8);
  console.log("board grid ", board.grid);
  assert.deepStrictEqual(
    board.grid,
    Array.from({ length: 8 }, () =>
      new Array(8).fill({
        ship: null,
        hit: false,
        coords: { x: 0, y: 0 },
        miss: false,
      }),
    ),
  );
});
