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

  private getReceptai(){
    this.receptaiService.getReceptas().subscribe((response)=>{
      this.receptai=response;
    });
  }

  ngOnInit(): void {
    this.getReceptai();
    this.receptaiService.onNaujasReceptas.subscribe(()=>{
      this.getReceptai();
    })
    this.receptaiService.onNewLike.subscribe(()=>{
      this.getReceptai();
    })
  }

  public increaseLikes(id?:string){
    if (id!=null) {
      this.receptaiService.increaseLikes(id);
    }
  }

}
