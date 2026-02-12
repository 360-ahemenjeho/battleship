import test from "node:test";
import assert from "node:assert/strict";
import { Board, Player, Ship } from "../src/helpers.js";

test("Player", () => {
  const ship1 = new Ship({
    direction: "right",
    anchor: { x: 0, y: 0 },
    length: 5,
    type: "cruiser",
  });

  const board = new Board(8);
  board.placeShip(ship1);

  const player1 = new Player({
    name: "Ahemen Jeho",
    type: "real",
    board,
    ships: [ship1],
  });
  assert.strictEqual(player1.name, "Ahemen Jeho");
  assert.strictEqual(player1.type, "real");
  assert.strictEqual(player1.board.grid[0][0].ship.type, "cruiser");
});
