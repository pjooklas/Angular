/*
Sukurkite rodyklės (lambda) funkciją, kuriai paduotumėte tašką (vieną kintamąjį kurio tipas būtų point type, 
    turintis du atributus x,y). Funkcija turi grąžinti atstumą nuo koordinačių pradžios taško (0,0) iki taško. 
    Jis apskaičiuojamas ištraukus šaknį iš taško koordinačių pakeltų kvadratu sumos: sqrt(x^2+y^2).
*/

type Point={
    x:number;
    y:number;
}

let taskoAtstumas=(taskas:Point):number => {
    return Math.sqrt(taskas.x**2 + taskas.y**2);
}

let point1={
    x:1,
    y:2
}

console.log(taskoAtstumas(point1)); //2.236....
