/** @type {HTMLCanvasElement} */

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 800;
const CANVAS_HEIGHT = canvas.height = 700;

console.log("Rectangle collision detection");

var rect1 = { x: 5, y: 15, width: 50, height: 50 };
var rect2 = { x: 60, y: 10, width: 10, height: 10 };

ctx.fillStyle = "green";
ctx.fillRect(rect1.x, rect1.y, rect1.width, rect1.height);
ctx.fillStyle = "red";
ctx.fillRect(rect2.x, rect2.y, rect2.width, rect2.height);

if ((rect1.x < rect2.x + rect2.width) &&
    (rect1.x + rect1.width > rect2.x) &&
    (rect1.y < rect2.y + rect2.height) &&
    (rect1.y + rect1.height > rect2.y)) {
    // collision detected
    console.log("collision detected");
} else {
    // no collision detected
    console.log("no collision detected");
}

if ((rect1.x > rect2.x + rect2.width) ||
    (rect1.x + rect1.width < rect2.x) ||
    (rect1.y > rect2.y + rect2.height) ||
    (rect1.y + rect1.height < rect2.y)) {
    // no collision detected
    console.log("no collision detected");
} else {
    // collision detected
    console.log("collision detected");
}