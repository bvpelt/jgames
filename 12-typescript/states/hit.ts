import { Game } from '../game';
import { State, States } from './state';
import { ARROW_DOWN, ARROW_UP, ARROW_LEFT, ARROW_RIGHT, ENTER } from '../inputhandler';

export class Hit extends State {
    constructor(game: Game) {
        super('HIT', game);
    }

    enter(): void {
        this.game.player.frameX = 0;
        this.game.player.maxFrame = 10;
        this.game.player.frameY = 4;        
    }

    handleInput(input: string) {    
        if (this.game.player.frameX >= this.game.player.maxFrame && this.game.player.onGround()) {
            this.game.player.setState(States.RUNNING, 1);           
        } else if (this.game.player.frameX >= this.game.player.maxFrame && !this.game.player.onGround()) {
            this.game.player.setState(States.FALLING, 1);
        }
    }
}