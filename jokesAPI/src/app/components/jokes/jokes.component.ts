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

  constructor(
    private jokeService:JokesService
  ) { }

    private loadJoke(){
      this.jokeService.getJoke().subscribe((result)=>{
        this.joke=result;
        
      })
    }

  ngOnInit(): void {
    this.loadJoke();
  }

  public nextJoke(){
    this.loadJoke();
  }


}
