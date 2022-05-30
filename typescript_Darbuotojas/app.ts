class Darbuotojas {
    constructor(
        private _vardas:string, 
        private _pavarde:string, 
        private _atlyginimas:number){
    }

    set vardas(value:string){
        this._vardas=value;
    }
    get vardas(){
        return this._vardas;
    }

    set pavarde(value:string){
        this.pavarde=value;
    }
    get pavarde(){
        return this.pavarde;
    }

    set atlyginimas(value:string){
        this.atlyginimas=value;
    }
    get atlyginimas(){
        return this.atlyginimas;
    }
    
    public gpm(){
        return this._atlyginimas * 0.2;
    }

    public psd(){
        return this._atlyginimas * 0.0698;
    }

    public vsd(){
        return this._atlyginimas * 0.1252;
    }

}

let d1:Darbuotojas = new Darbuotojas("Algirdas", "Benaitis", 1000);
let d2:Darbuotojas = new Darbuotojas("Mykolas", "Maironis", 850);
let d3:Darbuotojas = new Darbuotojas("Juozas", "Brazauskas", 1200);
let darbuotojai:any[]=[];
darbuotojai.push(d1, d2, d3);
console.log(darbuotojai);

console.log(d1.gpm());
console.log(d1.psd());
console.log(d1.vsd());


