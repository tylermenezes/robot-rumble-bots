import Obj from './Obj';

export { default as Action } from './Action';
export { default as ActionType } from './ActionType';
export { default as Coords } from './Coords';
export { default as Direction } from './Direction';
export { default as ObjType } from './ObjType';
export { default as State } from './State';
export { default as Team } from './Team';
export { Obj };
export default {};

interface Debug {
  log(key: string, val: any): void;
  inspect(unit: Obj): void;
}

declare global {
  const MAP_SIZE: number;
  const debug: Debug;
}
