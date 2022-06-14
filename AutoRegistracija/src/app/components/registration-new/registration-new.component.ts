import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration-new',
  templateUrl: './registration-new.component.html',
  styleUrls: ['./registration-new.component.css']
})
export class RegistrationNewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public registrationSubmit(forma:any){
    console.log("Forma issiusta");
    console.log(forma.form.value);    
  }

}
