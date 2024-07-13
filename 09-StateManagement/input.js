export const KEY_DOWN = 'keydown';
export const KEY_UP = 'keyup';
export const ARROW_LEFT = 'ArrowLeft';
export const ARROW_RIGHT = 'ArrowRight';
export const PRESS_LEFT = 'PRESS left';
export const PRESS_RIGHT = 'PRESS rightt';
export const RELEASE_LEFT = 'RELEASE left';
export const RELEASE_RIGHT = 'RELEASE right';

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
            }
        });

        window.addEventListener(KEY_UP, (e) => {
            switch (e.key) {
                case ARROW_LEFT:
                    this.lastKey = RELEASE_LEFT;
                    break;
                case ARROW_RIGHT:
                    this.lastKey =  RELEASE_RIGHT;
                    break;
            }
        });
    }
}