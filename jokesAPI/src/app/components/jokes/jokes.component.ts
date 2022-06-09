import { Component, OnInit } from '@angular/core';
import { Joke } from 'src/app/models/joke';
import { JokesService } from 'src/app/services/jokes.service';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css']
})
export class JokesComponent implements OnInit {

  public joke:Joke|null=null;
  public loading=true;
  public error=false;

  constructor(
    private jokeService:JokesService
  ) { }

    private loadJoke(){
      this.loading=true;
      this.jokeService.getJoke().subscribe({
        next:(result)=>{
          this.joke=result;
          this.loading=false;
        },
        error:(error)=>{
          console.log(error.status);
          this.error=true; 
        }
      });
    }

  ngOnInit(): void {
    this.loadJoke();
  }

  public nextJoke(){
    this.loadJoke();
  }


}
