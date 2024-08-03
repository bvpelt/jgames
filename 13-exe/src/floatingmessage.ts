export class FloatingMessage {
    value: string;
    x: number;
    y: number;
    targetX: number;
    targetY: number;
    markedForDeletion: boolean = false;
    timer: number = 0;

    constructor(value: string, x: number, y: number, targetX: number, targetY: number) {
        this.value = value;
        this.x = x;
        this.y = y;
        this.targetX = targetX;
        this.targetY = targetY;
    }

    update(deltaTime: number): void {
        this.x += (this.targetX - this.x) * 0.03;
        this.y += (this.targetY - this.y) * 0.03;
        this.timer++;
        if (this.timer > 100) this.markedForDeletion = true;
    }

    draw(context: any) {
        context.font = '20px Creepster';
        context.fontStyle = 'white';
        context.fillText(this.value, this.x, this.y);
        context.fontStyle = 'black';
        context.fillText(this.value, this.x - 2, this.y - 2);
    }
}