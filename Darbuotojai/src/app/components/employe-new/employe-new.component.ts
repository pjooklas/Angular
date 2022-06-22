import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employe-new',
  templateUrl: './employe-new.component.html',
  styleUrls: ['./employe-new.component.css']
})

export class EmployeNewComponent implements OnInit {

  public employeForm: FormGroup

  constructor( ) {
    this.employeForm=new FormGroup({
      'name': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(16), this.uzdraustiVardai]),
      'surname': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(16)]),
      'gender': new FormControl('male'),
      'email': new FormControl(null, [Validators.email, Validators.required])
    })
   }

  ngOnInit(): void {
  }

  uzdraustiVardai(control:FormControl):{[s:string]:boolean}|null{
    if (control.value=='Jonas') {
      return {'VardasNegalimas':true}
    } else {
      return null;
    }
  }

  public newEmploye(){
    console.log(this.employeForm);
    
  }

}
