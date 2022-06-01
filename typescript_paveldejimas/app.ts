class htmlTag{

    private _textContent:string="";

    constructor (protected tag: string, protected cssClass:string){ 
    }

    set textContent(value:string){
        this._textContent=value;
    }
    get textContent():string{
        return this._textContent;
    }

    public toString():string{
        let cssClass=(this.cssClass!="")?"class='"+this.cssClass+"'":"";
        return "<"+this.tag+" "+cssClass+">"+this.textContent+"</"+this.tag+">"
    }
}


class TextAreaTag extends htmlTag {
    // private _name:string="";

    constructor(tag:string, cssClass:string, private _name:string){
        super(tag, cssClass);
    }

    set name(value:string){
        this._name=value;
    }
    get name():string{
        return this._name;
    }

    public override toString():string{
        let cssClass=(this.cssClass!="")?"class='"+this.cssClass+"'":"";
        let name=(this._name!="")?"name='"+this._name+"'":"";
        return "<"+this.tag+" "+name+" "+cssClass+">"+this.textContent+"</"+this.tag+">"
    }
}


let paragraph = new htmlTag("p", "simple");
paragraph.textContent="Labas";
console.log(paragraph.toString());

let textAreaTag = new TextAreaTag("textarea", "form-input", "description");
textAreaTag.textContent="ivedame";
console.log(textAreaTag.toString());

let p:htmlTag= new TextAreaTag("a", "b", "c");
console.log(p.toString());


