import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employe } from 'src/app/models/employe';

@Component({
  selector: 'app-employe-item',
  templateUrl: './employe-item.component.html',
  styleUrls: ['./employe-item.component.css']
})
export class EmployeItemComponent implements OnInit {

  @Input() public employe:Employe|null=null;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  public employeDetails(id?:string){
    if (id!=null){
      this.router.navigate(['employe', id]);
    }
  }

}
