import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-tasks-statistics',
  templateUrl: './tasks-statistics.component.html',
  styleUrls: ['./tasks-statistics.component.css']
})
export class TasksStatisticsComponent implements OnInit {
  public taskCount:number=0;
  public taskType:string="";

  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {
    this.calculateStatistics(); 

   this.tasksService.onTasksChange.subscribe(()=>{
     this.calculateStatistics(); 
   })
  }

  public calculateStatistics() {
    this.taskCount=this.tasksService.tasks.length;


    // this.tasksService.tasks.forEach((tsk)=>{
      
    //   switch (tsk.taskType) {
    //     case tsk.taskType=="Skubus":
    //       this.taskCount++;
      
    //     default:
    //       break;
    //   }

    // })

  }

}
