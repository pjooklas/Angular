import { Component, OnInit } from '@angular/core';
import { Receptas } from 'src/app/models/receptas';
import { ReceptaiServiceService } from 'src/app/services/receptai-service.service';

@Component({
  selector: 'app-receptai-list',
  templateUrl: './receptai-list.component.html',
  styleUrls: ['./receptai-list.component.css']
})
export class ReceptaiListComponent implements OnInit {

  public receptai:Receptas[]=[]; 

  constructor(private receptaiService:ReceptaiServiceService) { }

  ngOnInit(): void {
    this.receptaiService.getReceptas().subscribe((response)=>{
      this.receptai=response;
    })
  }

}
