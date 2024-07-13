export const KEY_DOWN = 'keydown';
export const KEY_UP = 'keyup';
export const ARROW_LEFT = 'ArrowLeft';
export const ARROW_RIGHT = 'ArrowRight';
export const ARROW_DOWN = 'ArrowDown';
export const ARROW_UP = 'ArrowUp';
export const PRESS_LEFT = 'PRESS left';
export const PRESS_RIGHT = 'PRESS right';
export const PRESS_DOWN = 'PRESS down';
export const PRESS_UP = 'PRESS up';
export const RELEASE_LEFT = 'RELEASE left';
export const RELEASE_RIGHT = 'RELEASE right';
export const RELEASE_DOWN = 'RELEASE down';
export const RELEASE_UP = 'RELEASE up';

export default class InputHandler {

    constructor() {
        this.lastKey = '';
        window.addEventListener(KEY_DOWN, (e) => {

            switch (e.key) {
                case ARROW_LEFT:
                    this.lastKey = PRESS_LEFT;
                    break;
                case ARROW_RIGHT:
                    this.lastKey = PRESS_RIGHT;
                    break;
                case ARROW_DOWN:
                    this.lastKey = PRESS_DOWN;
                    break;
                case ARROW_UP:
                    this.lastKey = PRESS_UP;
                    break;
            }
        });

        window.addEventListener(KEY_UP, (e) => {
            switch (e.key) {
                case ARROW_LEFT:
                    this.lastKey = RELEASE_LEFT;
                    break;
                case ARROW_RIGHT:
                    this.lastKey = RELEASE_RIGHT;
                    break;
                case ARROW_DOWN:
                    this.lastKey = RELEASE_DOWN;
                    break;
                case ARROW_UP:
                    this.lastKey = RELEASE_UP;
                    break;
            }
        });
    }
}