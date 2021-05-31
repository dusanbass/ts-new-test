import { Point2D } from "./Point2D";

export default class Point3D extends Point2D {
    z: number;
    constructor(x: number = 0, y: number = 0, z: number = 0) {
        super(x, y); // new Point2D(x, y)
        this.z = z;
    };
    // overwrite - write over some previously defined method
    position(): string { // this should be called toString actually...
        return `${super.position()} z: ${this.z}` // template string + super method
    }
}