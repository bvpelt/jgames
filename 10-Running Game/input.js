
// events
const KEY_DOWN = 'keydown';
const KEY_UP = 'keyup';

// keys
const ARROW_DOWN = 'ArrowDown';
const ARROW_UP = 'ArrowUp';
const ARROW_LEFT = 'ArrowLeft';
const ARROW_RIGHT = 'ArrowRight';
const ENTER = 'Enter';


export class InputHandler {
    constructor() {
        this.keys = [];

        window.addEventListener(KEY_DOWN, e => {
            if ((e.key === ARROW_DOWN ||
                e.key === ARROW_UP ||
                e.key === ARROW_LEFT ||
                e.key === ARROW_RIGHT ||
                e.key === ENTER)
                && this.keys.indexOf(e.key) === -1) {
                this.keys.push(e.key);
            }
            console.log('down ', e.key, this.keys);
        });

        window.addEventListener(KEY_UP, e => {
            if (e.key === ARROW_DOWN ||
                e.key === ARROW_UP ||
                e.key === ARROW_LEFT ||
                e.key === ARROW_RIGHT ||
                e.key === ENTER) {
                this.keys.splice(this.keys.indexOf(e.key), 1);
            }
            console.log('up ', e.key, this.keys);
        });
    }
}