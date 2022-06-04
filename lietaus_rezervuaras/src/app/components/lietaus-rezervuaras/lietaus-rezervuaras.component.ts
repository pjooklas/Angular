import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lietaus-rezervuaras',
  templateUrl: './lietaus-rezervuaras.component.html',
  styleUrls: ['./lietaus-rezervuaras.component.css']
})
export class LietausRezervuarasComponent implements OnInit {

  public talpa:number|null=null;
  public greitis:number|null=null;
  public laikas:number|null=null;
  public uzpildymas:number=0;
  public uzpildymasTekstu:string="";

  constructor() { }

  ngOnInit(): void {
  }

  public skaiciuotiUzpildyma(){
    if (this.talpa!=0 && this.talpa!=null &&
        this.greitis!=0 && this.greitis!=null &&
        this.laikas!=0 && this.laikas!=null) {
      this.uzpildymas=+(((this.greitis*this.laikas/this.talpa)*100).toFixed(2));
      if (this.uzpildymas<80) this.uzpildymasTekstu="Rezervuara dar galima pildyti";
      if (this.uzpildymas>=80 && this.uzpildymas<=100) this.uzpildymasTekstu="Rezervuaras kritiskai uzpildytas";
      if (this.uzpildymas>100) this.uzpildymasTekstu="Rezervuaras perpildytas";
    }
  }

}
