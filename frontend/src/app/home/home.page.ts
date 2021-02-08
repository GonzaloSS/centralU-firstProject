import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Contact } from '../models/contact';
import { Response } from '../models/incidencia';
import { CentralUService } from '../services/central-u.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  
  incidencia: Contact[];
  incidenciaJSON: Array<Object>;
  constructor(
    private centralService: CentralUService, 
    private route: Router,
    private navCtrl: NavController) {}


  ngOnInit(){
  }

goToAdd(){
  this.route.navigateByUrl("/add-incidencia");
}
goToContacts(){
  this.route.navigateByUrl("contacts")
}

  
  }



