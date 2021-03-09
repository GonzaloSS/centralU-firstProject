import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Task } from 'src/app/models/task';
import { User } from 'src/app/models/user';
import { EmployeeService } from 'src/app/services/employee.service';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.page.html',
  styleUrls: ['./create-task.page.scss'],
})
export class CreateTaskPage implements OnInit {

  
  taskForm: FormGroup;
  task: Task[];
  user: User[];
  user_id: number;
  constructor(
    private taskService: TaskService,
    private router: Router,
    private fb: FormBuilder,
    private userService: EmployeeService
  ) {
    this.taskForm = this.fb.group({
      name: [''],
      description: [''],
      date_deadline:[''],
      user_id: ['']
    })
  }

  ngOnInit(){
    this.getAllUsers();
  }


  getAllUsers() {
    console.log("getAllTask");

    this.userService.getUsers().subscribe((user: any) => {
      console.log(user);
      this.user = user["result"];
      console.log(this.user)

    });
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
        user_id: this.taskForm.value.user_id,
        stage_id: null,
        stage_name: null

      }
 
      this.taskService.addTask(task)
      this.router.navigateByUrl("home")
      return task;
    }
  }
}
