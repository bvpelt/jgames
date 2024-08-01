import { Game } from './game';
import { ARROW_DOWN, ARROW_UP, ARROW_LEFT, ARROW_RIGHT, ENTER } from './input';
import { State, States} from './state';
import { Sitting } from './Sitting';

export class Player {
    game: Game;
    width: number = 100;
    height: number = 91.3;
    x: number = 0;
    y: number = 0;
    vy: number = 0;
    weight: number = 1;
    image: HTMLElement;// alternative use player from the id in index.html
    frameX: number = 0;
    frameY: number = 0;
    maxFrame: number = 5;
    fps: number = 20; //framse per second
    frameInterval: number = 1000 / this.fps;
    frameTimer: number = 0;
    speed: number = 0;
    maxSpeed: number = 10; // pixels / frame
    context: any;
    currentState: Sitting;
    states[]: [Sitting];
    // The order of the states follows the declaration of stats enum from playerStates.js
    
    constructor(game: Game, context: any) {
        this.game = game;
        this.y = this.game.height - this.height - this.game.groundMargin;
        this.context = context;
        this.image = document.getElementById('player')!;
        this.states = [new Sitting(this.game), new Sitting(this.game),new Sitting(this.game),new Sitting(this.game),new Sitting(this.game),new Sitting(this.game),new Sitting(this.game) ]; //, new Running(this.game), new Jumping(this.game),
    //new Falling(this.game), new Rolling(this.game), new Diving(this.game), new Hit(this.game)];
        this.currentState = this.states[0];
        console.log(this.image);
    }

    draw() {
        if (this.game.debug) {
            this.context.strokeRect(this.x, this.y, this.width, this.height);
        }
        this.context.drawImage(this.image, this.frameX * this.width, this.frameY * this.height, this.width, this.height, this.x, this.y, this.width, this.height);
    }

    update(deltaTime: number) {
        this.x += 1;
    }

    setState(state:States, speed: number) {
        this.currentState = this.states[state];
        this.game.speed = this.game.maxSpeed * speed;
        this.currentState.enter();
    }
}