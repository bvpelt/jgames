import { PRESS_LEFT, PRESS_RIGHT, PRESS_DOWN, PRESS_UP } from './input.js';
import Player from './player.js';

export const states = {
    STANDING_LEFT: 0,
    STANDING_RIGHT: 1,
    SITTING_LEFT: 2,
    SITTING_RIGHT: 3
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
        } else if (input == PRESS_DOWN) this.player.setState(states.SITTING_LEFT);

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
        } else if (input == PRESS_DOWN) this.player.setState(states.SITTING_RIGHT);
    }
}

export class SittingLeft extends State {
    constructor(player) {
        super('SITTING LEFT');
        this.player = player;
    }

    enter() {
        this.player.frameY = 9;
    }

    handleInput(input) {
        if (input === PRESS_RIGHT) { // set state to SittingRight
            this.player.setState(states.SITTING_RIGHT);
        } else if (input === PRESS_UP) this.player.setState(states.STANDING_LEFT)
    }
}

export class SittingRight extends State {
    constructor(player) {
        super('SITTING RIGHT');
        this.player = player;
    }

    enter() {
        this.player.frameY = 8;
    }

    handleInput(input) {
        if (input === PRESS_LEFT) { // set state to SittingLeft
            this.player.setState(states.SITTING_LEFT);
        } else if (input === PRESS_UP) this.player.setState(states.STANDING_RIGHT)
    }
}