/** @type {HTMLCanvasElement} */

console.log("Start script");
document.addEventListener("load", (event) => {

    console.log("load");
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');

    const CANVAS_WIDTH = canvas.width = 500;
    const CANVAS_HEIGHT = canvas.height = 800;

    /* Contains all game logic */
    class Game {
        constructor() {
            this.enemies = [];
        }

        update() {

        }

        draw() {

        }

        /* private method */
        #addNewEnemy() {

        }
    };

    class Enemy {
        constructor() {

        }

        update() {

        }

        draw() {

        }
    };

    let lastTime = 1;
    function animate(timeStamp) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const deltaTime = timeStamp - lastTime;
        lastTime = timeStamp;
        console.log(deltaTime);
        requestAnimationFrame(animate);
    };

    animate();
   

});