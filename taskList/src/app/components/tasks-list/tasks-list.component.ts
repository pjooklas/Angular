import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/taskList';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {
  public tasks:Task[]=[];

  constructor() {
    this.tasks.push(new Task("Išnešti šiukšles", "Rutininis"));
    this.tasks.push(new Task("Išvalyti kambarius", "Rutininis"));
    this.tasks.push(new Task("Nupirkti kačių maisto", "Skubus"));
   }

  ngOnInit(): void {
  }

}
