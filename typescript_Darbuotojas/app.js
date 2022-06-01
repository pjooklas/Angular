"use strict";
class Darbuotojas {
    constructor(_vardas, _pavarde, _atlyginimas) {
        this._vardas = _vardas;
        this._pavarde = _pavarde;
        this._atlyginimas = _atlyginimas;
    }
    set vardas(value) {
        this._vardas = value;
    }
    get vardas() {
        return this._vardas;
    }
    set pavarde(value) {
        this._pavarde = value;
    }
    get pavarde() {
        return this._pavarde;
    }
    set atlyginimas(value) {
        this._atlyginimas = value;
    }
    get atlyginimas() {
        return this._atlyginimas;
    }
    get gpm() {
        return this._atlyginimas * 0.2;
    }
    get psd() {
        return this._atlyginimas * 0.0698;
    }
    get vsd() {
        return this._atlyginimas * 0.1252;
    }
}
const tableBody = document.getElementById("tableBody");
const tableFooter = document.getElementById("tableFooter");
const inputVardas = document.getElementById("inputVardas");
const inputPavarde = document.getElementById("inputPavarde");
const inputAtlyginimas = document.getElementById("inputAtlyginimas");
const buttonPrideti = document.getElementById("buttonPrideti");
let darbuotojai = [];
const showDarbuotojai = () => {
    if (tableBody != null)
        tableBody.innerHTML = "";
    let atlyginimuSuma = 0;
    let gpmSuma = 0;
    let psdSuma = 0;
    let vsdSuma = 0;
    darbuotojai.forEach((darbuotojas) => {
        atlyginimuSuma += darbuotojas.atlyginimas;
        gpmSuma += darbuotojas.gpm;
        psdSuma += darbuotojas.psd;
        vsdSuma += darbuotojas.vsd;
        const tr = document.createElement("tr");
        let td = document.createElement("td");
        td.textContent = darbuotojas.vardas + " " + darbuotojas.pavarde;
        tr.appendChild(td);
        td = document.createElement("td");
        td.textContent = darbuotojas.atlyginimas + " EUR";
        tr.appendChild(td);
        td = document.createElement("td");
        td.textContent = darbuotojas.gpm + " EUR";
        tr.appendChild(td);
        td = document.createElement("td");
        td.textContent = darbuotojas.psd + " EUR";
        tr.appendChild(td);
        td = document.createElement("td");
        td.textContent = darbuotojas.vsd + " EUR";
        tr.appendChild(td);
        tableBody === null || tableBody === void 0 ? void 0 : tableBody.appendChild(tr);
    });
    if (tableFooter != null)
        tableFooter.innerHTML = "";
    let td = document.createElement("td");
    td.innerHTML = `Viso darbuotoju: <span class="fw-bold">${darbuotojai.length}</span>`;
    tableFooter === null || tableFooter === void 0 ? void 0 : tableFooter.appendChild(td);
    td = document.createElement("td");
    td.innerHTML = atlyginimuSuma + " EUR";
    tableFooter === null || tableFooter === void 0 ? void 0 : tableFooter.appendChild(td);
    td = document.createElement("td");
    td.innerHTML = gpmSuma + " EUR";
    tableFooter === null || tableFooter === void 0 ? void 0 : tableFooter.appendChild(td);
    td = document.createElement("td");
    td.innerHTML = psdSuma + " EUR";
    tableFooter === null || tableFooter === void 0 ? void 0 : tableFooter.appendChild(td);
    td = document.createElement("td");
    td.innerHTML = vsdSuma + " EUR";
    tableFooter === null || tableFooter === void 0 ? void 0 : tableFooter.appendChild(td);
};
const pridetiPreke = () => {
    if (inputVardas != null && inputPavarde != null && inputAtlyginimas != null) {
        darbuotojai.push(new Darbuotojas(inputVardas.value, inputPavarde.value, inputAtlyginimas.valueAsNumber));
        localStorage.setItem("darbuotojai", JSON.stringify(darbuotojai));
        inputVardas.value = "";
        inputPavarde.value = "";
        inputAtlyginimas.value = "";
        showDarbuotojai();
    }
};
const uzkrautiDarbuotojus = () => {
    let jsonString = localStorage.getItem("darbuotojai");
    if (jsonString != null) {
        let data = JSON.parse(jsonString);
        data.forEach((d) => {
            darbuotojai.push(new Darbuotojas(d._vardas, d._pavarde, d._atlyginimas));
        });
        console.log(darbuotojai);
    }
};
uzkrautiDarbuotojus();
showDarbuotojai();
if (buttonPrideti != null) {
    buttonPrideti.onclick = pridetiPreke;
}
