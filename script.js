const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;


const playerImage = new Image();
// width  = 6876 pixels 12 cols width = 6876/12 = 573, using 575
// height = 5230 pixels 10 rows height = 5230/10 = 523
playerImage.src = 'shadow_dog.png';  

const spriteWidth = 575;
const spriteHeight = 523;

spriteAnimations = [];
const animationStates = [
    {
        name: 'idle',
        frames: 7
    },
    {
        name: 'jump',
        frames: 7
    },
    {
        name: 'idle',
        frames: 7
    },
    {
        name: 'idle',
        frames: 7
    },
    {
        name: 'idle',
        frames: 7
    },
    {
        name: 'idle',
        frames: 7
    },
    {
        name: 'idle',
        frames: 7
    },
    {
        name: 'idle',
        frames: 7
    },
    {
        name: 'idle',
        frames: 7
    },
    {
        name: 'idle',
        frames: 7
    },
];

animationStates.forEach((state, index) => {
let frames = {
    loc: [],
    };
    for (let j = 0; j < state.frames; j++) {
        let positionX = j*spriteWidth;
        let positionY = index * spriteHeight;
        frames.loc.push({x: positionX, y: positionY});
    }
    spriteAnimations[state.name] = frames;
});

console.log(animationStates);

let frameX = 0;
let frameY = 0;
let gameFrame = 0;
const staggerFrame = 5;

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);    

    let position = Math.floor(gameFrame/staggerFrame) % 6;
    frameX = spriteWidth * position;

    ctx.drawImage(playerImage, frameX, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);

    gameFrame++;
    requestAnimationFrame(animate);
};

animate();
