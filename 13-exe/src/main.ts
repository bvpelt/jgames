import { Game } from './game';




window.addEventListener('load', e => {
    const loading: HTMLElement = document.getElementById('loading')!;
    const fullScreenButton: HTMLElement = document.getElementById('fullScreenButton')!;

    loading.style.display = 'none';
    const canvas = document.getElementById('canvas1') as HTMLCanvasElement;
    const ctx: any = canvas.getContext('2d');

    canvas.width = 900;
    canvas.height = 500;

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

    fullScreenButton.addEventListener('click', e => {
        toggleFullScreen()
    });

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
