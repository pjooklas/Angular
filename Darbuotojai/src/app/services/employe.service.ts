import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employe } from '../models/employe';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {
  
  private readonly url='https://darbuotojai-da15a-default-rtdb.europe-west1.firebasedatabase.app/';

  constructor(private http:HttpClient) { }


  public addEmploye(employe:Employe){
    return this.http.post(this.url+"employes.json", employe);
  }

  public getEmploye(){
    return this.http.get<{[key:string]:Employe}>(this.url+"employes.json").pipe(
      map((response)=>{
        let employes:Employe[]=[];
        for (let key in response){
          employes.push({...response[key], id:key})
        }
        return employes;
      })
    )
  }

}
