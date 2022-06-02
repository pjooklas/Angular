function reverseArray<T>(array:T[]):T[]{
    const n:T[]=[];
    array.forEach(element => {
        n.unshift(element);
    });
    return n;
}

let arr:number[]=[1,2,3,4,5,6,7,8,9];
console.log(reverseArray(arr));
let arr2:string[]=["vienas", "du", "trys"];
console.log(reverseArray(arr2));


function shuffleArray<T>(array:T[]):T[]{
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    return array;
}


console.log(shuffleArray(arr));


