import { Component, OnInit } from '@angular/core';
import { Inventorizacija } from 'src/app/models/inventorizacija';
import { InventorizacijaService } from 'src/app/services/inventorizacija.service';

@Component({
  selector: 'app-inventorizacija-list',
  templateUrl: './inventorizacija-list.component.html',
  styleUrls: ['./inventorizacija-list.component.css']
})
export class InventorizacijaListComponent implements OnInit {

  public inventorizacijos:Inventorizacija[]=[];

  constructor(private inventorizacijaService:InventorizacijaService) { }

  public loadInventorizacija(){
    this.inventorizacijaService.getInventorizacijos().subscribe((response)=>{
      this.inventorizacijos=response;
    })
  }

  ngOnInit(): void {
    this.loadInventorizacija();
  }

  public deleteInventorizacija(id:string|undefined){
    if (id!=undefined){
      this.inventorizacijaService.deleteInventorizacija(id).subscribe(()=>{
        this.loadInventorizacija();
      })
    }

  }

}
