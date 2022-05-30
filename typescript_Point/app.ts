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

    public distance(p:Point):number{
        return Math.sqrt((this._x-p.x)**2 + (this._y-p.y)**2);
    }

}

let p1:Point= new Point(5,3);
let p2:Point= new Point(2,8);

p1.print();
console.log(p1.distanceFromOrigin());

p1.translate(2,1);

console.log(p2.distance(p1));

