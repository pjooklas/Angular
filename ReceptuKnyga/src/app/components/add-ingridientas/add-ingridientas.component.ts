import { Component, OnInit } from '@angular/core';
import { IngridientaiService } from 'src/app/services/ingridientai.service';

@Component({
  selector: 'app-add-ingridientas',
  templateUrl: './add-ingridientas.component.html',
  styleUrls: ['./add-ingridientas.component.css']
})
export class AddIngridientasComponent implements OnInit {

  public ingridientas:string='';

  constructor(private ingridientaiService:IngridientaiService) { }

  ngOnInit(): void {
  }

  public addIngridentas(){
    this.ingridientaiService.addIngridientas(this.ingridientas).subscribe(()=>{
      this.ingridientas="";
    });

  }

}
