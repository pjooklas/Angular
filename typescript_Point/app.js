"use strict";
class Point {
    constructor(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    set x(value) {
        this._x = value;
    }
    get x() {
        return this._x;
    }
    set y(value) {
        this._y = value;
    }
    get y() {
        return this._y;
    }
    distanceFromOrigin() {
        return Math.sqrt(this._x ** 2 + this._y ** 2);
    }
    translate(dx, dy) {
        this._x += dx;
        this._y += dy;
        this.print();
    }
    print() {
        console.log(`[${this._x}; ${this._y}]`);
    }
    distance(p) {
        return Math.sqrt((this._x - p.x) ** 2 + (this._y - p.y) ** 2);
    }
}
let p1 = new Point(5, 3);
let p2 = new Point(2, 8);
p1.print();
console.log(p1.distanceFromOrigin());
p1.translate(2, 1);
console.log(p2.distance(p1));
