import { Component, OnInit } from '@angular/core';
import { Padanga } from 'src/app/model/padanga';
import { PadangosService } from 'src/app/services/padangos.service';

@Component({
  selector: 'app-padangos-list',
  templateUrl: './padangos-list.component.html',
  styleUrls: ['./padangos-list.component.css']
})
export class PadangosListComponent implements OnInit {

  public padangos:Padanga[]=[];

  constructor(private padangosService:PadangosService) { }

  private uzkrautiPadangas(){
    this.padangosService.getPadangos().subscribe((response)=>{
      this.padangos=response;
    })
  }

  ngOnInit(): void {
   this.uzkrautiPadangas();
  }

  public deletePadanga(id:string|undefined){
    if (id!=undefined){
      this.padangosService.deletePadanga(id).subscribe(()=>{
        this.uzkrautiPadangas();
      })
    }
  }

}
