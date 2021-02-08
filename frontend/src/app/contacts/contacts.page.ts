import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Contact } from '../models/contact';
import { Response } from '../models/incidencia';
import { CentralUService } from '../services/central-u.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {
  incidencia: Contact[];
  incidenciaJSON: Array<Object>;
  constructor(
    private centralService: CentralUService, 
    private route: Router,
    private navCtrl: NavController) {}


  ngOnInit(){
    this.getAllIncidencias();
  }

goToAdd(){
  this.route.navigateByUrl("/add-incidencia");
}
  
  getAllIncidencias(){
    console.log("getAllContact");
    
    this.centralService.getIncidencias().subscribe(( incidencia : any) => {
      console.log(incidencia);
      this.incidencia = incidencia["result"];
      console.log(this.incidencia)
      
    });
  }

 

  goToDetails(id: number){
    this.centralService.setCurrentContactId(id);
    this.route.navigateByUrl("details");
  }


}
