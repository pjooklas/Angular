import { Component, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormArray, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { IngridientaiService } from 'src/app/services/ingridientai.service';
import { ReceptaiServiceService } from 'src/app/services/receptai-service.service';

@Component({
  selector: 'app-naujas-receptas',
  templateUrl: './naujas-receptas.component.html',
  styleUrls: ['./naujas-receptas.component.css']
})
export class NaujasReceptasComponent implements OnInit {

  public receptoForma: FormGroup;
  public ingridientaiArr:{ingridientas:string}[]=[];

  constructor(
    private receptaiService:ReceptaiServiceService, 
    private ingridientaiService:IngridientaiService,
    private router:Router) 
    { 
    this.receptoForma=new FormGroup({
      'rekomenduojamas_laikas':new FormControl(null, 
        [Validators.required]),
      'pavadinimas':new FormControl(null, 
        [Validators.maxLength(30), Validators.required], this.patiekimoLaikoValidatorius()),
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

  private getIngridientai(){
    this.ingridientaiService.getIngridientai().subscribe((result)=>{
      this.ingridientaiArr=result;
    })
  }
  ngOnInit(): void {
    this.getIngridientai();
    this.ingridientaiService.ingridientaiUpdated.subscribe(()=>{
      this.getIngridientai();
    })
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

  patiekimoLaikoValidatorius():AsyncValidatorFn{
    return (control:AbstractControl):Observable<ValidationErrors|null>=>{
      return this.receptaiService.getReceptai().pipe( map((response)=>{
          let exist=false;
          response.forEach((receptas)=>{
            if (receptas.pavadinimas==control.value && receptas.rekomenduojamas_laikas==this.receptoForma.get('rekomenduojamas_laikas')?.value){
              exist=true;
            }
          });
          if (exist){
            // console.log("Tokiu laiku rekomenduojamas patiekti receptas jau egzistuoja");
            return {'error':"Tokiu laiku rekomenduojamas patiekti receptas jau egzistuoja"};
          }else{
            // console.log("no error");
            return null;
          }
      }))
    }
  }

  public outError(){
    let control=this.receptoForma.get('pavadinimas');
    if (control?.errors!=null){
      return (control.errors['error']);
    }
    return "";
  }

  //pasitikrinimui

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

  public newReceptas(){
    this.receptaiService.addReceptas(this.receptoForma.value).subscribe();
    this.router.navigate(['/']);
    // this.receptaiService.mealsCount(this.receptoForma.value.rekomenduojamas_laikas);
  }

}
