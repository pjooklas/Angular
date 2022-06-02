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
        this._pavarde = value;
    }
    get pavarde() {
        return this._pavarde;
    }
    set atlyginimas(value) {
        this._atlyginimas = value;
    }
    get atlyginimas() {
        return this._atlyginimas;
    }
    get gpm() {
        return this._atlyginimas * 0.2;
    }
    get psd() {
        return this._atlyginimas * 0.0698;
    }
    get vsd() {
        return this._atlyginimas * 0.1252;
    }
}
class PirmaeilisDarbuotojas extends Darbuotojas {
    constructor(vardas, pavarde, atlyginimas) {
        super(vardas, pavarde, atlyginimas);
        this._npd = 0;
        this.perskaiciuotiNPD();
    }
    set atlyginimas(value) {
        this._atlyginimas = value;
        this.perskaiciuotiNPD();
    }
    get gpm() {
        return (this._atlyginimas - this._npd) * 0.2;
    }
    perskaiciuotiNPD() {
        if (this._atlyginimas >= 1678) {
            this._npd = 400 - 0.18 * (this._atlyginimas - 642);
        }
        else if (this._atlyginimas >= 730) {
            this._npd = 460 - 0.26 * (this._atlyginimas - 730);
        }
        else {
            this._npd = 460;
        }
        return this._npd;
    }
}
class PraktikantasDarbuotojas extends Darbuotojas {
    constructor(vardas, pavarde) {
        super(vardas, pavarde, 0);
    }
    set atlyginimas(value) {
        this._atlyginimas = 0;
    }
    get atlyginimas() {
        return 0;
    }
    get gpm() {
        return 0;
    }
    get psd() {
        return 0;
    }
    get vsd() {
        return 0;
    }
}
let darbuotojai = [];
darbuotojai.push(new Darbuotojas("Andrius", "Bukauskas", 1000));
darbuotojai.push(new PirmaeilisDarbuotojas("Jonas", "Jonaitis", 800));
darbuotojai.push(new PraktikantasDarbuotojas("Marius", "Kazlauskas"));
darbuotojai.forEach(element => {
    console.log(element.vardas + " " + element.gpm);
});
