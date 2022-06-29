import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employe } from 'src/app/models/employe';
import { EmployeService } from 'src/app/services/employe.service';

@Component({
  selector: 'app-employe-details',
  templateUrl: './employe-details.component.html',
  styleUrls: ['./employe-details.component.css']
})
export class EmployeDetailsComponent implements OnInit {

  public employe:Employe|null=null;

  constructor(
    public employeService:EmployeService, 
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    let id=this.route.snapshot.params['id'];
    this.employe=this.employeService.getEmployee(id);
  }

  public increaseCompletedWorks(id?:string){
    if (id!=null){
      this.employeService.increaseCompletedWorks(id);
      this.router.navigate(["/"]);
    }
  }

}
