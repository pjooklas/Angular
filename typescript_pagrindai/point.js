/*
Sukurkite rodyklės (lambda) funkciją, kuriai paduotumėte tašką (vieną kintamąjį kurio tipas būtų point type,
    turintis du atributus x,y). Funkcija turi grąžinti atstumą nuo koordinačių pradžios taško (0,0) iki taško.
    Jis apskaičiuojamas ištraukus šaknį iš taško koordinačių pakeltų kvadratu sumos: sqrt(x^2+y^2).
*/
var taskoAtstumas = function (taskas) {
    return Math.sqrt(Math.pow(taskas.x, 2) + Math.pow(taskas.y, 2));
};
var point1 = {
    x: 1,
    y: 2
};
console.log(taskoAtstumas(point1)); //
