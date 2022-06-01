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
const inputVardas=<HTMLInputElement>document.getElementById("inputVardas");
const inputPavarde=<HTMLInputElement>document.getElementById("inputPavarde");
const inputAtlyginimas=<HTMLInputElement>document.getElementById("inputAtlyginimas");
const buttonPrideti=document.getElementById("buttonPrideti");
let darbuotojai:Darbuotojas[]=[];

const showDarbuotojai=()=>{
    if (tableBody!=null) tableBody.innerHTML="";
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
    if (tableFooter!=null) tableFooter.innerHTML="";
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


const pridetiPreke=()=>{
    if (inputVardas!=null && inputPavarde!=null && inputAtlyginimas!=null){
        darbuotojai.push(new Darbuotojas(inputVardas.value, inputPavarde.value, inputAtlyginimas.valueAsNumber) );
        localStorage.setItem("darbuotojai", JSON.stringify(darbuotojai));
        inputVardas.value="";
        inputPavarde.value="";
        inputAtlyginimas.value="";
        showDarbuotojai();
    }
}

interface dataDarbuotojas{
    _vardas:string,
    _pavarde:string,
    _atlyginimas:number
}

const uzkrautiDarbuotojus=()=>{
    let jsonString=localStorage.getItem("darbuotojai");
    if (jsonString!=null){
        let data=<dataDarbuotojas[]> JSON.parse(jsonString);
       
        data.forEach((d)=>{
            darbuotojai.push(new Darbuotojas(d._vardas, d._pavarde, d._atlyginimas));
        });
       
        console.log(darbuotojai);
    }
}


uzkrautiDarbuotojus();
showDarbuotojai();

if (buttonPrideti!=null){
    buttonPrideti.onclick=pridetiPreke;
}

