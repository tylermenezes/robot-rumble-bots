import Team from './Team';
import Obj from './Obj';
import Coords from './Coords';

export default class State {
  turn: number;
  ourTeam: Team;
  otherTeam: Team;
  objById(id: string) { return new Obj(); }
  idsByTeam(team: Team): string[] { return []; }
  objsByTeam(team: Team): Obj[] { return []; }
  idByCoords(coords: Coords) { return ""; }
  objByCoords(coords: Coords) { return new Obj(); }
}
