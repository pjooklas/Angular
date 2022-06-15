import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Registration } from '../models/registration';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private readonly url:string='https://vaikustovykla-fe62d-default-rtdb.europe-west1.firebasedatabase.app/';
  constructor(private http:HttpClient) { }

  public addRegistration(stovykla:Registration){
    return this.http.post(this.url+"stovykla.json", stovykla);
  }

  public getRegistrations(){
    return this.http.get<{[key:string]:Registration}>(this.url+"stovykla.json").pipe(
      map((response)=>{
        let result:Registration[]=[];
        for(let key in response) {
          result.push({...response[key], id:key});
        }
        return result;
      })
    )
  }

}
