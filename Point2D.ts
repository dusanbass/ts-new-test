export class Point2D { // class code - code inside the class scope
    x: number;
    y: number;
    constructor(x: number = 0, y: number = 0) {
        this.x = x;
        this.y = y;
    };
    position(): string {
        return `x: ${this.x} y: ${this.y}`;
    };
}