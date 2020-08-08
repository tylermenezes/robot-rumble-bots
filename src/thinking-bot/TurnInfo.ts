import { State, Obj } from '../types';
import IntentRegistry from '../util/IntentRegistry';

export default interface TurnInfo {
  me: Obj;
  state: State;
  intentRegistry: IntentRegistry;
}
