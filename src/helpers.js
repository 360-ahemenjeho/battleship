/**
 * This class represent a Ship in the battle.
 */
export class Ship {
  length = 0;
  hits = 0;
  type = "";

  /**
   * @typedef {Object} Props - This are a ship properties.
   * @property {number} length - The size of the ship.
   * @property {"carrier" | "battleship" | "cruiser" | "submarine" | "destroyer"} type - The name label of the Ship
   * @param {Props} props - Props.
   */
  constructor(props) {
    const { length, type } = props;
    this.length = length;
    this.type = type;
  }

  hit() {
    this.hits++;
  }

  isSunk() {
    return this.hits === this.length;
  }
}
