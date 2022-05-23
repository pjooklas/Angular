/*
Sukurkite rodyklės (lambda) funkciją kuriai įvestumėte du skaičius ir
kuri grąžintų tų skaičių bendrą didžiausią daliklį (BDD) Pvyzdžiui jei
funkcijai paduodami kintamieji: n = 5, m = 3, tai f-ja turi grąžinti bdd = 1.
Išbandykite funkciją. Funkcijos kintamiesiems ir grąžinamoms reikšmėms nurodykite tipus.
*/
var bdd = function (x, y) {
    var i = Math.min(x, y);
    while (!(x % i == 0 && y % i == 0)) {
        i++;
    }
    return i;
};
console.log(bdd(21, 3));
console.log(bdd(20, 5));
