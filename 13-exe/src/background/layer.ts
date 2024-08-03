import { Game } from "../game";

export class Layer {
    game: Game;
    width: number;
    height: number;
    speedModifier: number;
    image: HTMLElement;
    x: number;
    y: number;

    constructor(game: Game, width: number, height: number, speedModifier: number, image: HTMLElement) {
        this.game = game;
        this.width = width;
        this.height = height;
        this.speedModifier = speedModifier;
        this.image = image;
        this.x = 0;
        this.y = 0;
    }

    update(): void {
        if (this.x < -this.width) this.x = 0;
        else this.x -= this.game.speed * this.speedModifier;
    }

    draw(context: any): void {
        context.drawImage(this.image, this.x, this.y, this.width, this.height);
        context.drawImage(this.image, this.x + this.width, this.y, this.width, this.height);
    }
}