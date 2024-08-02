import { Game } from '../game';
import { State, States } from './state';
import { ARROW_DOWN, ARROW_UP, ARROW_LEFT, ARROW_RIGHT, ENTER } from '../inputhandler';

export class Falling extends State {

    constructor(game: Game) {
        super('FALLING', game);
    }
    
    enter(): void {
        this.game.player.frameX = 0;
        this.game.player.maxFrame = 6;
        this.game.player.frameY = 2;
    }

    handleInput(input: string): void {
        if (this.game.player.onGround()) {
            this.game.player.setState(States.RUNNING, 1);
        } else if (input.includes(ARROW_DOWN)) {
            this.game.player.setState(States.DIVING, 0);
        }
    }
}