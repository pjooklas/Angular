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
    toString() {
        return `[${this._x}; ${this._y}]`;
    }
    distance(p) {
        return Math.sqrt((this._x - p.x) ** 2 + (this._y - p.y) ** 2);
    }
}
class Line {
    constructor(_p1, _p2) {
        this._p1 = _p1;
        this._p2 = _p2;
    }
    get p1() {
        return this._p1;
    }
    set p1(value) {
        this._p1 = value;
    }
    get p2() {
        return this._p2;
    }
    set p2(value) {
        this._p2 = value;
    }
    toString() {
        return `${this._p1.toString()} - ${this._p2.toString()}`;
    }
    distance() {
        return this._p1.distance(this._p2);
    }
}
let p1 = new Point(5, 3);
let p2 = new Point(2, 8);
let line = new Line(p1, p2);
console.log(line.toString());
console.log(line.distance());
// p1.print();
// console.log(p1.distanceFromOrigin());
// p1.translate(2,1);
// console.log(p2.distance(p1));
