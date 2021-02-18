import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../models/login'
import { CentralUService } from '../services/central-u.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user: Login[]
  loginForm: FormGroup;

  constructor(public fb: FormBuilder,
    private centralUService: CentralUService,
    private router: Router
   
  ) {  
    this.loginForm = this.fb.group({
      username: [''],
      password: ['']

  })}

  ngOnInit() {
   
  }

  onFormSubmit(){
    if (!this.loginForm.valid) {
      return false;
    } else {
      let user = {
        username: this.loginForm.value.username,
        password: this.loginForm.value.password,
    

      }
      this.centralUService.loginUser(user)
      this.router.navigateByUrl("home")
      
        }
  }


  

}
