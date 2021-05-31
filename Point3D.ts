import { Point2D } from "./Point2D";

export default class Point3D extends Point2D {
    z: number;
    constructor(x: number, y: number, z: number) {
        super(x, y); // new Point2D(x, y)
        this.z = z;
    };
    // overwrite - write over some previously defined method
    position(): string {
        return `${super.position()} z: ${this.z}` // template string + super method
    }
}