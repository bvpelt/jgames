import { Game } from './game';

export enum States {
    SITTING = 0,
    RUNNING = 1,
    JUMPING = 2,
    FALLING = 3,
    ROLLING = 4,
    DIVING = 5,
    HIT = 6
}

export interface State {
    state: States;
    game: Game;

    enter(): void;

    handleInput(input:string): void;
}
