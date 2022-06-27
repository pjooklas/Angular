import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Receptas } from '../models/receptas';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReceptaiServiceService {

  // public onNaujasReceptas = new EventEmitter;

  private readonly url='https://receptuknyga-491ea-default-rtdb.europe-west1.firebasedatabase.app/';

  constructor(private http:HttpClient) { }

  public addReceptas(receptas: Receptas){
    // this.onNaujasReceptas.emit();
    return this.http.post(this.url+"receptai.json", receptas);
  }

  public getReceptas(){
    return this.http.get<{[key:string]:Receptas}>(this.url+"receptai.json").pipe(
      map((response)=>{
        let receptai:Receptas[]=[];
        for (let key in response){
          receptai.push({...response[key], id:key})
        }
        return receptai;
      })
    )
  }
}
