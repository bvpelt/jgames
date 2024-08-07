import { Game } from './game';

// events
const KEY_DOWN = 'keydown';
const KEY_UP = 'keyup';

// keys
export const ARROW_DOWN = 'ArrowDown';
export const ARROW_UP = 'ArrowUp';
export const ARROW_LEFT = 'ArrowLeft';
export const ARROW_RIGHT = 'ArrowRight';
export const ENTER = 'Enter';
export const F1 = 'F1';


export class InputHandler {
    keys: string[];
    game: Game;

    constructor(game: Game) {
        this.keys = [];
        this.game = game;

        window.addEventListener(KEY_DOWN, e => {
            console.log(this.keys);
            if ((e.key === ARROW_DOWN ||
                e.key === ARROW_UP ||
                e.key === ARROW_LEFT ||
                e.key === ARROW_RIGHT ||
                e.key === ENTER )
                && this.keys.indexOf(e.key) === -1) {
                this.keys.push(e.key);
            } else  if (e.key === 'd') this.game.debug = !this.game.debug; 
            else if (e.key === F1) {
                console.log('add key: ' + e)
                e.preventDefault();
                if (this.keys.indexOf(e.key) === -1) this.keys.push(e.key);
            }            
        });

        window.addEventListener(KEY_UP, e => {
            if (e.key === ARROW_DOWN ||
                e.key === ARROW_UP ||
                e.key === ARROW_LEFT ||
                e.key === ARROW_RIGHT ||
                e.key === ENTER ) {
                this.keys.splice(this.keys.indexOf(e.key), 1);
            }             
        });
    }
}