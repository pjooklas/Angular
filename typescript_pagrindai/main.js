var kaina = 5;
var antkainis = 2;
isvestiKainaSuAntkainiu(kaina, antkainis);
var x;
var y;
var z; //null jei neegzistuoja/neivestas
var t; //wrapper
z = "Labas";
t = "Viso";
//z=t negalima priskirti, nes t yra wrapperis
var h;
var p;
var k;
var o;
var Spalvos;
(function (Spalvos) {
    Spalvos[Spalvos["Red"] = 0] = "Red";
    Spalvos[Spalvos["Green"] = 1] = "Green";
    Spalvos[Spalvos["Blue"] = 2] = "Blue";
})(Spalvos || (Spalvos = {}));
;
var u;
u = Spalvos.Blue;
function isvestiKainaSuAntkainiu(kaina, antkainis) {
    console.log("Kainuos " + (kaina + antkainis) + " EUR");
}
var isv = function (kaina, antkainis) {
    console.log("Kainuos " + (kaina + antkainis) + " EUR");
};
isv(8, 9);
