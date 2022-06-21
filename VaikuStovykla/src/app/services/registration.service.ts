import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Registration } from '../models/registration';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class RegistrationService {

  private readonly url:string='https://vaikustovykla-fe62d-default-rtdb.europe-west1.firebasedatabase.app/';

  constructor(private http:HttpClient, private authService:AuthService) { }

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

  public getRegistration(id:string){
    return this.http.get<Registration>(this.url+"stovykla/"+id+".json").pipe(
      map((response)=>{
        response.id=id;
        return response;
      })
    )
  }

  public updateRegistration(registration:Registration){
    return this.http.patch(this.url+"stovykla/"+registration.id+".json?auth="+this.authService.user?.idToken, registration);
  }

  public deleteRegistration(id:string){
    return this.http.delete(this.url+"stovykla/"+id+".json");
  }

}
