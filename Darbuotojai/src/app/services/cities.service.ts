import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  private readonly url='https://darbuotojai-da15a-default-rtdb.europe-west1.firebasedatabase.app/';

  public citiesUpdated=new EventEmitter();

  constructor(private http:HttpClient) { }

  public addCity(city:string){
    return this.http.post(this.url+"cities.json", {city:city}).pipe(tap((response)=>{
      this.citiesUpdated.emit();
    }))
  }

  public getCities(){
    return this.http.get<{[key:string]:{city:string}}>(this.url+"cities.json").pipe(map((response)=>{
      let result:{city:string}[]=[];
      for (let key in response){
        result.push( {city:response[key].city} );
      } 
      return result;
    }));
  }
}
