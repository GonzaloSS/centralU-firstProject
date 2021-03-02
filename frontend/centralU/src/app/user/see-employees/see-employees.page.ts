import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { EmployeeService } from 'src/app/services/employee.service';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-see-employees',
  templateUrl: './see-employees.page.html',
  styleUrls: ['./see-employees.page.scss'],
})
export class SeeEmployeesPage implements OnInit {
  user: User[];

  constructor(
    private userService: EmployeeService,
    private TaskService: TaskService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAllUsers();
  }
  getAllUsers(){
    console.log("getAllTask");
    
    this.userService.getUsers().subscribe(( user : any) => {
      console.log(user);
      this.user = user["result"];
      console.log(this.user)
      
    });
  }

  newTask(id: number){
    this.TaskService.setUserId(id);
    this.router.navigateByUrl("create-task")
  }



}
