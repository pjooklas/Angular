import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

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
      'kalorijos':new FormControl(null)
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

}
