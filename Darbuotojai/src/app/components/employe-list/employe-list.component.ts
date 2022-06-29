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

  constructor(private employesService:EmployeService) { }
  
  private getEmployes(){
    this.employesService.getEmploye().subscribe((response)=>{
      this.employes=response;
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

}
