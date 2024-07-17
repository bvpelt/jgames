import { ARROW_DOWN, ARROW_UP, ARROW_LEFT, ARROW_RIGHT, ENTER } from './input.js';


export class Player {
    constructor(game) {
        this.game = game;
        this.width = 100;
        this.height = 91.3;
        this.x = 0;
        this.y = this.game.height - this.height;
        this.vy = 0;
        this.weight = 1;
        this.image = document.getElementById('player'); // alternative use player from the id in index.html
        this.speed = 0;
        this.maxSpeed = 10; // pixels / frame
    }

    update(input) {
        // horizontal movement
        this.x += this.speed;
        if (input.includes(ARROW_RIGHT)) this.speed = this.maxSpeed;
        else if (input.includes(ARROW_LEFT)) this.speed = -this.maxSpeed;
        else this.speed = 0;
        if (this.x < 0) this.x = 0;
        if (this.x > this.game.width - this.width) this.x = this.game.width - this.width;
        // vertical movement        
        if (input.includes(ARROW_UP) && this.onGround()) this.vy -= 20;
        this.y += this.vy;
        if (!this.onGround()) this.vy += this.weight;
        else this.vy = 0;
    }

    draw(context) {
        context.drawImage(this.image, 0, 0, this.width, this.height, this.x, this.y, this.width, this.height);
    }

    onGround() {
        return this.y >= this.game.height - this.height;
    }
}