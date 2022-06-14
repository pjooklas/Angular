import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-kid',
  templateUrl: './new-kid.component.html',
  styleUrls: ['./new-kid.component.css']
})
export class NewKidComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public registrationSubmit(forma:any){
    console.log("Forma issiusta");
    console.log(forma.form.value);    
  }

}
