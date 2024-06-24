# Development environment



Setting up a development environment for JavaScript games involves creating a simple project structure and using tools that allow you to see changes in real time as you modify your code. Here’s a step-by-step guide to set up your environment:

## Step 1: Project Structure
Create a project directory with the following structure:
```
Code kopiëren
game-project/
│
├── index.html
├── style.css
└── script.js
```

## Step 2: index.html
Create an index.html file to define the canvas and link to your CSS and JavaScript files.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Game</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <canvas id="gameCanvas"></canvas>
    <script src="script.js"></script>
</body>
</html>
```

### Step 3: style.css
Create a style.css file to define the style properties of your canvas and any other elements.

```css
body, html {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000;
}

canvas {
    border: 1px solid #fff;
}
```

## Step 4: script.js
Create a script.js file to contain the game logic.

```javascript

const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');

// Set canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Game variables
let x = canvas.width / 2;
let y = canvas.height / 2;
let dx = 2;
let dy = -2;
const ballRadius = 10;

function drawBall() {
    context.beginPath();
    context.arc(x, y, ballRadius, 0, Math.PI * 2);
    context.fillStyle = "#0095DD";
    context.fill();
    context.closePath();
}

function update() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();

    // Bounce off the walls
    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }

    x += dx;
    y += dy;

    requestAnimationFrame(update);
}

update();
```

## Step 5: Live Server
To see your changes in real-time, use a live server. You can set this up using a simple npm package called live-server or by using the Live Server extension in Visual Studio Code.

### Option 1: Using live-server with npm
- First, make sure you have Node.js installed. You can download it from nodejs.org.

- Open your terminal/command prompt and install live-server globally:

  ```sh
  npm install -g live-server
  ```

- Navigate to your project directory and start the live server:

```sh

cd path/to/game-project
live-server
```
This will open a new browser window with your game and automatically reload it whenever you make changes to any of the files.

### Option 2: Using Live Server Extension in Visual Studio Code
- Install Visual Studio Code if you haven’t already from code.visualstudio.com.
- Open Visual Studio Code and install the Live Server extension from the Extensions view (you can find it by searching for "Live Server").
- Open your project folder in Visual Studio Code.
- Right-click index.html and select "Open with Live Server".

This will also open a new browser window and reload it automatically whenever you make changes to any of the files.

# Step 6: Version Control (Optional but Recommended)
To track changes and collaborate with others, set up Git for version control.

- Initialize a git repository in your project folder:

```sh
git init
```

- Create a .gitignore file to exclude node_modules and other unnecessary files:

```
node_modules/
```

- Add and commit your initial files:

```sh
git add .
git commit -m "Initial commit"
```

By following these steps, you will have a functional development environment for your JavaScript game where you can see changes in real-time as you modify your files.