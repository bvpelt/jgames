import { Game } from '../game';
import { State, States } from './state';
import { ARROW_DOWN, ARROW_UP, ARROW_LEFT, ARROW_RIGHT, ENTER } from '../inputhandler';
import { Dust } from '../particles/dust';

export class Running extends State {

    constructor(game: Game) {
        super('RUNNING', game);
    }

    enter(): void {
        this.game.player.frameX = 0;
        this.game.player.maxFrame = 8;
        this.game.player.frameY = 3;
    }

    handleInput(input: string[]): void {
        this.game.particles.unshift(new Dust(this.game, this.game.player.x + this.game.player.width * 0.6, this.game.player.y + this.game.player.height));
        if (input.includes(ARROW_DOWN)) {
            this.game.player.setState(States.SITTING, 0);
        } else if (input.includes(ARROW_UP)) {
            this.game.player.setState(States.JUMPING, 1);
        } else if (input.includes(ENTER)) {
            this.game.player.setState(States.ROLLING, 2);
        }
    }
}