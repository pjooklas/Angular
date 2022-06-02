class Darbuotojas {
    constructor(
        protected _vardas:string, 
        protected _pavarde:string, 
        protected _atlyginimas:number){
    }

    set vardas(value:string){
        this._vardas=value;
    }
    get vardas(){
        return this._vardas;
    }

    set pavarde(value:string){
        this._pavarde=value;
    }
    get pavarde(){
        return this._pavarde;
    }

    set atlyginimas(value:number){
        this._atlyginimas=value;
    }
    get atlyginimas(){
        return this._atlyginimas;
    }
    
    get gpm(){
        return this._atlyginimas * 0.2;
    }

    get psd(){
        return this._atlyginimas * 0.0698;
    }

    get vsd(){
        return this._atlyginimas * 0.1252;
    }
}

class PirmaeilisDarbuotojas extends Darbuotojas {
    public _npd: number=0;

    constructor(
        vardas: string,
        pavarde: string,
        atlyginimas: number
        ){
            super(vardas, pavarde, atlyginimas);
            this.perskaiciuotiNPD();
        }
        
    override set atlyginimas(value:number){
        this._atlyginimas=value;
        this.perskaiciuotiNPD();
    }

    override get gpm(): number {
        return (this._atlyginimas-this._npd)*0.2;
    }

    private perskaiciuotiNPD(){
        if (this._atlyginimas >= 1678) {          
            this._npd = 400-0.18*(this._atlyginimas-642);
        } else if (this._atlyginimas >= 730) {            
            this._npd = 460-0.26*(this._atlyginimas-730);
        } else {
            this._npd = 460;
        }
        return this._npd;
    }
}

class PraktikantasDarbuotojas extends Darbuotojas{

    constructor(
        vardas: string,
        pavarde: string,
        ){
            super(vardas, pavarde, 0);
        }

    override set atlyginimas(value:number){
        this._atlyginimas=0;
    }
    override get atlyginimas(){
        return 0;
    }
    
    override get gpm(){
        return 0;
    }

    override get psd(){
        return 0;
    }

    override get vsd(){
        return 0;
    }
}

let darbuotojai:Darbuotojas[]=[];
darbuotojai.push(new Darbuotojas("Andrius", "Bukauskas", 1000));
darbuotojai.push(new PirmaeilisDarbuotojas("Jonas", "Jonaitis", 800));
darbuotojai.push(new PraktikantasDarbuotojas("Marius", "Kazlauskas"));

darbuotojai.forEach(element => {
    console.log(element.vardas+ " "+ element.gpm);    
});


