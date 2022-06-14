import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[RegNumberValidator]',
  providers:[
    {
      provide: NG_VALIDATORS,
      useExisting: RegNumberValidatorDirective,
      multi: true
    }
  ]
})
export class RegNumberValidatorDirective implements Validator{

  constructor() { }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    let value:string=control.value;
    let pattern:RegExp=/^[a-z|A-Z]{3}[0-9]{3}$/;
    if (pattern.test(value)) {
      return null;
    } else {
      return {error: "klaida"};
    }
  }

}
