class Point{

    constructor(private _x:number, private _y:number){       
    }

    set x(value:number){
        this._x=value;
    }

    get x():number{
        return this._x;
    }

    set y(value:number){
        this._y=value;
    }

    get y():number{
        return this._y;
    }

    public distanceFromOrigin():number{
        return Math.sqrt(this._x**2 + this._y**2);
    }

    public translate(dx:number, dy:number):void{
        this._x+=dx;
        this._y+=dy;
        this.print();
    }

    public print(){
        console.log(`[${this._x}; ${this._y}]`);        
    }
    public toString(){
        return `[${this._x}; ${this._y}]`;        
    }

    public distance(p:Point):number{
        return Math.sqrt((this._x-p.x)**2 + (this._y-p.y)**2);
    }

}

class Line{
    constructor(private _p1:Point, private _p2:Point){
        }

    get p1(){
        return this._p1;
    }
    set p1(value: Point){
        this._p1=value;
    }

    get p2(){
        return this._p2;
    }
    set p2(value: Point){
        this._p2=value;
    }

    public toString(){
       return `${this._p1.toString()} - ${this._p2.toString()}`;        
    }

    public distance(){
        return this._p1.distance(this._p2);
    }
}

let p1:Point= new Point(5,3);
let p2:Point= new Point(2,8);

let line:Line = new Line(p1, p2);
console.log(line.toString());
console.log(line.distance());


// p1.print();
// console.log(p1.distanceFromOrigin());

// p1.translate(2,1);

// console.log(p2.distance(p1));

