import { Game } from '../game';

export class Particle {
    game: Game;
    markedForDeletion: boolean;
    x: number = 0;
    y: number = 0;
    speedX: number = 0;
    speedY: number = 0;
    size: number = 0;

    constructor(game: Game) {
        this.game = game;
        this.markedForDeletion = false;
    }

    update(): void {
        this.x -= this.speedX + this.game.speed;
        this.y -= this.speedY;
        this.size *= 0.97; // decrease by 5%
        if (this.size < 0.5) this.markedForDeletion = true;
    }

    draw(context: any): void {

    };
}