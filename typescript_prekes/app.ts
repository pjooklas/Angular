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

    set kaina(value){
        this._kaina=value;
    }

    get suma(){
        return this._kaina*this._kiekis;
    }

    public kainaSuPVM(){
        return this._kaina*1.21;
    }
}
const tableBody=document.getElementById("tableBody");
const sandelioVerte=document.getElementById("sandelioVerte");
const inputName=<HTMLInputElement>document.getElementById("inputName");
const inputKaina=<HTMLInputElement>document.getElementById("inputKaina");
const inputKiekis=<HTMLInputElement>document.getElementById("inputKiekis");
const buttonPrideti=document.getElementById("buttonPrideti");
let sandelis:Preke[]=[];

const sandelioSuma=(sandelis:Preke[])=>{
    let suma=0;
    sandelis.forEach((preke)=>{
        let prekesSuma=preke.kaina*preke.kiekis;
        suma+=prekesSuma;
    });
    return suma;
}

const showSandelis=()=>{
    if (tableBody!=null) tableBody.innerHTML="";
    sandelis.forEach((preke)=>{
        const tr=document.createElement("tr");
       
        let td=document.createElement("td");
        td.textContent=preke.pavadinimas;
        tr.appendChild(td);

        td=document.createElement("td");
        td.textContent=preke.kaina+" EUR";
        tr.appendChild(td);

        td=document.createElement("td");
        td.textContent=preke.kiekis.toString();
        tr.appendChild(td);

        td=document.createElement("td");
        td.textContent=preke.suma+" EUR";
        tr.appendChild(td);

        tableBody?.appendChild(tr);
    });  

    if (sandelioVerte!=null){
        sandelioVerte.textContent=sandelioSuma(sandelis).toString();
    }
}

const pridetiPreke=()=>{
    if (inputName!=null && inputKiekis!=null && inputKaina!=null){
        sandelis.push(new Preke(inputName.value, inputKaina.valueAsNumber, inputKiekis.valueAsNumber) );
        localStorage.setItem("krepselis", JSON.stringify(sandelis));
        inputName.value="";
        inputKaina.value="";
        inputKiekis.value="";
        showSandelis();
    }
}

interface dataPreke{
    _pavadinimas:string,
    _kaina:number,
    _kiekis:number
}

const uzkrautiSandeli=()=>{
    let jsonString=localStorage.getItem("krepselis");
    if (jsonString!=null){
        let data=<dataPreke[]> JSON.parse(jsonString);
       
        data.forEach((d)=>{
            sandelis.push(new Preke(d._pavadinimas,d._kaina,d._kiekis));
        });
       
        console.log(sandelis);
    }
}


uzkrautiSandeli();
showSandelis();

if (buttonPrideti!=null){
    buttonPrideti.onclick=pridetiPreke;
}