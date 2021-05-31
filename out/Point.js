"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=Point.js.map