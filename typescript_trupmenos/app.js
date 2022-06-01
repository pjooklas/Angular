"use strict";
/*

let sveikojiDalis = 5;
let skaitiklis = 2;
let daliklis = 3;

let printTrupmena =(sveikojiDalis:number, skaitiklis:number, daliklis:number)=>{
    console.log(sveikojiDalis+" "+ skaitiklis + "/" + daliklis);
    }

console.log(printTrupmena(sveikojiDalis, skaitiklis, daliklis)  );
*/
class Trupmena {
    // public sveikojiDalis = 0;
    // public skaitiklis = 0;
    // public daliklis = 0;
    constructor(sveikojiDalis, skaitiklis, daliklis) {
        this.sveikojiDalis = sveikojiDalis;
        this.skaitiklis = skaitiklis;
        this.daliklis = daliklis;
        // this.sveikojiDalis=sveikojiDalis;
        // this. skaitiklis=skaitiklis;
        // this.daliklis= daliklis;
    }
    bdd() {
        let d = this.skaitiklis;
        while (this.skaitiklis % d != 0 || this.daliklis % d != 0) {
            d--;
        }
        return d;
    }
    prastinti() {
        let d = this.bdd();
        this.daliklis /= d;
        this.skaitiklis /= d;
        if (this.skaitiklis >= this.daliklis) {
            this.sveikojiDalis++;
            this.skaitiklis -= this.daliklis;
        }
    }
    prideti(aSkaitiklis, aDaliklis) {
        this.pridetiSSD(0, aSkaitiklis, aDaliklis);
    }
    pridetiTrupmena(t) {
        this.pridetiSSD(t.sveikojiDalis, t.skaitiklis, t.daliklis);
    }
    pridetiSSD(aSveikojiDalis, aSkaitiklis, aDaliklis) {
        this.sveikojiDalis += aSveikojiDalis;
        this.skaitiklis = this.skaitiklis + aDaliklis + aSkaitiklis * this.daliklis;
        this.daliklis = this.daliklis * aDaliklis;
        this.prastinti();
    }
    print() {
        console.log(this.sveikojiDalis + " " + this.skaitiklis + "/" + this.daliklis);
    }
    toString() {
        return this.sveikojiDalis + " " + this.skaitiklis + "/" + this.daliklis;
    }
    toDouble() {
        return this.sveikojiDalis + this.skaitiklis / this.daliklis;
    }
    /*
        public setSkaitiklis(aSkaitiklis:number){
            this.skaitiklis=aSkaitiklis;
            this.prastinti();
        }
    
        public getSkaitiklis():number{
            return this.skaitiklis;
        }
        */
    set Daliklis(value) {
        this.daliklis = value;
        this.prastinti();
    }
    get Daliklis() {
        return this.daliklis;
    }
    set Skaitiklis(value) {
        this.skaitiklis = value;
        this.prastinti();
    }
    get Skaitiklis() {
        return this.skaitiklis;
    }
    set SveikojiDalis(value) {
        this.sveikojiDalis = value;
    }
    get SveikojiDalis() {
        return this.sveikojiDalis;
    }
}
class Veiksmas {
    constructor(_t1, _v, _t2) {
        this._t1 = _t1;
        this._v = _v;
        this._t2 = _t2;
    }
    get t1() {
        return this._t1;
    }
    set t1(value) {
        this._t1 = value;
    }
    get t2() {
        return this._t2;
    }
    set t2(value) {
        this._t2 = value;
    }
    get v() {
        return this._v;
    }
    set v(value) {
        this._v = value;
    }
    toString() {
        return this._t1.toString() + " " + this._v + " " + this._t2.toString();
    }
    skaiciuoti() {
        switch (this._v) {
            case "+":
                return this._t1.toDouble() + this._t2.toDouble();
                break;
            case "-":
                return this._t1.toDouble() - this._t2.toDouble();
                break;
            case "*":
                return this._t1.toDouble() - this._t2.toDouble();
                break;
            case "/":
                return this._t1.toDouble() - this._t2.toDouble();
                break;
        }
        return 0;
    }
}
let t1 = new Trupmena(1, 1, 3);
t1.print();
let t2 = new Trupmena(2, 1, 3);
t2.print();
let v = new Veiksmas(t1, "+", t2);
let v2 = new Veiksmas(new Trupmena(1, 1, 2), "-", new Trupmena(1, 1, 3));
console.log(v.toString());
console.log(v2.skaiciuoti());
