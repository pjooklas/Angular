"use strict";
class htmlTag {
    constructor(tag, cssClass) {
        this.tag = tag;
        this.cssClass = cssClass;
        this._textContent = "";
    }
    set textContent(value) {
        this._textContent = value;
    }
    get textContent() {
        return this._textContent;
    }
    toString() {
        let cssClass = (this.cssClass != "") ? "class='" + this.cssClass + "'" : "";
        return "<" + this.tag + " " + cssClass + ">" + this.textContent + "</" + this.tag + ">";
    }
}
class TextAreaTag extends htmlTag {
    // private _name:string="";
    constructor(tag, cssClass, _name) {
        super(tag, cssClass);
        this._name = _name;
    }
    set name(value) {
        this._name = value;
    }
    get name() {
        return this._name;
    }
    toString() {
        let cssClass = (this.cssClass != "") ? "class='" + this.cssClass + "'" : "";
        let name = (this._name != "") ? "name='" + this._name + "'" : "";
        return "<" + this.tag + " " + name + " " + cssClass + ">" + this.textContent + "</" + this.tag + ">";
    }
}
let paragraph = new htmlTag("p", "simple");
paragraph.textContent = "Labas";
console.log(paragraph.toString());
let textAreaTag = new TextAreaTag("textarea", "form-input", "description");
textAreaTag.textContent = "ivedame";
console.log(textAreaTag.toString());
let p = new TextAreaTag("a", "b", "c");
console.log(p.toString());
