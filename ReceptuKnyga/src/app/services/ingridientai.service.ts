import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IngridientaiService {

  private readonly url='https://receptuknyga-491ea-default-rtdb.europe-west1.firebasedatabase.app/';

  public ingridientaiUpdated=new EventEmitter();

  constructor(private http:HttpClient) { }

  public addIngridientas(ingridientas:string){
    return this.http.post(this.url+"ingridientai.json", {ingridientas:ingridientas}).pipe( tap((response)=>{
      this.ingridientaiUpdated.emit();
    }));
  }

  getIngridientai(){
    return this.http.get<{[key:string]:{ingridientas:string}}>(this.url+"ingridientai.json").pipe(map((response)=>{
      let result:{ingridientas:string}[]=[];
      for (let key in response){
        result.push( {ingridientas:response[key].ingridientas} );
      } 
      return result;
    }));
  }
}
