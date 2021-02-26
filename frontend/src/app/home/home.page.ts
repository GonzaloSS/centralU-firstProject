import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { LocalStorage } from '@ngx-pwa/local-storage';
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
    private fb: FormBuilder,
    private alertController: AlertController,
    private localStorage: LocalStorage) {
    this.loginForm = this.fb.group({
      username: [''],
      password: ['']

    })
  }


  ngOnInit() {
    if (localStorage.getItem("session_id")) {
      this.session = true
    } else {
      this.session = false
    }
    if (localStorage.getItem("isAdmin") == "true") {
      this.isAdmin = true
    } else {
      this.isAdmin = false
    }
  }


  onFormSubmit() {
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
  // async presentAlert(message: string, origin: string) {
  //   const alert = await this.alertController.create({
  //     cssClass: 'my-custom-class',
  //     header: 'Error',
  //     subHeader: message,
  //     message: 'Could not ' + origin + '. Try again.',
  //     buttons: ['OK']
  //   });
  //   await alert.present();
  // }

  logOut() {
    this.centralService.logOut()
  }

  ownTask() {
    this.route.navigateByUrl("see-my-own-task");
  }
  AllTask() {
    this.route.navigateByUrl("see-all-tasks");
  }
  products() {
    this.route.navigateByUrl("products")
  }
  inventory() {
    this.route.navigateByUrl("see-adjustment")
  }
  employees() {
    this.route.navigateByUrl("see-employees");
  }



  goToAdd() {
    this.route.navigateByUrl("/add-incidencia");
  }
  goToContacts() {
    this.route.navigateByUrl("contacts")
  }


}



