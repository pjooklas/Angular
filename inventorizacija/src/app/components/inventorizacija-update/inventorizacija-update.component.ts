import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Inventorizacija } from 'src/app/models/inventorizacija';
import { InventorizacijaService } from 'src/app/services/inventorizacija.service';

@Component({
  selector: 'app-inventorizacija-update',
  templateUrl: './inventorizacija-update.component.html',
  styleUrls: ['./inventorizacija-update.component.css']
})
export class InventorizacijaUpdateComponent implements OnInit {

  public id:string;
  public numeris:number=0;
  public pavadinimas:string='';
  public pradine_kaina:number=0;
  public isigyjimo_data:Date=new Date();

  constructor(
    private inventorizacijaService:InventorizacijaService,
    private route:ActivatedRoute,
    private router:Router
  ) {
    this.id=route.snapshot.params['id'];
   }

  ngOnInit(): void {

    this.inventorizacijaService.getInventorizacija(this.id).subscribe((response)=>{
      this.numeris=response.numeris;
      this.pavadinimas=response.pavadinimas;
      this.pradine_kaina=response.pradine_kaina;
      this.isigyjimo_data=response.isigyjimo_data;
    });
  }


  public updateInventorizacija(){
    let inventorizacija=new Inventorizacija(this.numeris, this.pavadinimas ,this.pradine_kaina, this.isigyjimo_data, this.id);
    this.inventorizacijaService.updateInventorizacija(inventorizacija).subscribe(()=>{
      this.router.navigate(["/"]);
    })
  }

}
