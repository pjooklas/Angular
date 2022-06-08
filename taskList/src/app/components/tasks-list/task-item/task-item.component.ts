import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/models/taskList';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task:Task|null=null;
  @Input() index:number=0;

  @Output() taskDelete=new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  deleteTask(){
    this.taskDelete.emit(this.index);
  }
}
