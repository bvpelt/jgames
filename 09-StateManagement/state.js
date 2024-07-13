import { KEY_DOWN, KEY_UP, ARROW_LEFT, ARROW_RIGHT, PRESS_LEFT, PRESS_RIGHT, RELEASE_LEFT, RELEASE_RIGHT } from './input.js';
import Player from './player.js';

export const states = {
    STANDING_LEFT: 0,
    STANDING_RIGHT: 1,
};

class State {
    constructor(state) {
        this.state = state;
    }
}

export class StandingLeft extends State {
    constructor(player) {
        super('STANDING LEFT');
        this.player = player;
    }

    enter() {
        this.player.frameY = 1;
    }

    handleInput(input) {
        if (input === PRESS_RIGHT) { // set state to StandingRight
            this.player.setState(states.STANDING_RIGHT);
        }

    }
}

export class StandingRight extends State {
    constructor(player) {
        super('STANDING RIGHT');
        this.player = player;
    }

    enter() {
        this.player.frameY = 0;
    }

    handleInput(input) {        
        if (input === PRESS_LEFT) { // set state to StandingLeft
            this.player.setState(states.STANDING_LEFT);
        }
    }
}