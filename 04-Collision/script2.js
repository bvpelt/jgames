/** @type {HTMLCanvasElement} */

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 800;
const CANVAS_HEIGHT = canvas.height = 700;

console.log("Circle collision detection");

var circle1 = { x: 5, y: 10, radius: 300 };
var circle2 = { x: 500, y: 500, radius: 150 };

ctx.fillStyle = "green";
ctx.arc(circle1.x, circle1.y, circle1.radius, 0, 360);
ctx.fillStyle = "red";
ctx.arc(circle2.x, circle2.y, circle2.radius, 0, 360);

let dx = circle2.x - circle1.x;
let dy = circle2.y - circle1.y;
let distance = Math.sqrt(dx*dx + dy*dy);
let sumOfRadii = circle1.radius + circle2.radius;

if (distance < sumOfRadii) {
    // collision detected
    console.log("collision detected");
} else if (distance === sumOfRadii) {
    // circles touch
    console.log("touch detected");
} else {
    // no collision detected
    console.log("no collision detected");
}
