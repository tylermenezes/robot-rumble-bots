import { Obj, ObjType, ActionType, Coords } from '../types';
import MoveOption from './MoveOption';
import TurnInfo from './TurnInfo';
import directionToCoord from './directionToCoord';

// TODO Remove before release, rumblebot is broken
function myCoordsToRealCoords(coords: Coords): Coords {
  return new Coords(coords.y, coords.x);
}

export default function resolveAttackTarget(option: MoveOption, turnInfo: TurnInfo): Obj | null {
  if (option.action !== ActionType.Attack) return null;
  const attackedCoord = turnInfo.me.coords.add(directionToCoord(option.direction));
  const attackedObj = turnInfo.state.objByCoords(myCoordsToRealCoords(attackedCoord)) || null;

  console.log(turnInfo.me.coords, '+', option.direction, '=', attackedCoord);

  if (attackedObj && attackedObj.objType === ObjType.Terrain) return null;
  return attackedObj;
}
