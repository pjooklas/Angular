import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Receptas } from '../models/receptas';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReceptaiServiceService {

  public onNaujasReceptas = new EventEmitter();
  public onNewLike = new EventEmitter();

  private readonly url='https://receptuknyga-491ea-default-rtdb.europe-west1.firebasedatabase.app/';

  constructor(private http:HttpClient) { }

  public addReceptas(receptas: Receptas){
    return this.http.post(this.url+"receptai.json", receptas).pipe(tap((response)=>{
      this.onNaujasReceptas.emit();
    }));
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

  public increaseLikes(id:string){
    let likes=0;

    this.http.get<number>(this.url+"receptai/"+ id +"/likes.json").subscribe((response)=>{
      console.log(response);
      likes=response;
      likes++;
      this.http.patch(this.url+"receptai/"+ id +".json", {likes:likes}).subscribe((response)=>{
        console.log(response);
        this.onNewLike.emit();
      });
    })
  }

}
