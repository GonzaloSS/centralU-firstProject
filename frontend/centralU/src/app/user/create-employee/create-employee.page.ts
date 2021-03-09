import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { User } from 'src/app/models/user';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.page.html',
  styleUrls: ['./create-employee.page.scss'],
})
export class CreateEmployeePage implements OnInit {

  userForm: FormGroup;
  user: User[];
  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private fb: FormBuilder,
    private menu: MenuController
  ) {
    this.userForm = this.fb.group({
      name: [''],
      login: [''],
      function: [''],
      password: [''],

    })
  }

  ngOnInit(){

  }

  onFormSubmit() {
    if (!this.userForm.valid) {
      return false;
    } else {
      let user = {
        id: null,
        name: this.userForm.value.name,
        login: this.userForm.value.login,
        function: this.userForm.value.function,
        password: this.userForm.value.password,
        is_admin: null,
        db: null,
        session_id: null,
        user_id: null

      }
      console.log(user)
      this.employeeService.addUser(user)
      this.router.navigateByUrl("home")
    }
  }

  toggleMenu(){
    this.menu.open();
  }
}
