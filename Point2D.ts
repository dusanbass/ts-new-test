export default class Point2D { // class code - code inside the class scope
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

export function isItTheSameSpot(p1: Point2D, p2: Point2D): boolean { 
    return p1.position() === p2.position();
}
