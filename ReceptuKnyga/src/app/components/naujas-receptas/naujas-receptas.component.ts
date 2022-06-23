import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-naujas-receptas',
  templateUrl: './naujas-receptas.component.html',
  styleUrls: ['./naujas-receptas.component.css']
})
export class NaujasReceptasComponent implements OnInit {

  public receptoForma: FormGroup

  constructor() { 
    this.receptoForma=new FormGroup({
      'pavadinimas':new FormControl(null, 
        [Validators.maxLength(30), Validators.required]),
      'gaminimo_laikas':new FormControl(null,
        [Validators.required, this.laikoValidatorius]),
      'aprasymas':new FormControl(null,
        [Validators.required]),
      'nuotrauka':new FormControl(null, 
        [this.urlValidatorius]),
      'kalorijos':new FormControl(null),
      'alergenai':new FormArray([]),
      'ingridientai':new FormArray([])
    })
  }

  ngOnInit(): void {
  }

  laikoValidatorius(control:FormControl):{[s:string]:boolean}|null{
    if (control.value % 5 || control.value<=0) {
      return {'LaikoIntervalaiTuriButiKas5min': true};
    } else {
      return null;
    }
  }

  urlValidatorius(control:AbstractControl):{[s:string]:boolean}|null{
    const regex=new RegExp("(((http://)|(https://)|(www))[-a-zA-Z0-9@:%_\+.~#?&//=]+)\.(jpg|jpeg|gif|png|bmp|tiff|tga|svg)");
    if (regex.test(control.value)) {
      return null;
    } else {
      return {'urlNevalidus': true};
    }
  }

  //pasitikrinimui
  public naujasReceptas(){
    console.log(this.receptoForma);
  }

  public pridetiAlergena(){
    const alergenas=new FormControl(null, Validators.required);
    (<FormArray> this.receptoForma.get('alergenai')).push(alergenas);
  }

  public alergenai(){
    return (<FormArray> this.receptoForma.get('alergenai')).controls;
  }

  public pasalintiAlergena(i:number){
    (<FormArray> this.receptoForma.get('alergenai')).removeAt(i);
  }

  public pridetiIngridienta(){
    const ingridientas=new FormGroup({
      produkto_pavadinimas:new FormControl(null,Validators.required),
      kiekis:new FormControl(null, Validators.required),
      matavimo_vnt:new FormControl(null, Validators.required)
    });
    (<FormArray> this.receptoForma.get('ingridientai')).push(ingridientas);
  }

  public pasalintiIngridienta(i:number){
    (<FormArray> this.receptoForma.get('ingridientai')).removeAt(i);
  }

  public ingridientai(){
    return (<FormArray> this.receptoForma.get('ingridientai')).controls;
  }

  public abstractToFormGroup(formGroup:AbstractControl){
    return <FormGroup>formGroup;
  }

}
