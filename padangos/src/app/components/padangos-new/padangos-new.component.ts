import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Padanga } from 'src/app/model/padanga';
import { PadangosService } from 'src/app/services/padangos.service';

@Component({
  selector: 'app-padangos-new',
  templateUrl: './padangos-new.component.html',
  styleUrls: ['./padangos-new.component.css']
})
export class PadangosNewComponent implements OnInit {

  public mark:string='';
  public diameter:number=16;
  public quantity:number=0;

  constructor(
    private padangosService:PadangosService, 
    private router:Router
    ) { }

  ngOnInit(): void {
  }

  public addPadanga(){
    let padanga=new Padanga(this.mark, this.diameter, this.quantity);
    this.padangosService.addPadanga(padanga).subscribe(()=>{
      this.router.navigate(['/']);
    })
  }

}
