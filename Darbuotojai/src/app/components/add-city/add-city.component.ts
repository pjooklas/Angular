import { Component, OnInit } from '@angular/core';
import { CitiesService } from 'src/app/services/cities.service';

@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.css']
})
export class AddCityComponent implements OnInit {

  public city:string='';

  constructor(private citiesService:CitiesService) { }

  ngOnInit(): void {
  }

  public addCity(){
    this.citiesService.addCity(this.city).subscribe(()=>{
      this.city='';
    })
  }

}
