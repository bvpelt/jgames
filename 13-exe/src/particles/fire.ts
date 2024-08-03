import { Game } from "../game";
import { Particle } from "./particle";

export class Fire extends Particle {
    image: HTMLElement;
    angle: number;
    va: number;

    constructor(game: Game, x: number, y: number) {
        super(game);
        this.image = document.getElementById('fire')!;
        this.size = Math.random() * 100 + 100;
        this.x = x;
        this.y = y;
        this.speedX = 1;
        this.speedY = 1;
        this.angle = 0;
        this.va = Math.random() * 0.2 - 0.1
    }

    update(): void {
        super.update();
        this.angle += this.va;
        this.x += Math.sin(this.angle * 5);
    }

    draw(context: any): void {
        context.save();
        context.translate(this.x, this.y);
        context.rotate(this.angle);
        context.drawImage(this.image, -this.size * 0.5, -this.size * 0.5, this.size, this.size);
        context.restore();
    }
}