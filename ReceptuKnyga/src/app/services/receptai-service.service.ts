import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Receptas } from '../models/receptas';
import { map, tap } from 'rxjs/operators';
import { MealsCount } from '../models/mealsCount';

@Injectable({
  providedIn: 'root'
})
export class ReceptaiServiceService {

  public onNaujasReceptas = new EventEmitter();
  public onNewLike = new EventEmitter();
  public mealsCount:MealsCount[]=[];
  public pusryciai:number = 0;
  public priespieciai:number = 0;
  public pietus:number = 0;
  public vakariene:number = 0;


  private readonly url='https://receptuknyga-491ea-default-rtdb.europe-west1.firebasedatabase.app/';

  constructor(private http:HttpClient) { }

  public addReceptas(receptas: Receptas){
    this.getReceptas().subscribe((result)=> {
      for (let meal of result) {
        switch (meal.rekomenduojamas_laikas) {
          case "pusryciai" : this.pusryciai++
          break
          case "priespieciai" : this.priespieciai++
          break
          case "pietus" : this.pietus++
          break
          case "vakariene" : this.vakariene++
        }
      }
      this.addMealCount({"pusryciai":this.pusryciai, "priespieciai": this.priespieciai, "pietus": this.pietus, "vakariene": this.vakariene}).subscribe((result)=> {
      })
    })

    return this.http.post(this.url+"receptai.json", receptas).pipe(tap((response)=>{
      this.onNaujasReceptas.emit();
    }));
  }

  public addMealCount(mealsCount: MealsCount) {
    return this.http.post(this.url + 'mealsCount.json', mealsCount)
  }

  public getRecipecount(){
    return this.http.get<{[key:string]:MealsCount}>(this.url+"recipecount.json",).pipe(
      map((response)=>{
        let recipes:MealsCount[]=[];
        for (let key in response){
          recipes.push({...response[key]});
        }
        return recipes;
      })
    )
  }


  public getReceptas(){
    return this.http.get<{[key:string]:Receptas}>(this.url+"receptai.json").pipe(
      map((response)=>{
        let receptai:Receptas[]=[];
        for (let key in response){
          receptai.push({...response[key], id:key})
        }
        return receptai;
      })
    )
  }

  public increaseLikes(id:string){
    let likes=0;

    this.http.get<number>(this.url+"receptai/"+ id +"/likes.json").subscribe((response)=>{
      console.log(response);
      likes=response;
      likes++;
      this.http.patch(this.url+"receptai/"+ id +".json", {likes:likes}).subscribe((response)=>{
        console.log(response);
        this.onNewLike.emit();
      });
    })
  }

}
