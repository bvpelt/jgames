import { Game } from '../game';

export class Enemy {
    frameX: number = 0;
    frameY: number = 0;
    fps: number = 20;
    frameInterval: number;
    frameTimer: number = 0;
    markedForDeletion: boolean = false;
    width: number = 0;
    height: number = 0;
    x: number = 0;
    y: number = 0;
    image?: HTMLElement;
    speedX: number = 0;
    speedY: number = 0;
    maxFrame: number = 0;
    angle: number = 0;
    va: number = 0;
    game: Game;


    constructor(game: Game) {
        this.game = game;
        this.frameInterval = 1000 / this.fps;
    }

    update(deltaTime: number): void {
        // movement
        this.x -= this.speedX + this.game.speed;
        this.y += this.speedY;
        if (this.frameTimer > this.frameInterval) {
            this.frameTimer = 0;
            if (this.frameX < this.maxFrame) this.frameX++;
            else this.frameX = 0;
        } else {
            this.frameTimer += deltaTime;
        }
        // check for removal of enemy
        if (this.x + this.width < 0) this.markedForDeletion = true;
    }

    draw(context: any): void {
        if (this.game.debug) {
            context.strokeRect(this.x, this.y, this.width, this.height);
        }
        context.drawImage(this.image, this.frameX * this.width, 0, this.width, this.height, this.x, this.y, this.width, this.height);
    }
}