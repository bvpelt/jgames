import { Game } from './game';
import { Player } from './player';
//import { InputHandler } from './input.js';
//import { Background } from './background.js';
//import { FyingEnemy, ClimbingEnemy, GroundEnemy } from './enemies.js';
//import { UI } from './ui.js';

window.addEventListener('load', e => {
    const loading: HTMLElement = document.getElementById('loading')!;
    const fullScreenButton = document.getElementById('fullScreenButton');

    loading.style.display = 'none';
    const canvas = document.getElementById('canvas1') as HTMLCanvasElement;
    const ctx: any = canvas.getContext('2d');

    canvas.width = 900;
    canvas.height = 500;
    /*
        class Game {
            constructor(width:number, height: number) {
                this.width:number = width;
                this.height:number = height;
                this.groundMargin = 40;
                this.speed = 0; // pixels per frame
                this.maxSpeed = 4;
    //            this.background = new Background(this);
    //            this.player = new Player(this);
    //            this.input = new InputHandler(this);
    //            this.UI = new UI(this);
                this.enemies = [];
                this.particles = [];
                this.collisions = [];
                this.floatingMessages = [];
                this.maxParticles = 100;
                this.enemyTimer = 0;
                this.enemyInterval = 1000; // milliseconds
                this.debug = false;
                this.score = 0;
                this.winningScore = 40;
                this.fontColor = 'black';
                this.time = 0;
                this.maxTime = 30000;  
                this.gameOver = false; 
                this.lives = 5;          
    //            this.player.currentState = this.player.states[0];
    //            this.player.currentState.enter();
            }
    
            update(deltaTime) {
                this.time += deltaTime;
                if (this.time > this.maxTime) this.gameOver = true;
    //            this.background.update();
    //            this.player.update(this.input.keys, deltaTime);
                
                // handle enemies
    //            if (this.enemyTimer > this.enemyInterval) {
    //                this.addEnemy();
    //                this.enemyTimer = 0;
    //            } else {
    //                this.enemyTimer += deltaTime;
    //            }
                
    //            this.enemies.forEach(enemy => {
    //                enemy.update(deltaTime);             
    //            });
                
                // handle messages
    //            this.floatingMessages.forEach(message => {
    //                message.update(deltaTime);
    //            });
                
                // handle particles
    //            this.particles.forEach((particle, index) => {
    //                particle.update();                
    //            });
    
    //            if (this.particles.length > this.maxParticles) {
    //                this.particles.length = this.maxParticles;
    //            };
    
                // handle collisions
    //            this.collisions.forEach((collision, index) => {
    //                collision.update(deltaTime);                
    //            });
    
                // cleanup marked for deletion objects
    //            this.enemies = this.enemies.filter(enemy => !enemy.markedForDeletion);
    //            this.collisions = this.collisions.filter(collision => !collision.markedForDeletion);            
    //            this.particles = this.particles.filter(particle => !particle.markedForDeletion);
    //            this.floatingMessages = this.floatingMessages.filter(message => !message.markedForDeletion);
            }
    
            draw(context) {
    //            this.background.draw(context);
    //            this.player.draw(context);
    //            this.enemies.forEach(enemy => {
    //                enemy.draw(context);
    //            });
    //            this.particles.forEach(particle => {
    //                particle.draw(context);
    //            });
    //            this.collisions.forEach(collision => {
    //                collision.draw(context);
    //            });
    //            this.floatingMessages.forEach(message => {
    //                message.draw(context);
    //            })
    //            this.UI.draw(context);
            }
    
            addEnemy() {
    //            if (this.speed > 0 && Math.random() < 0.5) this.enemies.push(new GroundEnemy(this));
    //            else if (this.speed > 0) this.enemies.push(new ClimbingEnemy(this));
    //            this.enemies.push(new FyingEnemy(this));
            }
        }
        */

    /*
    function toggleFullScreen() {        
        if (!document.fullscreenElement) { // document.fullscreenElement === null not in fullscreen mode
            canvas.requestFullscreen().catch(err => {
                alert(`Error, can't enable full-screen mode: ${err.message}`);
            });
        } else {
            document.exitFullscreen();
        }
    }

    fullScreenButton.addEventListener('click', e => {        
        toggleFullScreen()
    });

    const game = new Game(canvas.width, canvas.height);
    let lastTime = 0;

    function animate(timeStamp) {
        try {
        const deltaTime = timeStamp - lastTime;
        lastTime = timeStamp;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        game.update(deltaTime);
        game.draw(ctx);
        if (!game.gameOver) requestAnimationFrame(animate);
        } catch (e) {
            console.log(e.stack);
        }
    }

    animate(lastTime);
    */

    var game: Game = new Game(canvas.width, canvas.height, ctx);
    console.log(game);

    var player: Player = new Player(game, ctx);
    console.log(player);

    
    
    let lastTime: number = 0;

    function animate(timeStamp: number) {
        try {
            const deltaTime: number = timeStamp - lastTime;
            lastTime = timeStamp;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            game.update(deltaTime);
            game.draw();
            if (!game.gameOver) requestAnimationFrame(animate);
        } catch (e: any) {
            console.log(e.stack);
        }
    }

    animate(lastTime);
    
});
