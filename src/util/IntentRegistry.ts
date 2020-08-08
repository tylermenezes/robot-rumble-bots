import { Obj, Coords, Direction, Action } from '../types';

export interface Command {
  robot: Obj,
  coords: Coords,
  action: Action,
}

export default class IntentRegistry {
  private commands: Command[] = [];

  register(robot: Obj, action: Action, coordsOrDirection: Coords | Direction): void {
    const coords = (coordsOrDirection instanceof Coords)
      ? coordsOrDirection
      : robot.coords.add(<Direction>coordsOrDirection);

    this.commands.unshift({
      robot,
      action,
      coords,
    });
  }

  commandForCoords(coords: Coords): Command | undefined {
    return this.commands
      .filter((c) => c.coords.toString() === coords.toString())[0];
  }

  commandForRobot(robot: Obj): Command | undefined {
    return this.commands
      .filter((c) => c.robot.id === robot.id)[0];
  }

  coordHasPlannedMovement(coords: Coords): boolean {
    return !(typeof this.commandForCoords(coords) === 'undefined');
  }
}
