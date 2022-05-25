const prekesPavadinimas = <HTMLInputElement|null>document.getElementById("prekesPavadinimas");
const prekesKiekis = <HTMLInputElement|null>document.getElementById("prekesKiekis");
const btnPrideti = document.getElementById("btnPrideti");
const pirkiniuSarasas = document.getElementById("pirkiniuSarasas");
const btnIstrintiPrekes = document.getElementById("deletePirkiniai");

let pirkiniai:any[]=[];

type Pirkinys={
    preke:string;
    kiekis:number;
}

const rodytiPrekes=()=>{
    if (pirkiniuSarasas!=null) {
        pirkiniuSarasas.innerHTML="";
       
        pirkiniai.forEach((pirkinys, i)=>{
            const li=document.createElement("li");
            li.className="list-group-item";
            li.textContent=pirkinys.preke+ ' ' +pirkinys.kiekis;
            const btn=document.createElement("button");
            btn.textContent="Trinti";
            btn.className="btn btn-danger float-end";
            btn.onclick=()=>{
                deletePirkinys(i);
            }
            li.appendChild(btn);
            pirkiniuSarasas.appendChild(li);
        });
    }
};

const deletePirkiniai=()=>{
    localStorage.removeItem("pirkiniuSarasas");
    pirkiniai=[];
    rodytiPrekes();
};

const deletePirkinys=(index:number)=>{
    pirkiniai.splice(index, 1);
    savePirkiniai();
    rodytiPrekes();
};

let jsonString= localStorage.getItem("pirkiniuSarasas");
if (jsonString!=null) {
    pirkiniai = JSON.parse(jsonString);
    rodytiPrekes();
}

const addTask=()=>{
    if (prekesPavadinimas!=null && prekesKiekis!=null && prekesPavadinimas.value!='' && prekesKiekis.value!=null) {
        let pirkinys:Pirkinys={preke:prekesPavadinimas.value, kiekis:prekesKiekis.valueAsNumber}
        pirkiniai.push(pirkinys);
        prekesPavadinimas.value="";
        prekesKiekis.value="";
        console.log(pirkiniai);
        savePirkiniai();
        rodytiPrekes();
    }
};

const savePirkiniai=()=>{
    localStorage.setItem("pirkiniuSarasas", JSON.stringify(pirkiniai));
};

if (btnPrideti!=null) {
    btnPrideti.onclick=addTask;
}

if (btnIstrintiPrekes!=null) {
    btnIstrintiPrekes.onclick=deletePirkiniai;
}