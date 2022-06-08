import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {
  public index:number=0;
  public taskName:string="";
  public taskType:string="";

  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private tasksService:TasksService
  ) { }

  ngOnInit(): void {
    this.index=this.route.snapshot.params['index'];
    this.taskName=this.tasksService.tasks[this.index].taskName;
    this.taskType=this.tasksService.tasks[this.index].taskType;
  }

  public updateTask(){
    this.tasksService.updateTask(this.index, this.taskName, this.taskType)
    this.router.navigate(["/"]);
}
}
