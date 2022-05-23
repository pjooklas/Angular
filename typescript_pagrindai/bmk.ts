/*
Sukurkime rodyklės (lambda) funkciją, kuriai įvestumėme du skaičius 
ir kuri suskaičiuotų tų skaičių bendrą mažiausią kartotinį (mažiausią 
skaičių kuris dalinasi iš abiejų skaičių). Pvyzdžiui jei funkcijai 
paduodami kintamieji: n = 3, m = 6, tai f-ja turi grąžinti 12. 
Išbandykime sukurtą funkciją. Funkcijos kintamiesiems ir grąžinamoms 
reikšmėms nurodykime tipus.
*/

let bmk=(x:number, y:number):number => {
    let i = Math.max(x,y);
    while (!(i%x==0 && i%y==0)) {
        i++;
    }
    return i;
}

console.log(bmk(5,3));
console.log(bmk(2,8));


