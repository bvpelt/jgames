/** @type {HTMLCanvasElement} */

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 500;
const CANVAS_HEIGHT = canvas.height = 700;
const canvasPosition = canvas.getBoundingClientRect();

const explosions = [];

class Explosion {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.spriteWidth = 200;
        this.spriteHeight = 179;
        this.width = this.spriteWidth/2;
        this.height = this.spriteHeight/2;
        this.image = new Image();
        this.image.src = 'images/boom.png';
        this.frame = 0;
    }

    update() {
        this.frame++;
    }

    draw() {
        ctx.drawImage(this.image, this.spriteWidth * this.frame, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
    }
}

window.addEventListener('click', function(e) {
    console.log(e);
    ctx.fillStyle = 'white';
    let width = 75;
    let height = 50;
    ctx.fillRect(e.x - canvasPosition.left - width/2, e.y - canvasPosition.top - height/2, width, height);
});