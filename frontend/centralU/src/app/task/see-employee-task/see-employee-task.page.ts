import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-see-employee-task',
  templateUrl: './see-employee-task.page.html',
  styleUrls: ['./see-employee-task.page.scss'],
})
export class SeeEmployeeTaskPage implements OnInit {
 
  task: Task[];

  constructor(
    private taskService: TaskService
  ) { }

  ngOnInit() {
   this.getEmployeeTask();
  }

  getEmployeeTask() {

    this.taskService.getTaskAboutAEmployee().subscribe((task: any) => {
      console.log(task);
      this.task = task["result"];
      console.log(this.task)

    });
  }

}
