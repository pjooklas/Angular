import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skaiciuokle',
  templateUrl: './skaiciuokle.component.html',
  styleUrls: ['./skaiciuokle.component.css']
})
export class SkaiciuokleComponent implements OnInit {

  public ugis:number|null=null;
  public svoris:number|null=null;
  public kmi:number=0;
  public kmiTekstu:string="";

  constructor() { }

  ngOnInit(): void {
  }

  public skaiciuotiKMI(){
    console.log(this.ugis);
    if (this.svoris!=0 && this.ugis!=null  && this.svoris!=null && this.ugis!=0){
      this.kmi=Number((this.svoris/((this.ugis/100)**2)).toFixed(2));
      if (this.kmi<25) this.kmiTekstu="Sveikiname!! Jūsų svoris normalus";
      if (this.kmi>=25 && this.kmi<30) this.kmiTekstu="Jūs turite antsvorio";
      if (this.kmi>30) this.kmiTekstu="Jūs turite viršsvorio";
    }
  }

}