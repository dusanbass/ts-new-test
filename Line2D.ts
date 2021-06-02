/**
 * DOCUMENTATION AND LICENSE / NO LICENSE
 * idea is taken over from the: https://javascript.info/static-properties-methods
 * and math formula from the: https://www.wikihow.com/Use-Distance-Formula-to-Find-the-Length-of-a-Line
 */

import Point2D from "./Point2D"; // default import, it is not a destructure -> there is no { importVar }

export default class Line2D {
    a: Point2D;
    b: Point2D;
    constructor(a: Point2D, b: Point2D) {
        this.a = a;
        this.b = b;
    }
    getLength() {
        return Math.sqrt(Math.pow((this.a.x - this.b.x), 2) + Math.pow((this.a.y - this.b.y), 2))
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
    static compareLines(l1: Line2D, l2: Line2D) {
        return (l1.getLength() - l2.getLength()) > 0 ? true : false;
    }
}
