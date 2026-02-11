/** @typedef {import("./global.d.js").Ship} ShipProps */
/** @typedef {import("./global.d.js").Board} BoardProps */
/** @typedef {import("./global.d.js").Coords} CoordProps */
/** @typedef {import("./global.d.js").Cell} CellProps */

const DIRECTION = {
  right: { x: 1, y: 0 },
  left: { x: -1, y: 0 },
  top: { x: 0, y: -1 },
  bottom: { x: 0, y: 1 },
};

/**
 * This class represent a Ship in the battle.
 */
export class Ship {
  /** @type {ShipProps["length"]} */
  length = 0;
  /** @type {ShipProps["hits"]} */
  hits = 0;
  /** @type {ShipProps["type"]} */
  type = "carrier";
  /** @type {ShipProps["direction"]} */
  direction = "left";
  /** @type {ShipProps["anchor"]} */
  anchor = { x: 0, y: 0 };

  /**
   * @param {ShipProps} props - ShipProps.
   */
  constructor(props) {
    const { length, type, direction = "left", anchor = { x: 0, y: 0 } } = props;
    this.length = length;
    this.type = type;
    this.direction = direction;
    this.anchor = anchor;
  }

  hit() {
    this.hits++;
  }

  isSunk() {
    return this.hits === this.length;
  }
}

/**
 * This class represent a Ship in the battle.
 */
export class Board {
  /** @type {BoardProps["grid"]} */
  grid = [];
  /** @type {BoardProps["size"]} */
  size = 8;
  /** @type {BoardProps["hits"]} */
  hits = 0;
  /** @type {BoardProps["misses"]} */
  misses = 0;
  /** @type {BoardProps["sunk"]} */
  sunk = 0;
  /** @type {BoardProps["score"]} */
  score = 0;

  /**
   * @param {BoardProps["size"]} size - Size of board.
   */
  constructor(size) {
    this.size = size;

    this.grid = Array.from({ length: size }, (_, y) =>
      Array.from({ length: size }, (_, x) => ({
        ship: null,
        hit: false,
        miss: false,
        coords: { x, y },
      })),
    );
  }

  /**
   *
   * @param {CoordProps} coords - Coordinates to check.
   * @returns {boolean} Resolves `true` if is within bounds or `false` otherwise.
   */
  isWithinBounds(coords) {
    const { x, y } = coords;
    return x >= 0 && y >= 0 && x < this.size && y < this.size;
  }

  /**
   * Places a ship on the board
   * @param {ShipProps} ship - The ship to place
   * @returns {boolean} True if placement successful, false otherwise
   */
  placeShip(ship) {
    const { x, y } = ship.anchor;
    const delta = DIRECTION[ship.direction];

    for (let i = 0; i < ship.length; i++) {
      const posX = x + delta.x * i;
      const posY = y + delta.y * i;

      if (!this.isWithinBounds({ x: posX, y: posY })) return false;
      if (this.grid[posY][posX].ship !== null) return false;
      this.grid[posY][posX] = new Cell(ship);
    }
    return true;
  }
}

/**
 * This class represents a Cell on the gameboard.
 */
export class Cell {
  /** @type {boolean} */
  hit = false;
  /** @type {ShipProps | null} */
  ship = null;
  /** @type {CoordProps} */
  coords = { x: 0, y: 0 };
  /** @type {boolean} */
  miss = false;

  /**
   * @param {CellProps["ship"]} [ship] - The Ship to place on the Board.
   */
  constructor(ship) {
    this.ship = ship;
  }
}
