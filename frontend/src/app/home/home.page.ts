import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Contact } from '../models/contact';
import { Response } from '../models/incidencia';
import { Login } from '../models/login';
import { CentralUService } from '../services/central-u.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  isAdmin: boolean;
  session: boolean;
  user: Login[]
  loginForm: FormGroup;

  constructor(
    private centralService: CentralUService, 
    private route: Router,
    private fb: FormBuilder)  {  
      this.loginForm = this.fb.group({
        username: [''],
        password: ['']
  
    })}


  ngOnInit(){
    if(localStorage.getItem("session_id")){
      this.session = true
    }else{
      this.session = false
    }
    if(localStorage.getItem("isAdmin") == "true"){
      this.isAdmin = true
    }else{
      this.isAdmin = false
    }
  }


  onFormSubmit(){
    if (!this.loginForm.valid) {
      return false;
    } else {
      let user = {
        username: this.loginForm.value.username,
        password: this.loginForm.value.password,
    

      }
      this.centralService.loginUser(user)
      
      
 
      
      
        }
  }


  logOut(){
    this.centralService.logOut() 
  }

  ownTask(){
    this.route.navigateByUrl("see-own-tasks");
  }
  AllTask(){
    this.route.navigateByUrl("see-all-tasks");
  }
  warHouses(){
    console.log("Warhouses")
  }
  products(){
    this.route.navigateByUrl("products")
  }
  employees(){
    this.route.navigateByUrl("see-employees");
  }

 

goToAdd(){
  this.route.navigateByUrl("/add-incidencia");
}
goToContacts(){
  this.route.navigateByUrl("contacts")
}

  
  }



