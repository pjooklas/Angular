import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Registration } from 'src/app/models/registration';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-registration-edit',
  templateUrl: './registration-edit.component.html',
  styleUrls: ['./registration-edit.component.css']
})
export class RegistrationEditComponent implements OnInit {

  public registration:Registration=new Registration();
  public id:string='';
  public loading=true;
  public error=false;

  constructor(
    private registrationService:RegistrationService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.loading=true;
    this.id=this.route.snapshot.params['id'];
    this.registrationService.getRegistration(this.id).subscribe({
      next:(result)=>{
        this.registration=result;
        this.loading=false;
      },
      error:(error)=>{
        console.log(error.status);
        this.error=true; 
      }
    });
  }

  public onUpdate(){
    this.registrationService.updateRegistration(this.registration).subscribe({
      next:()=>{
        this.router.navigate(["/"]);
      },
      error:(error)=>{
        console.log(error.status);
        this.error=true; 
      }
    });
  }

}
