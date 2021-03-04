import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Task } from '../../models/task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-see-all-task',
  templateUrl: './see-all-task.page.html',
  styleUrls: ['./see-all-task.page.scss'],
})
export class SeeAllTaskPage implements OnInit {

  task: Task[];
  constructor(
    private taskService: TaskService,
    private router: Router,
    private menu: MenuController
  ) { }

  ngOnInit() {
    this.getAllTask();

    if (localStorage.getItem("isAdmin") == "false"){
      this.router.navigateByUrl("home")
    }
  }

  toggleMenu(){
    this.menu.open();
  }

  endATask(id: number){
    this.taskService.endStage(id);
  }

  addTask(){
    this.router.navigateByUrl("create-task")
  }
  getAllTask(){
    console.log("getAllTask");
    
    this.taskService.getTask().subscribe(( task : any) => {
      console.log(task);
      this.task = task["result"];
      console.log(this.task)
      
    });
  }

  deleteTask(id: number){
    this.taskService.deleteTask(id);
    window.location.reload();
  }

}
