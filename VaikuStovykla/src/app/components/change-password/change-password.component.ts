import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  public newPassword:string='';
  public newPasswordConfirm:string='';

  public error: string = '';

  private errorFunc=(response:any)=>{
    console.log(response);
    
    switch(response.error.error.message){
      case "INVALID_ID_TOKEN":
              this.error="Reikia prisijungti per naują, tokenas nebegalioja";
              break;
      case "WEAK_PASSWORD":
            this.error="Slaptažodis turi būti ne trumpesnis nei 6 simboliai";
            break;      
    }
  }

  constructor(private auth:AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  public onSubmit(form: NgForm){
    console.log('keiciame slaptazodi');
    this.auth.changePassword(form.value.newPassword).subscribe(() => {
      this.router.navigate(['/']);
    })
  }

}
