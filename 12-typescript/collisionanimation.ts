import { Game } from "./game";

export class CollisionAnimation {
    game: Game;
    image: HTMLElement;
    spriteWidth: number = 100;
    spriteHeight: number = 90;
    sizeModifier: number;
    width: number;
    height: number;
    x: number;
    y: number;
    frameX: number = 0;
    maxFrame: number = 4;
    markedForDeletion: boolean = false;
    fps: number;
    frameInterval: number;
    frameTimer: number = 0;

    constructor(game: Game, x: number, y: number) {
        this.game = game;
        this.image = document.getElementById('collisionanimation')!;
        this.sizeModifier = Math.random() + 0.5;
        this.width = this.spriteWidth * this.sizeModifier;
        this.height = this.spriteHeight * this.sizeModifier;
        this.x = x - this.width * 0.5;
        this.y = y - this.height * 0.5;
        this.markedForDeletion = false;
        this.fps = Math.random() * 10 + 5;
        this.frameInterval = 1000 / this.fps;
    }

    draw(context: any): void {
        context.drawImage(this.image, this.frameX * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
    }

    update(deltaTime: number): void {
        this.x -= this.game.speed;
        if (this.frameTimer > this.frameInterval) {
            this.frameX++;
            this.frameTimer = 0;
        } else {
            this.frameTimer += deltaTime;
        }
        if (this.frameX > this.maxFrame) this.markedForDeletion = true;
    }
}