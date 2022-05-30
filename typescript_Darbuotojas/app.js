"use strict";
class Darbuotojas {
    constructor(_vardas, _pavarde, _atlyginimas) {
        this._vardas = _vardas;
        this._pavarde = _pavarde;
        this._atlyginimas = _atlyginimas;
    }
    set vardas(value) {
        this._vardas = value;
    }
    get vardas() {
        return this._vardas;
    }
    set pavarde(value) {
        this.pavarde = value;
    }
    get pavarde() {
        return this.pavarde;
    }
    set atlyginimas(value) {
        this.atlyginimas = value;
    }
    get atlyginimas() {
        return this.atlyginimas;
    }
    gpm() {
        return this._atlyginimas * 0.2;
    }
    psd() {
        return this._atlyginimas * 0.0698;
    }
    vsd() {
        return this._atlyginimas * 0.1252;
    }
}
let d1 = new Darbuotojas("Algirdas", "Benaitis", 1000);
let d2 = new Darbuotojas("Mykolas", "Maironis", 850);
let d3 = new Darbuotojas("Juozas", "Brazauskas", 1200);
let darbuotojai = [];
darbuotojai.push(d1, d2, d3);
console.log(darbuotojai);
console.log(d1.gpm());
console.log(d1.psd());
console.log(d1.vsd());
