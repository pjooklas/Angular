import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Employe } from '../models/employe';
import {map} from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {
  
  private readonly url=environment.dbUrl;
  
  public onIncreaseCompletedWork=new EventEmitter();
  public employes:Employe[]=[];

  constructor(
    private http:HttpClient,
    private router:Router) { }


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
        this.employes=employes;
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

  public getEmployee(id:string):Employe|null{
    let result:Employe|null=null;
    this.employes.forEach((employe)=>{
      if (employe.id!=null && employe.id==id) {
        result=employe;
      }
    });
    if (result==null){
      this.router.navigate(["/"]);
    }
    return result;
  }

}
