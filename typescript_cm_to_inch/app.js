"use strict";
const inputCm = document.getElementById("inCm");
const btnToInch = document.getElementById("btnToInch");
const outInch = document.getElementById("inch");
const cmToInchRatio = 2.54;
const konvertuotiIColius = () => {
    if (inputCm != null && outInch != null) {
        let cm = inputCm.valueAsNumber;
        let inch = cm / cmToInchRatio;
        outInch.innerHTML = inch.toFixed(2);
    }
};
if (btnToInch != null) {
    btnToInch.onclick = konvertuotiIColius;
}
