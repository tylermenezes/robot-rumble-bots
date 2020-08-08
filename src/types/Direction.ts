import Coords from './Coords';

export default class Direction {
  static North: Direction;
  static South: Direction;
  static East: Direction;
  static West: Direction;
  opposite: Direction;
  rotateCw: Direction;
  rotateCcw: Direction;
  toCoords: Coords;
}
