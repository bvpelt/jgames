import { Background } from './background';
import { Particle } from './particles/particle';
import { Player } from './player';
import { InputHandler } from './inputhandler';
import { Enemy } from './enemies/enemy';
import { CollisionAnimation } from './collisionanimation';
import { FloatingMessage } from './floatingmessage';
import { UI } from './ui';
import { ClimbingEnemy } from './enemies/climbingenemy';
import { FyingEnemy } from './enemies/fyringenemy';
import { GroundEnemy } from './enemies/groundenemy';

export class Game {
    width: number = 0;
    height: number = 0;
    groundMargin: number = 40;
    speed: number = 0; // pixels per frame
    maxSpeed: number = 4;
    background: Background;
    player: Player;
    input: InputHandler;
    UI: UI;
    enemies: Enemy[] = [];
    particles: Particle[] = [];
    collisions: CollisionAnimation[] = [];
    floatingMessages: FloatingMessage[] = [];
    maxParticles: number = 100;
    enemyTimer: number = 0;
    enemyInterval: number = 1000; // milliseconds
    debug: boolean = false;
    score: number = 0;
    winningScore: number = 40;
    fontColor: string = 'black';
    time: number = 0;
    maxTime: number = 30000;
    gameOver: boolean = false;
    lives: number = 5;
    context: HTMLCanvasElement;

    constructor(width: number, height: number, context: HTMLCanvasElement) {
        this.width = width;
        this.height = height;
        this.context = context;
        this.background = new Background(this);
        this.UI = new UI(this);
        this.input = new InputHandler(this);
        this.player = new Player(this, this.context);
        this.player.currentState = this.player.states[0];
        this.player.currentState.enter();
    }

    update(deltaTime: number) {
        this.time += deltaTime;
        //if (this.time > this.maxTime) this.gameOver = true;
        this.background.update();
        this.player.update(this.input.keys, deltaTime);

        // handle enemies
        if (this.enemyTimer > this.enemyInterval) {
            this.addEnemy();
            this.enemyTimer = 0;
        } else {
            this.enemyTimer += deltaTime;
        }

        this.enemies.forEach(enemy => {
            enemy.update(deltaTime);
        });

        // handle messages
        this.floatingMessages.forEach(message => {
            message.update(deltaTime);
        });

        // handle particles
        this.particles.forEach((particle, index) => {
            particle.update();
        });

        if (this.particles.length > this.maxParticles) {
            this.particles.length = this.maxParticles;
        };

        // handle collisions
        this.collisions.forEach((collision, index) => {
            collision.update(deltaTime);
        });

        // cleanup marked for deletion objects
        this.enemies = this.enemies.filter(enemy => !enemy.markedForDeletion);
        this.collisions = this.collisions.filter(collision => !collision.markedForDeletion);            
        this.particles = this.particles.filter(particle => !particle.markedForDeletion);
        this.floatingMessages = this.floatingMessages.filter(message => !message.markedForDeletion);
    }

    draw() {
        this.background.draw(this.context);

        // draw player
        this.player.draw()

        // draw enemies
        this.enemies.forEach(enemy => {
            enemy.draw(this.context);
        });

        // draw particles
        this.particles.forEach(particle => {
            particle.draw(this.context);
        });

        // handle collisions
        this.collisions.forEach(collision => {
            collision.draw(this.context);
        });

        // handle messages
        this.floatingMessages.forEach(message => {
            message.draw(this.context);
        });

        // handle ui
        this.UI.draw(this.context);
    }

    addEnemy() {
        if (this.speed > 0 && Math.random() < 0.5) this.enemies.push(new GroundEnemy(this));
        else if (this.speed > 0) this.enemies.push(new ClimbingEnemy(this));
        this.enemies.push(new FyingEnemy(this));
    }
}