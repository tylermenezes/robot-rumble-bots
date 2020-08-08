import { ActionType } from '../types';
import MoveOption from './MoveOption';
import MoveOptionWithScore from './MoveOptionWithScore';
import TurnInfo from './TurnInfo';
import resolveNewPosition from './resolveNewPosition';
import resolveAttackTarget from './resolveAttackTarget';

function getScore(option: MoveOption, turnInfo: TurnInfo): number {
  const newPosition = resolveNewPosition(option, turnInfo);
  const attackTarget = resolveAttackTarget(option, turnInfo);

  let attackTargetWeight = 1;
  if (attackTarget) attackTargetWeight = attackTarget.team === turnInfo.state.ourTeam ? 0 : 2;

  return (newPosition.x + newPosition.y) * attackTargetWeight;
}

export default function scoreMove(option: MoveOption, turnInfo: TurnInfo): MoveOptionWithScore {
  return {
    score: getScore(option, turnInfo),
    moveOption: option,
  };
}
