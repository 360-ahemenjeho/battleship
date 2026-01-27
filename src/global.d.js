/**
 * @typedef {Object} Coords - The Coords of a point.
 * @property {number} x - Horizontal axis.
 * @property {number} y - Vertical axis.
 */

/**
 * @typedef {Object} Ship - This are ship properties.
 * @property {number} length - The size of the ship.
 * @property {"carrier" | "battleship" | "cruiser" | "submarine" | "destroyer"} type - The name label of the Ship
 * @property {"landscape" | "portrait"} [orientation="landscape"] - The orientation of the ship.
 * @property {number} [hits=0] - The number of hits on the ship.
 * @property {Coords} [start={x: 0, y: 0}] - The starting point of the ship.
 * @property {Coords} [end={x: 0, y: 0}] - The ending point of the ship.
 */

export {};
