import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-see-my-own-task',
  templateUrl: './see-my-own-task.page.html',
  styleUrls: ['./see-my-own-task.page.scss'],
})
export class SeeMyOwnTaskPage implements OnInit {
  task: Task[];
  constructor(
    private taskService: TaskService
  ) { }

  ngOnInit() {
    this.getOwnTask();
  }


  getOwnTask(){
    console.log("getAllTask");
    
    this.taskService.getTaskByEmployee().subscribe(( task : any) => {
      console.log(task);
      this.task = task["result"];
      console.log(this.task)
      
    });
  }

}
