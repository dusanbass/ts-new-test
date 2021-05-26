"use strict";
exports.__esModule = true;
exports.Line2D = void 0;
var Line2D = /** @class */ (function () {
    function Line2D(a, b) {
        this.a = a;
        this.b = b;
    }
    Line2D.prototype.getLength = function () {
        return Math.sqrt(Math.pow((this.a.x - this.b.x), 2) + Math.pow((this.a.y - this.b.y), 2));
    };
    Line2D.prototype.toString = function () {
        return "Line: A[" + this.a.position() + "], B[" + this.b.position() + "]";
    };
    /**
     * Static function from the Line2D class for comparing two lines.
     * @param l1 first line to compare
     * @param l2 second line to compare
     * @returns boolean - if first line is greater in length will return true
     */
    Line2D.compareLines = function (l1, l2) {
        return (l1.getLength() - l2.getLength()) > 0 ? true : false;
    };
    return Line2D;
}());
exports.Line2D = Line2D;
