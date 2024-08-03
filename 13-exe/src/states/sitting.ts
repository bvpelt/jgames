import { Game } from '../game';
import { State, States } from './state';
import { ARROW_DOWN, ARROW_UP, ARROW_LEFT, ARROW_RIGHT, ENTER } from '../inputhandler';

export class Sitting extends State {

    constructor(game: Game) {
        super('SITTING', game);
    }

    enter(): void {
        this.game.player.frameX = 0;
        this.game.player.maxFrame = 4;
        this.game.player.frameY = 5;
    }

    handleInput(input: string[]) {
        if (input.includes(ARROW_LEFT) || input.includes(ARROW_RIGHT)) {
            this.game.player.setState(States.RUNNING, 1);
        } else if (input.includes(ENTER)) {
            this.game.player.setState(States.ROLLING, 2);
        }
    }
}