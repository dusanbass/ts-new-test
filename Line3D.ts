/**
 * DOCUMENTATION AND LICENSE / NO LICENSE
 * idea is taken over from the: https://javascript.info/static-properties-methods
 * and math formula from the: https://brilliant.org/wiki/3d-coordinate-geometry-distance/
 */

import Point3D from "./Point3D";

export default class Line3D {
    a: Point3D;
    b: Point3D;
    constructor(a: Point3D, b: Point3D) {
        this.a = a;
        this.b = b;
    }
    getLength() {
        return Math.sqrt(Math.pow((this.a.x - this.b.x), 2) + Math.pow((this.a.y - this.b.y), 2) + Math.pow((this.a.z - this.b.z), 2))
    }
    toString() {
        return `Line: A[${this.a.position()}], B[${this.b.position()}]`;
    }
    /**
     * Static function from the Line2D class for comparing two lines.
     * @param l1 first line to compare
     * @param l2 second line to compare
     * @returns boolean - if first line is greater in length will return true
     */
    static compareLines(l1: Line3D, l2: Line3D) {
        return (l1.getLength() - l2.getLength()) > 0 ? true : false;
    }
}