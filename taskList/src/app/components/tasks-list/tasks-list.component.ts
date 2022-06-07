import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/taskList';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {
  public tasks:Task[]=[];

  constructor(private tasksService:TasksService ) {

   }

  ngOnInit(): void {
    this.tasks=this.tasksService.tasks;
  }

  public deleteTask(n:number){
    this.tasksService.deleteTask(n);
  }

}
