class Preke{
    constructor(
        private _pavadinimas:string,
        private _kaina:number,
        private _kiekis:number
    ){

    }

    get pavadinimas(){
        return this._pavadinimas;
    }

    set pavadinimas(value:string){
        this._pavadinimas=value;
    }

    get kiekis(){
        return this._kiekis;
    }

    set kiekis(value:number){
        this._kiekis=value;
    }

    get kaina(){
        return this._kaina;
    }

    set kaina(value:number){
        this._kaina=value;
    }

    get suma(){
        return this._kaina * this._kiekis;
    }

    public kainaSuPVM(){
        return this._kaina * 1.21;
    }

}

const tableBody = document.getElementById("tableBody");
const sandelioVerte = document.getElementById("sandelioVerte");
let sandelis:Preke[]=[];

let sandelioSuma=(sandelis:Preke[])=>{
    let suma=0;
    sandelis.forEach((preke)=>{
        let prekesSuma = preke.kaina*preke.kiekis;
        suma+=prekesSuma;
    });
    return suma;
}

const showSandelis=()=>{
    sandelis.forEach((preke)=>{
        const tr=document.createElement("tr");
        let td=document.createElement("td");
        td.textContent=preke.pavadinimas;
        tr.appendChild(td);

        td=document.createElement("td");
        td.textContent=preke.kaina.toString();
        tr.appendChild(td);

        td=document.createElement("td");
        td.textContent=preke.kiekis.toString();
        tr.appendChild(td);

        td=document.createElement("td");
        td.textContent=preke.suma.toString();
        tr.appendChild(td);

        tableBody?.appendChild(tr);
    });

    if (sandelioVerte!=null) {
        sandelioVerte.textContent=sandelioSuma(sandelis).toString();
    }
}



sandelis.push(new Preke("Obuoliai", 1.10, 10));
sandelis.push(new Preke("Duona", 2, 5));
sandelis.push(new Preke("Pienas", 1.5, 3));
console.log(sandelis);
console.log(sandelioSuma(sandelis));

showSandelis();


