import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../models/contact';
import { CentralUService } from '../services/central-u.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  contact: Contact[];
  constructor(
    private service: CentralUService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getASingleContact()
  }

  deleteContact(id:number){
    console.log(id)
    this.service.deleteContact(id)
  }

  editContact(id: number, name: string, company_type: string, functionm: string, type: string, street: string,
    city: string, zip: string){

    this.service.setCurrentContact(id, name, company_type, functionm, type, street, city, zip);
    console.log(id);
    this.router.navigateByUrl("update-contact")
  }

  getASingleContact(){
    console.log("getAllContact");
    let id = this.service.getCurrentContactId();
    this.service.getContactById(id).subscribe(( contact : any) => {
      console.log(contact);
      this.contact = contact["result"];
      console.log(this.contact)
      
    });
  }
}
