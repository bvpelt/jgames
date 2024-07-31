import { Player } from './player';

export class Game {
    width: number = 0;
    height: number = 0;
    groundMargin: number = 40;
    speed: number = 0; // pixels per frame
    maxSpeed: number = 4;
    //            this.background = new Background(this);
    player: Player;
    //            this.input = new InputHandler(this);
    //            this.UI = new UI(this);
    enemies = [];
    particles = [];
    collisions = [];
    floatingMessages = [];
    maxParticles: number = 100;
    enemyTimer: number = 0;
    enemyInterval: number = 1000; // milliseconds
    debug: boolean = false;
    score: number = 0;
    winningScore: number = 40;
    fontColor: string = 'black';
    time: number = 0;
    maxTime: number = 30000;
    gameOver: boolean = false;
    lives: number = 5;
    context: HTMLCanvasElement;
    //            this.player.currentState = this.player.states[0];
    //            this.player.currentState.enter();

    constructor(width: number, height: number, context: HTMLCanvasElement) {
        this.width = width;
        this.height = height;
        this.context = context;
        this.player = new Player(this, this.context);
    }

    update(deltaTime: number) {
        this.player.update(deltaTime);
    }

    draw() {
        this.player.draw()

    }
}