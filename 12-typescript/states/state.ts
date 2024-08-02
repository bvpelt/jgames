import { Game } from '../game';

export enum States {
    SITTING = 0,
    RUNNING = 1,
    JUMPING = 2,
    FALLING = 3,
    ROLLING = 4,
    DIVING = 5,
    HIT = 6
}

export class State {
    state: string;
    game: Game;

    constructor(state: string, game: Game) {
        this.state = state;
        this.game = game;
    }

    enter(): void {

    };

    handleInput(input: string[]): void {

    };
}
