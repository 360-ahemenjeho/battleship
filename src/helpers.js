/** @typedef {import("./global.d.js").Ship} Props */

/**
 * This class represent a Ship in the battle.
 */
export class Ship {
  /** @type {Props["length"]} */
  length = 0;
  /** @type {Props["hits"]} */
  hits = 0;
  /** @type {Props["type"]} */
  type = "carrier";
  /** @type {Props["orientation"]} */
  orientation = "landscape";
  /** @type {Props["start"]} */
  start = { x: 0, y: 0 };
  /** @type {Props["end"]} */
  end = { x: 0, y: 0 };

  /**
   * @param {Props} props - Props.
   */
  constructor(props) {
    const {
      length,
      type,
      orientation = "landscape",
      start = { x: 0, y: 0 },
      end = { x: 0, y: 0 },
    } = props;
    this.length = length;
    this.type = type;
    this.orientation = orientation;
    this.start = start;
    this.end = end;
  }

  hit() {
    this.hits++;
  }

  isSunk() {
    return this.hits === this.length;
  }
}
