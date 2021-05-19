"use strict";
exports.__esModule = true;
exports.Point = void 0;
var Point = /** @class */ (function () {
    function Point(is) {
        this.is = is;
    }
    Point.prototype.exists = function () {
        console.log("This point " + (this.is ? 'exists.' : 'does not exist.'));
    };
    return Point;
}());
exports.Point = Point;
