"use strict";
/*
const output=document.getElementById("output");
const btnOutput=document.getElementById("btnOutput");
const inputText=<HTMLInputElement|null>document.getElementById("inText");

const isvedimas=()=>{
    if(output!=null && inputText!=null) {
       output.innerHTML=(inputText.valueAsNumber**2).toString();
    }
}

if (btnOutput!=null) {
    btnOutput.onclick= isvedimas;
}
*/
const svoris = document.getElementById("inSvoris");
const ugis = document.getElementById("inUgis");
const btnKMI = document.getElementById("btnKMI");
const outKMI = document.getElementById("kmi");
const skaiciuotiKMI = () => {
    if (svoris != null && ugis != null && outKMI != null) {
        let svorisVal = svoris.valueAsNumber;
        let ugisVal = ugis.valueAsNumber / 100;
        let kmi = svorisVal / (ugisVal ** 2);
        outKMI.innerHTML = kmi.toFixed(2);
    }
};
if (btnKMI != null) {
    btnKMI.onclick = skaiciuotiKMI;
}
