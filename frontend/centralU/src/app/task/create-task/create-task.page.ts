import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.page.html',
  styleUrls: ['./create-task.page.scss'],
})
export class CreateTaskPage implements OnInit {

  
  taskForm: FormGroup;
  task: Task[];
  user_id: number;
  constructor(
    private taskService: TaskService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.taskForm = this.fb.group({
      name: [''],
      description: [''],
      date_deadline:['']
    })
  }

  ngOnInit(){

  }

  onFormSubmit() {
    if (!this.taskForm.valid) {
      return false;
    } else {
      let task = {
        id: null,
        name : this.taskForm.value.name,
        description: this.taskForm.value.description,
        date_deadline: this.taskForm.value.date_deadline,
        project_id: null,
        user_id: null,
        stage_id: null,
        stage_name: null

      }
      
      this.user_id = this.taskService.getCurrentUser();
      console.log(this.user_id)
      console.log(task)
      this.taskService.addTask(this.user_id, task)
      this.router.navigateByUrl("home")
    }
  }
}
