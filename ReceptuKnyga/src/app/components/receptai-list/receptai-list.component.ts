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
  public receptaiDisplay:Receptas[]=[];
  public filterPusryciai:boolean=false;
  public filterPriespieciai:boolean=false;
  public filterPietus:boolean=false;
  public filterVakariene:boolean=false;

  constructor(private receptaiService:ReceptaiServiceService) { }

  private filterReceptai(){
    this.receptaiDisplay=[];
    this.receptai.forEach((receptas)=>{ 
      if (this.filterPusryciai==true && receptas.rekomenduojamas_laikas=="pusryciai") {
        this.receptaiDisplay.push(receptas);
      };
      if (this.filterPriespieciai==true && receptas.rekomenduojamas_laikas=="priespieciai") {
        this.receptaiDisplay.push(receptas);
      };
      if (this.filterPietus==true && receptas.rekomenduojamas_laikas=="pietus") {
        this.receptaiDisplay.push(receptas);
      };
      if (this.filterVakariene==true && receptas.rekomenduojamas_laikas=="vakariene") {
        this.receptaiDisplay.push(receptas);
      };
    })

  }

  private getReceptai(){
    this.receptaiService.getReceptai().subscribe((response)=>{
      this.receptai=response;
      this.filterReceptai();
    });
  }

  public filter(){
    this.filterReceptai();
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
