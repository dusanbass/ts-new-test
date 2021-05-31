"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point2D = void 0;
var Point2D = /** @class */ (function () {
    function Point2D(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = x;
        this.y = y;
    }
    ;
    Point2D.prototype.position = function () {
        return "x: " + this.x + " y: " + this.y;
    };
    ;
    return Point2D;
}());
exports.Point2D = Point2D;
//# sourceMappingURL=Point2D.js.map