import { Component, OnInit } from '@angular/core';
import { Employe } from 'src/app/models/employe';
import { EmployeService } from 'src/app/services/employe.service';

@Component({
  selector: 'app-employe-list',
  templateUrl: './employe-list.component.html',
  styleUrls: ['./employe-list.component.css']
})
export class EmployeListComponent implements OnInit {

  public employes:Employe[]=[]; 
  public employeesDisplay:Employe[]=[];
  public filterGender:number=0;
  public pasirinktas=false;

  constructor(private employesService:EmployeService) { }

  private filterEmpoyees(){
    this.employeesDisplay=[];
    this.employes.forEach((e)=>{
      if (this.filterGender==0) this.employeesDisplay.push(e);
      if (this.filterGender==1 && e.gender=="male") this.employeesDisplay.push(e);
      if (this.filterGender==2 && e.gender=="female") this.employeesDisplay.push(e);
    })
  }
  
  private getEmployes(){
    this.employesService.getEmploye().subscribe((response)=>{
      this.employes=response;
      this.filterEmpoyees();
    })
  }

  ngOnInit(): void {
    this.getEmployes();
    this.employesService.onIncreaseCompletedWork.subscribe(()=>{
      this.getEmployes();
    });
  }

  // public increaseCompletedWorks(id?:string){
  //   if (id!=null) {
  //     this.employesService.increaseCompletedWorks(id);
  //   }
  // }
  public filter(){
    this.filterEmpoyees();
  }
  
  public filter2(){
    console.log(this.pasirinktas)
  }

}
