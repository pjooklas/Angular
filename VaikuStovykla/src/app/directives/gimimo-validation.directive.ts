import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[gimimoValidation]',
  providers:[
    {
      provide:NG_VALIDATORS,
      useExisting:GimimoValidationDirective,
      multi:true
    }
  ]
})
export class GimimoValidationDirective {

  constructor() { }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    let value:number=control.value;
    if (value>=2010 && value<=new Date().getFullYear()){
      return null;
    }else{
      return {error:"klaida"};
    }
   
  }

}
