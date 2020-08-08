import ObjType from './ObjType';
import Coords from './Coords';
import Team from './Team';

export default class Obj {
  id: string;
  objType: ObjType;
  coords: Coords;
  team: Team;
  health: number;
}
