import { Component, OnInit } from '@angular/core';
import { AbstractControl, Form, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

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
      'email': new FormControl(null, [Validators.email, Validators.required]),
      'phones': new FormArray([]),
      'addresses': new FormArray([])
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

  public addPhone(){
    const phone=new FormControl(null, Validators.required);
    (<FormArray> this.employeForm.get('phones')).push(phone);

    //(this.employeForm.get('phones') as FormArray).push

  }

  public phones(){
    return (<FormArray> this.employeForm.get('phones')).controls;
  }

  public addAddress(){
    const address=new FormGroup({
      city:new FormControl(null,Validators.required),
      street:new FormControl(null, Validators.required)
    });
    (<FormArray> this.employeForm.get('addresses')).push(address);
  }

  public addresses(){
    return (<FormArray> this.employeForm.get('addresses')).controls;
  }

  public abstractToFormGroup(formGroup:AbstractControl){
    return <FormGroup>formGroup;
  }

}
