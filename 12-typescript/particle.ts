import { Game } from './game';

export interface Particle {
    game: Game;
    markedForDeletion: boolean;
    

    update(): void;

    draw(context: any): void;
}