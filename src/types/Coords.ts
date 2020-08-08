import Direction from './Direction';

export default class Coords {
  constructor(x: number, y: number) {}
  x: number;
  y: number;
  distanceTo(other: Coords) { return 0; }
  walkingDistanceTo(other: Coords) { return 0; }
  directionTo(other: Coords) { return new Direction(); }
  add(other: Coords | Direction) { return new Coords(0, 0); }
  sub(other: Coords | Direction) { return new Coords(0, 0); }
  mul(other: Coords | Direction) { return new Coords(0, 0); }
}
