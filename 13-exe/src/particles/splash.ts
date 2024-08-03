import { Game } from "../game";
import { Particle } from "./particle";

export class Splash extends Particle {
    gravity: number;
    image: HTMLElement;

    constructor(game: Game, x: number, y: number) {
        super(game);
        this.size = Math.random() * 100 + 100;
        this.x = x - this.size * 0.4;
        this.y = y - this.size * 0.5;
        this.speedX = Math.random() * 6 - 4;
        this.speedY = Math.random() * 2 + 1;
        this.gravity = 0;
        this.image = document.getElementById('fire')!;
    }

    update(): void {
        super.update();
        this.gravity += 0.1;
        this.y += this.gravity;
    }

    draw(context: any): void {
        context.drawImage(this.image, this.x, this.y, this.size, this.size);
    }
}