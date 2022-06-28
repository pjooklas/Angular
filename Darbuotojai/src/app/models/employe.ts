export interface Employe{
    id?:string;
    name:string;
    surname:string;
    gender:string;
    email:string;
    completedWorks:number;
    phones:string[];
    addresses:{city:string, street:string}[];
}