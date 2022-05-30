/*

let sveikojiDalis = 5;
let skaitiklis = 2;
let daliklis = 3;

let printTrupmena =(sveikojiDalis:number, skaitiklis:number, daliklis:number)=>{
    console.log(sveikojiDalis+" "+ skaitiklis + "/" + daliklis);
    }

console.log(printTrupmena(sveikojiDalis, skaitiklis, daliklis)  );
*/

class Trupmena{
    // public sveikojiDalis = 0;
    // public skaitiklis = 0;
    // public daliklis = 0;

    constructor (private sveikojiDalis:number, private skaitiklis:number, private daliklis:number){
        // this.sveikojiDalis=sveikojiDalis;
        // this. skaitiklis=skaitiklis;
        // this.daliklis= daliklis;
    }

    private bdd(){
        let d = this.skaitiklis;
        while (this.skaitiklis%d != 0 || this.daliklis%d != 0) {
            d--;
        }
        return d;
    }

    private prastinti(){
        let d=this.bdd();
        this.daliklis /= d;
        this.skaitiklis /=d;
        if (this.skaitiklis>=this.daliklis) {
            this.sveikojiDalis++;
            this.skaitiklis-=this.daliklis;
        }
    }
    
    public prideti(aSkaitiklis:number, aDaliklis:number) {
        this.pridetiSSD(0, aSkaitiklis, aDaliklis);
    }

    public pridetiTrupmena(t:Trupmena){
        this.pridetiSSD(t.sveikojiDalis, t.skaitiklis, t.daliklis);
    }

    public pridetiSSD(aSveikojiDalis:number, aSkaitiklis:number, aDaliklis:number){
        this.sveikojiDalis+=aSveikojiDalis;
        this.skaitiklis=this.skaitiklis + aDaliklis + aSkaitiklis * this.daliklis;
        this.daliklis= this.daliklis*aDaliklis;

        this.prastinti();
    }

    public print(){
        console.log(this.sveikojiDalis+" "+ this.skaitiklis + "/" + this.daliklis);
    }

    public toDouble(){
        return this.sveikojiDalis+this.skaitiklis/this.daliklis;
    }

/*
    public setSkaitiklis(aSkaitiklis:number){
        this.skaitiklis=aSkaitiklis;
        this.prastinti();
    }

    public getSkaitiklis():number{
        return this.skaitiklis;
    }
    */

   set Daliklis(value:number){
       this.daliklis=value;
       this.prastinti();
   }

   get Daliklis():number{
       return this.daliklis;
   }

   set Skaitiklis(value:number){
       this.skaitiklis=value;
       this.prastinti();
   }

   get Skaitiklis():number{
       return this.skaitiklis;
   }

   set SveikojiDalis(value:number){
       this.sveikojiDalis=value;
   }

   get SveikojiDalis():number{
    return this.sveikojiDalis;
}
   

}

let t1:Trupmena= new Trupmena(1,2,3);
t1.print();

let t2:Trupmena = new Trupmena(2, 1, 3);
t2.print();

t1.pridetiTrupmena(t2);
t1.print();

console.log(t1.toDouble());
