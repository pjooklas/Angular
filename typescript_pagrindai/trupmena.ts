/*
Sukurkime rodyklės (lambda) funkciją, kuriai paduotumėme du kintamuosius - 
trupmenas (kiekvienas kintamojo tipas būtų trupmena type, turintis du atributus skaitiklis, daliklis). 
Funkcija turi grąžinti šių dviejų trupmenų sudėties rezultatą -  skaičių.
*/

type Trupmena={
    skaitiklis: number;
    daliklis:number;
}

let trupmenuSudetis=(x:Trupmena, y:Trupmena):number=> {
    let sk1 = x.skaitiklis/x.daliklis;
    let sk2 = y.skaitiklis/y.daliklis;
    return sk1+sk2;
}

let t1:Trupmena={skaitiklis:2, daliklis:3};
let t2:Trupmena={skaitiklis:1, daliklis:3};

console.log(trupmenuSudetis(t1, t2));
