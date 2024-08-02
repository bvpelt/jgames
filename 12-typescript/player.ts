import { Game } from './game';
import { ARROW_DOWN, ARROW_UP, ARROW_LEFT, ARROW_RIGHT, ENTER } from './inputhandler';
import { State, States } from './states/state';
import { CollisionAnimation } from './collisionanimation';
import { FloatingMessage } from './floatingmessage';
import { Sitting } from './states/sitting';
import { Running } from './states/running';
import { Jumping } from './states/jumping';
import { Falling } from './states/falling';
import { Rolling } from './states/rolling';
import { Diving } from './states/diving';
import { Hit } from './states/hit';

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
    currentState: State;
    states: State[] = [];

    constructor(game: Game, context: any) {
        this.game = game;
        this.context = context;

        this.y = this.game.height - this.height - this.game.groundMargin;
        this.image = document.getElementById('player')!;

        // The order of the states follows the declaration of stats enum from playerStates.js
        this.states = [new Sitting(this.game), new Running(this.game), new Jumping(this.game),
        new Falling(this.game), new Rolling(this.game), new Diving(this.game), new Hit(this.game)];

        this.currentState = this.states[0];
    }

    update(input: string[], deltaTime: number): void {
        this.checkCollision();
        this.currentState.handleInput(input);

        // horizontal movement
        this.x += this.speed;
        if (input.includes(ARROW_RIGHT) && this.currentState !== this.states[6]) this.speed = this.maxSpeed;
        else if (input.includes(ARROW_LEFT) && this.currentState !== this.states[6]) this.speed = -this.maxSpeed;
        else this.speed = 0;

        // horizontal boundaries
        if (this.x < 0) this.x = 0;
        if (this.x > this.game.width - this.width) this.x = this.game.width - this.width;

        // vertical movement                
        this.y += this.vy;
        if (!this.onGround()) this.vy += this.weight;
        else {
            this.vy = 0;
        }

        // vertical boundaries
        if (this.onGround()) {
            this.y = this.game.height - this.height - this.game.groundMargin;
        }

        // sprite animation
        if (this.frameTimer > this.frameInterval) {
            this.frameTimer = 0;
            if (this.frameX < this.maxFrame) this.frameX++;
            else this.frameX = 0;
        } else {
            this.frameTimer += deltaTime;
        }
    }

    draw(): void {
        if (this.game.debug) {
            this.context.strokeRect(this.x, this.y, this.width, this.height);
        }
        this.context.drawImage(this.image, this.frameX * this.width, this.frameY * this.height, this.width, this.height, this.x, this.y, this.width, this.height);
    }

    onGround(): boolean {
        return this.y >= this.game.height - this.height - this.game.groundMargin;
    }

    setState(state: States, speed: number): void {
        this.currentState = this.states[state];
        this.game.speed = this.game.maxSpeed * speed;
        this.currentState.enter();
    }

    checkCollision() {
        this.game.enemies.forEach(enemy => {
            if ((enemy.x < this.x + this.width) &&
                (enemy.x + enemy.width > this.x) &&
                (enemy.y < this.y + this.height) &&
                (enemy.y + enemy.height > this.y)
            ) {
                // collision detected
                enemy.markedForDeletion = true;
                this.game.collisions.push(new CollisionAnimation(this.game, enemy.x + enemy.width * 0.5, enemy.y + enemy.height * 0.5));
                if (this.currentState === this.states[4] || this.currentState === this.states[5]) {
                    this.game.score++;
                    this.game.floatingMessages.push(new FloatingMessage('+1', enemy.x, enemy.y, 150, 50));
                } else {
                    this.setState(6, 0);
                    this.game.score = ((this.game.score - 5 < 0) ? 0 : this.game.score - 5);
                    this.game.lives--;
                    if (this.game.lives <= 0) this.game.gameOver = true;
                }
            }
        });
    }
}