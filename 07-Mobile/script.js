/** @type {HTMLCanvasElement} */

window.addEventListener('load', function () { /* activated when web page is fully loaded  https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event */
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    const CANVAS_WIDTH = canvas.width = 800;
    const CANVAS_HEIGHT = canvas.height = 720;

    let enemies = [];
    let score = 0;

    class InputHandler {
        constructor() {
            this.keys = [];
            window.addEventListener('keydown', e => {

                if ((e.key === 'ArrowDown' ||
                    e.key === 'ArrowUp' ||
                    e.key === 'ArrowLeft' ||
                    e.key === 'ArrowRight') &&
                    this.keys.indexOf(e.key) === -1) { /* only add key if not yet in this.keys */
                    this.keys.push(e.key);
                }
            });

            window.addEventListener('keyup', e => {

                if ((e.key === 'ArrowDown' ||
                    e.key === 'ArrowUp' ||
                    e.key === 'ArrowLeft' ||
                    e.key === 'ArrowRight')) {
                    this.keys.splice(this.keys.indexOf(e.key), 1);
                }
            });
        }
    }

    class Player {
        constructor(gameWidth, gameHeight) {
            this.gameWidth = gameWidth;
            this.gameHeight = gameHeight;
            this.width = 200;
            this.height = 200;
            this.x = 0;
            this.y = this.gameHeight - this.height;
            this.image = document.getElementById('playerImage');
            this.frameX = 0;
            this.maxFrame = 8;
            this.frameY = 0;
            this.fps = 20; // framse per second
            this.frameTimer = 0;
            this.frameInterval = 1000 / this.fps;
            this.speed = 1;
            this.vy = 0;
            this.weigth = 1; // pull player down
        }

        draw(context) {
            // remove background white rectangle
            //context.fillStyle = 'white';
            //context.fillRect(this.x, this.y, this.width, this.height);
            context.drawImage(this.image, this.frameX * this.width, this.frameY * this.height, this.width, this.height, this.x, this.y, this.width, this.height);
        }

        update(input, deltaTime) {
            if (this.frameTimer > this.frameInterval) {
                if (this.frameX >= this.maxFrame) this.frameX = 0;
                else this.frameX++;
                this.frameTimer = 0;
            } else {
                this.frameTimer += deltaTime;
            }

            if (input.keys.indexOf('ArrowRight') > -1) {
                this.speed = 5;
            } else if ((input.keys.indexOf('ArrowLeft') > -1)) {
                this.speed = -5;
            } else if ((input.keys.indexOf('ArrowUp') > -1) && this.onGround()) {
                this.vy -= 32;
            } else {
                this.speed = 0;
            }

            // horizontal movement
            this.x += this.speed;
            if (this.x < 0) this.x = 0;
            else if (this.x > this.gameWidth - this.width) this.x = this.gameWidth - this.width;

            // vertical movement
            this.y += this.vy;
            if (!this.onGround()) { // if player in the air
                this.vy += this.weigth;
                this.maxFrame = 5;
                this.frameY = 1;
            } else {
                this.vy = 0;
                this.maxFrame = 8;
                this.frameY = 0;
            }
            if (this.y > this.gameHeight - this.height) this.y = this.gameHeight - this.height;

        }

        onGround() {
            return this.y >= this.gameHeight - this.height;
        }
    }

    class Background {
        constructor(gameWidth, gameHeight) {
            this.gameWidth = gameWidth;
            this.gameHeight = gameHeight;
            this.image = document.getElementById('backgroundImage');
            this.x = 0;
            this.y = 0;
            this.width = 2400;
            this.height = 720;
            this.speed = 20;
        }

        draw(context) {
            context.drawImage(this.image, this.x, this.y, this.width, this.height);
            context.drawImage(this.image, this.x + this.width - this.speed, this.y, this.width, this.height);
        }

        update() {
            this.x -= this.speed;
            if (this.x < 0 - this.width) this.x = 0;
        }

    }

    class Enemy {
        constructor(gameWidth, gameHeight) {
            this.gameWidth = gameWidth;
            this.gameHeight = gameHeight;
            this.width = 160;
            this.height = 119;
            this.image = document.getElementById('enemyImage');
            this.x = this.gameWidth;
            this.y = this.gameHeight - this.height;
            this.frameX = 0;
            this.maxFrame = 5;
            this.fps = 20; // framse per second
            this.frameTimer = 0;
            this.frameInterval = 1000 / this.fps;
            this.speed = 8;
            this.markedForDeletion = false;
        }

        draw(context) {
            context.strokeStyle = 'white';
            context.stokeRect(this.x, this.y, this.width, this.height);
            context.drawImage(this.image, this.frameX * this.width, 0, this.width, this.height, this.x, this.y, this.width, this.height);
        }

        update(deltaTime) {
            if (this.frameTimer > this.frameInterval) {
                if (this.frameX >= this.maxFrame) this.frameX = 0;
                else this.frameX++;
                this.frameTimer = 0;
            } else {
                this.frameTimer += deltaTime;
            }
            this.x -= this.speed;
            if (this.x < 0 - this.width) {
                this.markedForDeletion = true;
                score++;
            }
        }

    }

    function handleEnemies(deltaTime) {

        if (enemyTimer > enemyInterval + randomEnemyInterval) {
            enemies.push(new Enemy(canvas.width, canvas.height));
            randomEnemyInterval = Math.random() * 1000 + 500;
            enemyTimer = 0;
        } else {
            enemyTimer += deltaTime;
        }

        enemies.forEach(enemy => {
            enemy.draw(ctx);
            enemy.update(deltaTime);
        });
        enemies = enemies.filter(enemy => !enemy.markedForDeletion);
    }

    function displayStatusText(context) {
        context.font = '40px Helvetica';
        context.fillStyle = 'black';        
        context.fillText('Score: '+ score, 20, 50);
        context.fillStyle = 'white';        
        context.fillText('Score: '+ score, 22, 52);
    }

    const input = new InputHandler();
    const player = new Player(canvas.width, canvas.height);
    const background = new Background(canvas.width, canvas.height);

    let lastTime = 0;
    let enemyTimer = 0;
    let enemyInterval = 1000;
    let randomEnemyInterval = Math.random() * 1000 + 500;

    function animate(timeStamp) {
        const deltaTime = timeStamp - lastTime;
        lastTime = timeStamp;


        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // order of drawing object is important. First background then foreground objects
        background.draw(ctx);
        //background.update();
        player.draw(ctx);
        player.update(input, deltaTime);

        handleEnemies(deltaTime);

        displayStatusText(ctx);

        requestAnimationFrame(animate);
    }

    animate(0);
});