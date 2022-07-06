export class Inventorizacija {

    constructor(
        public numeris:number,
        public pavadinimas:string,
        public pradine_kaina:number,
        public isigyjimo_data:Date,
        public id?:string
    ) {
        
    }
}