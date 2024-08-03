import { Game } from "../game";
import { Particle } from "./particle";

export class Dust extends Particle {
    color: string;

    constructor(game: Game, x: number, y: number) {
        super(game);
        this.size = Math.random() * 10 + 10;
        this.x = x;
        this.y = y;
        this.speedX = Math.random();
        this.speedY = Math.random();
        this.color = 'rgba(255,105,0,0.3'; //rgba(0,0,0,0.3)'; //black'
    }

    update(): void {

    };

    draw(context: any) {
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fillStyle = this.color;
        context.fill();
    }
}