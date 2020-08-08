import { Direction, ActionType } from '../types';

export default interface MoveOption {
  direction: Direction;
  action: ActionType;
}
