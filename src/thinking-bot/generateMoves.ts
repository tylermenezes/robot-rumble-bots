import { Direction, ActionType } from '../types';
import { cartesianProduct } from '../util/math';
import MoveOption from './MoveOption';

export default function generateMoves(): MoveOption[] {
  const directions: Direction[] = [
    Direction.North,
    Direction.East,
    Direction.South,
    Direction.West
  ];

  const actions: ActionType[] = [
    ActionType.Attack,
    ActionType.Move,
  ];

  return cartesianProduct<Direction, ActionType>(directions, actions)
    .map(([direction, action]) => ({ direction, action }));
}
