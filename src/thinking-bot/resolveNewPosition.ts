import { ActionType, Coords } from '../types';
import MoveOption from './MoveOption';
import TurnInfo from './TurnInfo';
import directionToCoord from './directionToCoord';

export default function resolveNewPosition(option: MoveOption, turnInfo: TurnInfo): Coords {
  if (option.action === ActionType.Attack) return turnInfo.me.coords;

  const potentialNewPosition = turnInfo.me.coords.add(directionToCoord(option.direction));

  if (turnInfo.intentRegistry.coordHasPlannedMovement(potentialNewPosition)) return turnInfo.me.coords;
  if (turnInfo.state.objByCoords(potentialNewPosition)) return turnInfo.me.coords;
  return potentialNewPosition;
}
