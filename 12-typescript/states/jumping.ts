import { Game } from '../game';
import { States, State } from './state';
import { ARROW_DOWN, ARROW_UP, ARROW_LEFT, ARROW_RIGHT, ENTER } from '../inputhandler';

export class Jumping extends State {
    

    constructor(game: Game) {
        super('RUNNING', game);
    }

    enter() {
        if (this.game.player.onGround()) this.game.player.vy -= 30;
        this.game.player.frameX = 0;
        this.game.player.maxFrame = 6;
        this.game.player.frameY = 1;
    }

    handleInput(input: string) {
        if (this.game.player.vy > this.game.player.weight) {
            this.game.player.setState(States.FALLING, 1);
        } else if (input.includes(ENTER)) {
            this.game.player.setState(States.ROLLING, 2);
        } else if (input.includes(ARROW_DOWN)) {
            this.game.player.setState(States.DIVING, 0);
        }
    }
}
