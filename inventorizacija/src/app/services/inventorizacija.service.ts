import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Inventorizacija } from '../models/inventorizacija';

@Injectable({
  providedIn: 'root'
})
export class InventorizacijaService {

  constructor(private http:HttpClient) { }

  public getInventorizacijos(){
    return this.http.get<{[key:string]:Inventorizacija}>(environment.firebaseURL+"inventorizacija.json").pipe(
      map((response)=>{
        let result:Inventorizacija[]=[];
        for (let key in response){
          result.push({...response[key], id:key})
        }
        return result;
      })
    )
  }

  public getInventorizacija(id:string){
    return this.http.get<Inventorizacija>(environment.firebaseURL+"inventorizacija/"+id+".json").pipe(
      map((response)=>{
        response.id=id;
        return response;
      })
    )
  }

  public addInventorizacija(padanga:Inventorizacija){
    return this.http.post(environment.firebaseURL+"inventorizacija.json", padanga);
  }

  public updateInventorizacija(padanga:Inventorizacija){
    return this.http.patch(environment.firebaseURL+"inventorizacija/"+padanga.id+".json",padanga);
  }

  public deleteInventorizacija(id:string){
    return this.http.delete(environment.firebaseURL+"inventorizacija/"+id+".json");
  }

}
