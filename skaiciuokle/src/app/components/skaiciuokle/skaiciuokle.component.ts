import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skaiciuokle',
  templateUrl: './skaiciuokle.component.html',
  styleUrls: ['./skaiciuokle.component.css']
})
export class SkaiciuokleComponent implements OnInit {

  public ugis:number|null=0;
  public svoris:number|null=0;
  public kmi:number=0;
  
  constructor() { }

  ngOnInit(): void {
  }

  public skaiciuotiKMI() {
    if (this.svoris!=0 && this.ugis!=0 && this.svoris!=null && this.ugis!=null) {
            this.kmi=+(this.svoris/((this.ugis/100)**2)).toFixed(2);
    }
  }

}
