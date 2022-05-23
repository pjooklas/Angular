/*
Sukurkime rodyklės (lambda) funkciją, kuriai paduotumėme du kintamuosius -
trupmenas (kiekvienas kintamojo tipas būtų trupmena type, turintis du atributus skaitiklis, daliklis).
Funkcija turi grąžinti šių dviejų trupmenų sudėties rezultatą -  skaičių.
*/
var trupmenuSudetis = function (x, y) {
    var sk1 = x.skaitiklis / x.daliklis;
    var sk2 = y.skaitiklis / y.daliklis;
    return sk1 + sk2;
};
var t1 = { skaitiklis: 2, daliklis: 3 };
var t2 = { skaitiklis: 1, daliklis: 3 };
console.log(trupmenuSudetis(t1, t2));
