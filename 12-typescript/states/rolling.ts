import { Game } from '../game';
import { State, States } from './state';
import { ARROW_DOWN, ARROW_UP, ARROW_LEFT, ARROW_RIGHT, ENTER } from '../inputhandler';
import { Fire } from '../particles/fire';

export class Rolling extends State {
    constructor(game: Game) {
        super('ROLLING', game);
    }
       
    enter(): void {
        this.game.player.frameX = 0;
        this.game.player.maxFrame = 6;
        this.game.player.frameY = 6;
    }

    handleInput(input: string) {
        this.game.particles.unshift(new Fire(this.game, this.game.player.x + this.game.player.width * 0.5, this.game.player.y + this.game.player.height * 0.5));

        if (!input.includes(ENTER) && this.game.player.onGround()) {
            this.game.player.setState(States.RUNNING, 1);
        } else if (!input.includes(ENTER) && !this.game.player.onGround()) {
            this.game.player.setState(States.FALLING, 1);
        } else if (input.includes(ENTER) && input.includes(ARROW_UP) && this.game.player.onGround()) {
            this.game.player.vy -= 27;
        } else if (input.includes(ARROW_DOWN) && !this.game.player.onGround()) {
            this.game.player.setState(States.DIVING, 0);
        }
    }
}
