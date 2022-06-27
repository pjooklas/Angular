export interface Receptas{
    id?:string;
    pavadinimas:string;
    gaminimo_laikas:number;
    aprasymas:string;
    nuotrauka:string;
    kalorijos:number;
    alergenai:string[];
    ingridientai:{produkto_pavadinimas:string, kiekis:number, matavimo_vnt:string}[];
}