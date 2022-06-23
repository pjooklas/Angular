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

  ngOnInit(): void {
    this.employesService.getEmploye().subscribe((response)=>{
      this.employes=response;
    })
  }

}
