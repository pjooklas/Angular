import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-new-kid',
  templateUrl: './new-kid.component.html',
  styleUrls: ['./new-kid.component.css']
})
export class NewKidComponent implements OnInit {

  constructor(private registrationService:RegistrationService, private router:Router) { }

  ngOnInit(): void {
  }

  public registrationSubmit(forma:any){
    console.log("Forma issiusta");
    this.registrationService.addRegistration(forma.form.value).subscribe(()=>{
      this.router.navigate(["/"]);
    });    
  }

}
