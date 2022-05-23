

let kaina = 5;
let antkainis = 2;

isvestiKainaSuAntkainiu(kaina, antkainis);

let x:number;
let y:boolean;
let z:string|null; //null jei neegzistuoja/neivestas

let t:String; //wrapper
z="Labas";
t="Viso";
//z=t negalima priskirti, nes t yra wrapperis

let h:number[];
let p:string[];
let k:any[];
let o:number|string[];

enum Spalvos {
    Red,
    Green,
    Blue
};
let u:Spalvos;
u = Spalvos.Blue;
 
function isvestiKainaSuAntkainiu (kaina:number, antkainis:number):void{  //void reiskia bet ka, buna po default'u
    console.log("Kainuos " + (kaina + antkainis)+ " EUR");    
}

let isv= (kaina:number, antkainis:number) =>{
    console.log("Kainuos " + (kaina + antkainis)+ " EUR");    
}

isv(8,9);


//type sukuria kintamojo tipa
type Darbuotojas = {
    vardas:string;
    pavarde:string;
    amzius:number;
}

let vardas:string;
let pavarde:string;

let jonas:Darbuotojas={
    vardas: "Jonas",
    pavarde: "Jonaitis",
    amzius: 30
};
jonas.pavarde = "NeJonaitis";
console.log(jonas, jonas.pavarde);


let imonesDarbuotojai:Darbuotojas[];
