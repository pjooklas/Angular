"use strict";
class Preke {
    constructor(_pavadinimas, _kaina, _kiekis) {
        this._pavadinimas = _pavadinimas;
        this._kaina = _kaina;
        this._kiekis = _kiekis;
    }
    get pavadinimas() {
        return this._pavadinimas;
    }
    set pavadinimas(value) {
        this._pavadinimas = value;
    }
    get kiekis() {
        return this._kiekis;
    }
    set kiekis(value) {
        this._kiekis = value;
    }
    get kaina() {
        return this._kaina;
    }
    set kaina(value) {
        this._kaina = value;
    }
    get suma() {
        return this._kaina * this._kiekis;
    }
    kainaSuPVM() {
        return this._kaina * 1.21;
    }
}
class PrekeKnyga extends Preke {
    kainaSuPVM() {
        return this.kaina * 1.09;
    }
}
class PrekeVaistai extends Preke {
    kainaSuPVM() {
        return this.kaina * 1.05;
    }
}
let krepselis = [];
krepselis.push(new Preke("Dviratis", 280, 1));
krepselis.push(new Preke("Kede", 25, 2));
krepselis.push(new PrekeKnyga("Knyga: Dievu Miskas", 20, 1));
krepselis.push(new PrekeVaistai("Aspirinas", 5, 3));
let sumaBePVM = 0;
let sumaSuPVM = 0;
krepselis.forEach((preke, i) => {
    console.log(i + 1 + ". " + preke.pavadinimas + "\t" + preke.kaina + "EUR\t" + preke.kainaSuPVM().toFixed(2) + "EUR");
    sumaBePVM += preke.kaina * preke.kiekis;
    sumaSuPVM += preke.kainaSuPVM() * preke.kiekis;
});
console.log("Be PVM ", sumaBePVM);
console.log("Su PVM ", sumaSuPVM);
