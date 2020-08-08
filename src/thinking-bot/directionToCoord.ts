import { Coords, Direction } from '../types';

export default function directionToCoord(direction: Direction): Coords {
  if (direction === Direction.North) return new Coords(0, -1);
  if (direction === Direction.South) return new Coords(0, 1);
  return direction.toCoords;
}
