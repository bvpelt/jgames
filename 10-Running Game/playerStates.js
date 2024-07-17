import { ARROW_DOWN, ARROW_UP,ARROW_LEFT, ARROW_RIGHT, ENTER} from './input.js';

const states = {
    SITTING: 0,
    RUNNING: 1,
    JUMPING: 2,
    FALLING: 3
};

class State {
    constructor(state) {
        this.state = state;

    }
}


export class Sitting extends State {
    constructor(player) {
        super('SITTING');
        this.player = player;

    }

    enter() {
        this.player.frameY = 5;
    }

    handleInput(input) {
        if (input.includes(ARROW_LEFT) || input.includes(ARROW_RIGHT)) {
            this.player.setState(states.RUNNING);
        }
    }
}

export class Running extends State {
    constructor(player) {
        super('RUNNING');
        this.player = player;

    }

    enter() {
        this.player.frameY = 3;
    }

    handleInput(input) {
        if (input.includes(ARROW_DOWN)) {
            this.player.setState(states.SITTING);
        }
        if (input.includes(ARROW_UP)) {
            this.player.setState(states.JUMPING);
        }
    }
}

export class Jumping extends State {
    constructor(player) {
        super('JUMPING');
        this.player = player;

    }

    enter() {
        if (this.player.onGround()) this.player.vy -= 30;
        this.player.frameY = 1;
    }

    handleInput(input) {
        if (this.player.vy > this.player.weight) {
            this.player.setState(states.FALLING);
        }
    }
}

export class Falling extends State {
    constructor(player) {
        super('FALLING');
        this.player = player;

    }

    enter() {
        if (this.player.onGround()) this.player.vy -= 30;
        this.player.frameY = 2;
    }

    handleInput(input) {
        if (this.player.onGround) {
            this.player.setState(states.RUNNING);
        }
    }
}