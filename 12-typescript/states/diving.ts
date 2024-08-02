import { Game } from '../game';
import { State, States } from './state';
import { ARROW_DOWN, ARROW_UP, ARROW_LEFT, ARROW_RIGHT, ENTER } from '../inputhandler';
import { Fire } from '../particles/fire';
import { Splash } from '../particles/splash';

export class Diving extends State {
    constructor(game: Game) {
        super('DIVING', game);
    }

    enter(): void {
        this.game.player.frameX = 0;
        this.game.player.maxFrame = 6;
        this.game.player.frameY = 6;
        this.game.player.vy = 15;
    }

    handleInput(input: string): void {
        this.game.particles.unshift(new Fire(this.game, this.game.player.x + this.game.player.width * 0.5, this.game.player.y + this.game.player.height * 0.5));

        if (this.game.player.onGround()) {
            this.game.player.setState(States.RUNNING, 1);
            for (let i = 0; i < 30; i++) {
                this.game.particles.unshift(new Splash(this.game, this.game.player.x + this.game.player.width * 0.5, this.game.player.y + this.game.player.height));
            }
        } else if (input.includes(ENTER) && this.game.player.onGround()) {
            this.game.player.setState(States.ROLLING, 2);
        }
    }
}