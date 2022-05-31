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

const tableBody = document.getElementById("tableBody");
const tableFooter = document.getElementById("tableFooter");
let darbuotojai:Darbuotojas[]=[];

const showDarbuotojai=()=>{
    let atlyginimuSuma =0;
    let gpmSuma=0;
    let psdSuma=0;
    let vsdSuma=0;
    darbuotojai.forEach((darbuotojas)=>{
        atlyginimuSuma += darbuotojas.atlyginimas;
        gpmSuma += darbuotojas.gpm;
        psdSuma += darbuotojas.psd;
        vsdSuma += darbuotojas.vsd;

        const tr=document.createElement("tr");
        let td=document.createElement("td");
        td.textContent=darbuotojas.vardas + " " + darbuotojas.pavarde;
        tr.appendChild(td);

        td=document.createElement("td");
        td.textContent=darbuotojas.atlyginimas + " EUR";
        tr.appendChild(td);

        td=document.createElement("td");
        td.textContent=darbuotojas.gpm + " EUR";
        tr.appendChild(td);
        td=document.createElement("td");
        td.textContent=darbuotojas.psd + " EUR";
        tr.appendChild(td);
        td=document.createElement("td");
        td.textContent=darbuotojas.vsd + " EUR";
        tr.appendChild(td);

        tableBody?.appendChild(tr);
    });

        let td=document.createElement("td");
        td.innerHTML=`Viso darbuotoju: <span class="fw-bold">${darbuotojai.length}</span>`;
        tableFooter?.appendChild(td);

        td=document.createElement("td");
        td.innerHTML=atlyginimuSuma+ " EUR";
        tableFooter?.appendChild(td);

        td=document.createElement("td");
        td.innerHTML=gpmSuma + " EUR";
        tableFooter?.appendChild(td);

        td=document.createElement("td");
        td.innerHTML=psdSuma + " EUR";
        tableFooter?.appendChild(td);

        td=document.createElement("td");
        td.innerHTML=vsdSuma + " EUR";
        tableFooter?.appendChild(td);
}


darbuotojai.push(new Darbuotojas("Algirdas", "Benaitis", 1000));
darbuotojai.push(new Darbuotojas("Mykolas", "Maironis", 850));
darbuotojai.push(new Darbuotojas("Juozas", "Brazauskas", 1200));
console.log(darbuotojai);
showDarbuotojai();

