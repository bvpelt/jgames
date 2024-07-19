import { Player } from './player.js';
import { InputHandler } from './input.js';
import { Background } from './background.js';
import { FlyingEnemy, ClimbingEnemy, GroundEnemy } from './enemies.js';

window.addEventListener('load', e => {
    const loading = document.getElementById('loading');

    loading.style.display = 'none';
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');

    canvas.width = 500;
    canvas.height = 500;

    class Game {
        constructor(width, height) {
            this.width = width;
            this.height = height;
            this.groundMargin = 80;
            this.speed = 0; // pixels per frame
            this.maxSpeed = 4;
            this.background = new Background(this);
            this.player = new Player(this);
            this.input = new InputHandler();  
            this.enemies = [];      
            this.enemyTimer = 0;   
            this.enemyInterval = 1000; // milliseconds
        }

        update(deltaTime) {  
            this.background.update();          
            this.player.update(this.input.keys, deltaTime);
            // handle enemies
            if (this.enemyTimer > this.enemyInterval) {
                this.addEnemy();
                this.enemyTimer = 0;
            }
            this.enemies.forEach(enemy => {
                enemy.update(deltaTime);
            });
        }

        draw(context) {
            this.background.draw(context);
            this.player.draw(context);
        }

        addEnemy() {
            this.enemies.push(new FlyingEnemy(this));
        }
    }

    const game = new Game(canvas.width, canvas.height);
    let lastTime = 0;

    function animate(timeStamp) {
        const deltaTime = timeStamp - lastTime;        
        lastTime = timeStamp;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        game.update(deltaTime);
        game.draw(ctx);
        requestAnimationFrame(animate);
    }

    animate(lastTime);
});
