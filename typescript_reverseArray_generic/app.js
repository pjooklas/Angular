"use strict";
function reverseArray(array) {
    const n = [];
    array.forEach(element => {
        n.unshift(element);
    });
    return n;
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(reverseArray(arr));
let arr2 = ["vienas", "du", "trys"];
console.log(reverseArray(arr2));
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
console.log(shuffleArray(arr));
