"use strict";
exports.__esModule = true;
var Line = /** @class */ (function () {
    function Line() {
    }
    Line.prototype.y = function (x) {
        return this.m * x + this.b;
    };
    Line.prototype.create = function (m, b) {
        var _this = this;
        this.m = m;
        this.b = b;
        return function (x) { return _this.y(x); };
    };
    Line.prototype.crossTwoPoint = function (A, B) {
        var _this = this;
        this.m = (B.y - A.y) / (B.x - A.x);
        this.b = A.y - (this.m * A.x);
        return function (x) { return _this.y(x); };
    };
    Line.prototype.distanceFromPoint = function (A, m, b) {
        if (m === void 0) { m = null; }
        if (b === void 0) { b = null; }
        m = typeof m !== 'number' && !m ? this.m : m;
        b = typeof b !== 'number' && !b ? this.b : b;
        return (A.x * m + -1 * A.y + b) / (Math.sqrt((m ^ 2) + 1));
    };
    Line.prototype.neighboors = function (points, decimal) {
        var _this = this;
        if (decimal === void 0) { decimal = 0; }
        var options = {};
        var distances = {
            list: [],
            sum: 0,
            average: 0
        };
        points.forEach(function (point) {
            var d = _this.distanceFromPoint(point, _this.m, _this.b);
            distances.sum += d;
            if (decimal > 0)
                d = parseFloat(d.toFixed(decimal));
            distances.list.push(d);
        });
        distances.average = distances.sum / distances.list.length;
        return distances;
    };
    Line.distanceFromPoint = function (A, m, b) {
        return (A.x * m + -1 * A.y + b) / (Math.sqrt((m ^ 2) + 1));
    };
    Line.angle = function (line1, line2) {
        var teta = Math.atan(Math.abs((line2.m - line1.m) / (1 + line1.m * line2.m)));
        return (teta * 180) / Math.PI;
    };
    Line.twoLineDistance = function (line1, line2) {
        var d = (Math.abs(line2.b - line1.b)) / (Math.sqrt((line1.m ^ 2) + 1));
        return d;
    };
    return Line;
}());
exports.Line = Line;
