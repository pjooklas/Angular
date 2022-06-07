import { Injectable } from '@angular/core';
import { Task } from '../models/taskList';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  public tasks:Task[]=[];

  constructor() { 
    this.tasks.push(new Task("Išnešti šiukšles", "Rutininis"));
    this.tasks.push(new Task("Išvalyti kambarius", "Rutininis"));
    this.tasks.push(new Task("Nupirkti kačių maisto", "Skubus"));
  }

  public addTask(taskName: string, taskType:string){
    this.tasks.push(new Task(taskName, taskType));
  }
}
