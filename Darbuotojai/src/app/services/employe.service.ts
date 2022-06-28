import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Employe } from '../models/employe';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {
  
  private readonly url='https://darbuotojai-da15a-default-rtdb.europe-west1.firebasedatabase.app/';
  
  public onIncreaseCompletedWork=new EventEmitter();

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

  public increaseCompletedWorks(id:string){
    let completedWorks=0;

    this.http.get<number>(this.url+"employes/"+ id +"/completedWorks.json").subscribe((response)=>{
      console.log(response);
      completedWorks=response;
      completedWorks++;
      this.http.patch(this.url+"employes/"+ id +".json", {completedWorks:completedWorks}).subscribe((response)=>{
        console.log(response);
        this.onIncreaseCompletedWork.emit();
      });
    })
  }

}
