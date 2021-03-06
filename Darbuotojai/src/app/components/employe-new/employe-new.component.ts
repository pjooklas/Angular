import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, Form, FormArray, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { delay, map, Observable, of } from 'rxjs';
import { CitiesService } from 'src/app/services/cities.service';
import { EmployeService } from 'src/app/services/employe.service';

@Component({
  selector: 'app-employe-new',
  templateUrl: './employe-new.component.html',
  styleUrls: ['./employe-new.component.css'],
  animations:[
    trigger("blokelis",
      [
         state("pirma", style({
          'background-color':'#ff0000',
          transform:'translateX(-200px)',
          height:'50px',
          width:'50px',
         })),
         state("antra", style({
           'background-color':'#00ff00',
           transform:'translateX(100px)',
           height:'100px',
           width:'100px',
         })),
         transition('pirma=>antra',[
            animate(1000, style({
              transform:'translateX(100px)',
              'background-color':'#00ff00',
            })),
            animate(1000)
         ]),
         transition('antra=>pirma',[
            animate(1000, style({
              height:'1000px',
              width:'1000px',
            })),
            animate(500)
         ])
      ]
    ),

  ]
})

export class EmployeNewComponent implements OnInit {

  public employeForm: FormGroup;
  public cities:{city:string}[]=[];
  public busena="pirma";

  constructor(private employeService:EmployeService, private citiesService:CitiesService) {
    this.employeForm=new FormGroup({
      'name': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(16), this.uzdraustiVardai]),
      'surname': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(16)]),
      'gender': new FormControl('male'),
      'email': new FormControl(null, [Validators.email, Validators.required], this.emailAvailable()),
      'phones': new FormArray([]),
      'addresses': new FormArray([])
    })
   }

   private getCities(){
    this.citiesService.getCities().subscribe((result)=>{
      this.cities=result;
    })
  }

  ngOnInit(): void {
    this.citiesService.getCities().subscribe((result)=>{
      this.cities=result;
    });
  }


  uzdraustiVardai(control:FormControl):{[s:string]:boolean}|null{
    if (control.value=='Jonas') {
      return {'VardasNegalimas':true}
    } else {
      return null;
    }
  }

  emailAvailable():AsyncValidatorFn{
    return (control:AbstractControl):Observable<ValidationErrors|null>=>{
      return this.employeService.getEmploye().pipe( map((response)=>{
        let exist = false;
        response.forEach((employe)=>{
          if (employe.email==control.value){
            exist = true;
          }
        });
        if (exist) {
          return {"Toks el. pastas egzistuoja":true};
        } else {
          return null;
        }
      }));
    }
  }

  public outError(){
    let control=this.employeForm.get('email');
    if (control?.errors!=null){
      return (control.errors['error']);
    }
    return "";
  }


  public newEmploye(){
    this.employeService.addEmploye(this.employeForm.value).subscribe();
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

  public animuoti(){
    if (this.busena=="pirma"){
      this.busena="antra";
    } else {
      this. busena="pirma";
    }
  }

}
