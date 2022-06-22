import { Component, OnInit } from '@angular/core';
import { Registration } from 'src/app/models/registration';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-registration-list',
  templateUrl: './registration-list.component.html',
  styleUrls: ['./registration-list.component.css']
})
export class RegistrationListComponent implements OnInit {

  public registrations:Registration[]=[];
  public user:User|null=null;
  public showModal:boolean = false;
  public vaikoID:string = '';
  // public vaikoVardas:string|null = '';

  constructor(private registrationService:RegistrationService, private auth:AuthService) { }

  private loadRegistrations(){
    this.registrationService.getRegistrations().subscribe((result)=>{
      this.registrations=result;   
    });
  }

  ngOnInit(): void {
    this.loadRegistrations();
    this.user=this.auth.user;
    this.auth.userUpdated.subscribe(()=>{
    this.user=this.auth.user;
    })
  }

  public onDeleteRegistration(id:string|null) {
    this.showModal=true;
    if (id!=null) {
      this.vaikoID=id;
    }  
  }

  public onClose() {
    this.showModal = false;
  }

  public onDelete() {
    this.registrationService.deleteRegistration(this.vaikoID).subscribe(() => {
      this.showModal = false;
      this.loadRegistrations();
    });
  }

}
