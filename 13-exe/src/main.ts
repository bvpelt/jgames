import { InputHandler, F1 } from './inputhandler';
import { Game } from './game';


window.addEventListener('load', e => {
    const loading: HTMLElement = document.getElementById('loading')!;
    const helpScherm: HTMLElement = document.getElementById('helpScherm')!;
    const fullScreenButton: HTMLElement = document.getElementById('fullScreenButton')!;

    const helpScreen: HTMLElement = document.getElementById('helpScherm')!;
    const closeHelpSchermButton: HTMLElement = document.getElementById('closeHelpScherm')!;

    // disable helpscreen
    helpScreen.style.display = 'none';

    loading.style.display = 'none';
    const canvas = document.getElementById('canvas1') as HTMLCanvasElement;
    const ctx: any = canvas.getContext('2d');

    canvas.width = 900;
    canvas.height = 500;

    console.log(canvas.getBoundingClientRect());

    var game: Game = new Game(canvas.width, canvas.height, ctx);

    function toggleFullScreen() {
        if (!document.fullscreenElement) { // document.fullscreenElement === null not in fullscreen mode
            canvas.requestFullscreen().catch(err => {
                alert(`Error, can't enable full-screen mode: ${err.message}`);
            });
        } else {
            document.exitFullscreen();
        }
    }

    function disableHelpScreen() {
        helpScreen.style.display = 'none';
    }


    fullScreenButton.addEventListener('click', e => {
        toggleFullScreen()
    });

    closeHelpSchermButton.addEventListener('click', e => {
        disableHelpScreen()
    });

    let lastTime: number = 0;
    let inputHandler = new InputHandler(game);

    function animate(timeStamp: number) {
        try {
            const deltaTime: number = timeStamp - lastTime;
            lastTime = timeStamp;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            game.update(deltaTime);
            game.draw();
            if (!game.gameOver) requestAnimationFrame(animate);
            if (inputHandler.keys.includes(F1)) {
                helpScherm.style.display = 'inline';
                inputHandler.keys.splice(inputHandler.keys.indexOf(F1), 1);
            }
        } catch (e: any) {
            console.log(e.stack);
        }
    }

    animate(lastTime);

});
