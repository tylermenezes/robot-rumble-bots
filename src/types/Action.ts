import Direction from './Direction';
import ActionType from './ActionType';

export default class Action {
  constructor(type: ActionType, direction: Direction) {}
  static move(direction: Direction) { return ActionType.Move; }
  static attack(direction: Direction) { return ActionType.Attack; }
}
