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

  assert.deepStrictEqual(grid?.[0]?.[0].ship.type, "cruiser");
  assert.deepStrictEqual(grid?.[0]?.[1].ship.type, "cruiser");
  assert.deepStrictEqual(grid?.[0]?.[2].ship.type, "cruiser");
  assert.deepStrictEqual(grid?.[0]?.[3].ship.type, "cruiser");
  assert.deepStrictEqual(grid?.[0]?.[4].ship.type, "cruiser");
});

test("Attack a cell: successful attack", () => {
  const ship = new Ship({
    direction: "right",
    anchor: { x: 0, y: 0 },
    length: 5,
    type: "cruiser",
  });

  const board = new Board(8);
  board.placeShip(ship);
  board.attack({ x: 0, y: 0 });

  const grid = board.grid;
  assert.strictEqual(grid?.[0]?.[0].hit, true);
  assert.strictEqual(grid?.[0]?.[0].miss, false);
  assert.strictEqual(grid?.[0]?.[0].ship.hits, 1);
});

test("Attack a cell: unsuccessful attack", () => {
  const ship = new Ship({
    direction: "right",
    anchor: { x: 0, y: 0 },
    length: 5,
    type: "cruiser",
  });

  const board = new Board(8);
  board.placeShip(ship);
  board.attack({ x: 0, y: 1 });

  const grid = board.grid;
  assert.strictEqual(grid?.[1]?.[0].hit, false);
  assert.strictEqual(grid?.[1]?.[0].miss, true);
});
