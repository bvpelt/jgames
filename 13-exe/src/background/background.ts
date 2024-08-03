import { Game } from "../game";
import { Layer } from "./layer";

export class Background {
    game: Game;
    width: number;
    height: number;
    layer1image: HTMLElement;
    layer2image: HTMLElement;
    layer3image: HTMLElement;
    layer4image: HTMLElement;
    layer5image: HTMLElement;
    layer1: Layer;
    layer2: Layer;
    layer3: Layer;
    layer4: Layer;
    layer5: Layer;
    backgroundLayers: Layer[];

    constructor(game: Game) {
        this.game = game;
        this.width = 1667;
        this.height = 500;
        this.layer1image = document.getElementById('layer1')!;
        this.layer2image = document.getElementById('layer2')!;
        this.layer3image = document.getElementById('layer3')!;
        this.layer4image = document.getElementById('layer4')!;
        this.layer5image = document.getElementById('layer5')!;
        this.layer1 = new Layer(this.game, this.width, this.height, 0, this.layer1image); // grey sky no movement
        this.layer2 = new Layer(this.game, this.width, this.height, 0.2, this.layer2image);
        this.layer3 = new Layer(this.game, this.width, this.height, 0.4, this.layer3image);
        this.layer4 = new Layer(this.game, this.width, this.height, 0.8, this.layer4image);
        this.layer5 = new Layer(this.game, this.width, this.height, 1, this.layer5image);
        this.backgroundLayers = [this.layer1, this.layer2, this.layer3, this.layer4, this.layer5];
    }

    update(): void {
        this.backgroundLayers.forEach(layer => {
            layer.update();
        });
    }

    draw(context: any): void {
        this.backgroundLayers.forEach(layer => {
            layer.draw(context);
        });
    }
}