/**
 * @typedef {Object} Coords - The Coords of a point.
 * @property {number} x - Horizontal axis.
 * @property {number} y - Vertical axis.
 */

/**
 * @typedef {Object} Ship - This are ship properties.
 * @property {number} length - The size of the ship.
 * @property {"carrier" | "battleship" | "cruiser" | "submarine" | "destroyer"} type - The name label of the Ship
 * @property {"up" | "down" | "left" | "right"} [direction="left"] - The direction of the ship.
 * @property {number} [hits=0] - The number of hits on the ship.
 * @property {Coords} [anchor={x: 0, y: 0}] - The starting point of the ship.
 */

/**
 * @typedef {Object} Cell - This are cell properties.
 * @property {boolean} [hit=false] - The status of the cell.
 * @property {Ship | null} [ship=null] - The ship that occupies the cell.
 * @property {Coords} [coords={x: 0, y: 0}] - The coordinates of the cell.
 * @property {boolean} [miss=false] - The status of the cell.
 */

/**
 * @typedef {Object} Board - This are board properties.
 * @property {Cell[][]} [grid=[]] - The grid of the board.
 * @property {number} size - The size of the board.
 * @property {number} [hits=0] - The number of hits on the board.
 * @property {number} [misses=0] - The number of misses on the board.
 * @property {number} [sunk=0] - The number of sunk ships on the board.
 * @property {number} [score=0] - The score of the board.
 *
 */

export {};
