import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Contact } from '../models/contact';
import { CentralUService } from '../services/central-u.service';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.page.html',
  styleUrls: ['./update-contact.page.scss'],
})
export class UpdateContactPage implements OnInit {

  contactUpdateForm: FormGroup;
  contact : Contact[];
  constructor(
    private service: CentralUService,
    public fb: FormBuilder,
    private router: Router
  ) {

    this.contactUpdateForm = this.fb.group({
      name: [''],
      company_type: [''],
      function: [''],
      type:[''],
      street:[''],
      city:[''],
      zip:['']
    })
   }

  ngOnInit() {
   
      this.getASingleContact();
    }
    
    getASingleContact(){
      
      let id = this.service.getCurrentContactId();
      let name = this.service.getCurrentName();
      let company = this.service.getCurrentCompany();
      let functionn = this.service.getCurrentFunction();
      let type = this.service.getCurrentType();
      let street = this.service.getCurrentStreet();
      let city = this.service.getCurrentCity();
      let zip = this.service.getCurrentZip();
      

            this.contactUpdateForm = this.fb.group({
              
              name: name,
              company_type: company,
              function: functionn,
              type: type,
              street: street,
              city: city,
              zip: zip
            })
            
          
    }

  onFormSubmit(){
    let id = this.service.getCurrentContactId();
    if(!this.contactUpdateForm.valid){
      return false;
    }else{
      let contact = {
       id: null,
        name: this.contactUpdateForm.value.name,
        company_type: this.contactUpdateForm.value.company_type,
        type: this.contactUpdateForm.value.type,
        street: this.contactUpdateForm.value.street,
        city: this.contactUpdateForm.value.city,
        zip: this.contactUpdateForm.value.zip,
        function: this.contactUpdateForm.value.function

        
      }
      this.service.updateContact(id, contact)
      this.router.navigateByUrl("home")
    }
  }

}
