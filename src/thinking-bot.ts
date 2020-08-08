import { Action, ActionType, State, Obj } from './types';
import IntentRegistry from './util/IntentRegistry';
import { generateMoves, scoreMove, TurnInfo, resolveNewPosition, resolveAttackTarget } from './thinking-bot/index';

let intents: IntentRegistry;
function initTurn(state: State): void {
  intents = new IntentRegistry();
}

function robot(state: State, unit: Obj): ActionType | null {
  const turnInfo: TurnInfo = { me: unit, state, intentRegistry: intents };

  const moves = generateMoves()
    .map((move) => scoreMove(move, turnInfo))
    .sort((a, b) => b.score - a.score);
  const move = moves[0];

  debug.log('moves considered', moves.length);
  debug.log('winning score', move.score);
  debug.log('winning move', JSON.stringify(move.moveOption));
  debug.log('expected target', resolveAttackTarget(move.moveOption, turnInfo));
  debug.log('expected position', resolveNewPosition(move.moveOption, turnInfo));

  if (typeof move !== 'undefined') {
    return new Action(move.moveOption.action, move.moveOption.direction);
  }

  return null;
}
