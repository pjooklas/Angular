import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Padanga } from '../model/padanga';

@Injectable({
  providedIn: 'root'
})
export class PadangosService {

  constructor(private http:HttpClient) { }

  public getPadangos(){
    return this.http.get<{[key:string]:Padanga}>(environment.firebaseUrl+"padangos.json").pipe(
      map((response)=>{
        let result:Padanga[]=[];
        for (let key in response){
          result.push({...response[key], id:key});
        }
        return result;
      })
    );
  }

  public getPadanga(id:string){
    return this.http.get<Padanga>(environment.firebaseUrl+"padangos/"+id+".json").pipe(
      map((response)=>{
        response.id=id;
        return response;
      })
    )
  }

  public addPadanga(padanga:Padanga){
    return this.http.post(environment.firebaseUrl+"padangos.json", padanga);
  }

  public updatePadanga(padanga:Padanga){
    return this.http.patch(environment.firebaseUrl+"padangos/"+padanga.id+".json", padanga);
  }

  public deletePadanga(id:string){
    return this.http.delete(environment.firebaseUrl+"padangos/"+id+".json");
  }
}
