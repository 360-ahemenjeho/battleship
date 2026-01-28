/** @typedef {import("./global.d.js").Ship} ShipProps */
/** @typedef {import("./global.d.js").Board} BoardProps */
/** @typedef {import("./global.d.js").Cell} Cell */

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
  /** @type {ShipProps["orientation"]} */
  orientation = "landscape";
  /** @type {ShipProps["anchor"]} */
  anchor = { x: 0, y: 0 };

  /**
   * @param {ShipProps} props - ShipProps.
   */
  constructor(props) {
    const {
      length,
      type,
      orientation = "landscape",
      anchor = { x: 0, y: 0 },
    } = props;
    this.length = length;
    this.type = type;
    this.orientation = orientation;
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

    /**@type Cell */
    const initialGrid = {
      ship: null,
      hit: false,
      coords: { x: 0, y: 0 },
      miss: false,
    };

    this.grid = Array.from({ length: size }, () =>
      new Array(size).fill(initialGrid),
    );
  }
}
