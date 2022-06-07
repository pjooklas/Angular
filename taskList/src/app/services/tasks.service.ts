import { Injectable } from '@angular/core';
import { Task } from '../models/taskList';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  public tasks:Task[]=[];

  constructor() { 
  }

  public addTask(taskName: string, taskType:string){
    this.tasks.push(new Task(taskName, taskType));
    this.saveTasks();
  }

  public deleteTask(n:number){
    this.tasks.splice(n, 1);
    this.saveTasks();
  }

  public loadTasks(){
    let data =  localStorage.getItem("tasks");
    if (data!=null) {
      this.tasks = JSON.parse(data);
    }
  }

  public saveTasks(){
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }
}
