import test from "node:test";
import assert from "node:assert/strict";
import { Board, Ship } from "../src/helpers.js";

test("Board", () => {
  const board = new Board(8);
  assert.strictEqual(board.size, 8);
});

test("Place ship on the board", () => {
  const ship = new Ship({
    direction: "right",
    anchor: { x: 0, y: 0 },
    length: 5,
    type: "cruiser",
  });

  const board = new Board(8);
  board.placeShip(ship);
  const grid = board.grid;
  console.log("Board Grid");
  console.log(grid);

  console.log("First grid ");
  console.log(grid?.[0]?.[1]?.ship?.type);

  assert.deepStrictEqual(grid?.[0]?.[0].ship.type, "cruiser");
  assert.deepStrictEqual(grid?.[0]?.[1].ship.type, "cruiser");
  assert.deepStrictEqual(grid?.[0]?.[2].ship.type, "cruiser");
  assert.deepStrictEqual(grid?.[0]?.[3].ship.type, "cruiser");
  assert.deepStrictEqual(grid?.[0]?.[4].ship.type, "cruiser");
});
