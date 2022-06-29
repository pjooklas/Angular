import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Receptas } from 'src/app/models/receptas';

@Component({
  selector: 'app-receptai-item',
  templateUrl: './receptai-item.component.html',
  styleUrls: ['./receptai-item.component.css']
})
export class ReceptaiItemComponent implements OnInit {

  @Input() public receptas:Receptas|null=null;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  public receptasDetails(id?:string){
    if (id!=null){
      this.router.navigate(['receptas', id]);
    }
  }

}
