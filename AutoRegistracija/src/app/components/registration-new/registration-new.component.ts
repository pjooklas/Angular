import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-registration-new',
  templateUrl: './registration-new.component.html',
  styleUrls: ['./registration-new.component.css']
})
export class RegistrationNewComponent implements OnInit {

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
