import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Inventorizacija } from 'src/app/models/inventorizacija';
import { InventorizacijaService } from 'src/app/services/inventorizacija.service';

@Component({
  selector: 'app-inventorizacija-new',
  templateUrl: './inventorizacija-new.component.html',
  styleUrls: ['./inventorizacija-new.component.css']
})
export class InventorizacijaNewComponent implements OnInit {

  public numeris:number=0;
  public pavadinimas:string='';
  public pradine_kaina:number=0;
  public isigyjimo_data:Date=new Date();

  constructor(
    private inventorizacijaService:InventorizacijaService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  public addInventorizacija(){
    let padanga=new Inventorizacija(this.numeris, this.pavadinimas, this.pradine_kaina, this.isigyjimo_data);

    this.inventorizacijaService.addInventorizacija(padanga).subscribe(()=>{
      this.router.navigate(['/']);
    });
  }

}
