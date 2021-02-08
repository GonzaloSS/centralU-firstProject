import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Contact } from '../models/contact';
import { CentralUService } from '../services/central-u.service';

@Component({
  selector: 'app-add-incidencia',
  templateUrl: './add-incidencia.page.html',
  styleUrls: ['./add-incidencia.page.scss'],
})
export class AddIncidenciaPage implements OnInit {

  contact: Contact[];
  contactForm: FormGroup;

  constructor(public fb: FormBuilder,
    private centralUService: CentralUService,
    private router: Router) {
      this.contactForm = this.fb.group({
        name: [''],
        company_type: [''],
        type:[''],
        street:[''],
        city:[''],
        zip:[''],
        function:['']

      })
     }

  ngOnInit() {
  }

 
  onFormSubmit() {
    if (!this.contactForm.valid) {
      return false;
    } else {
      let contact = {
        id: null,
        name: this.contactForm.value.name,
        company_type: this.contactForm.value.company_type,
        type: this.contactForm.value.type,
        street: this.contactForm.value.street,
        city: this.contactForm.value.city,
        zip: this.contactForm.value.zip,
        function: this.contactForm.value.function

      }
      this.centralUService.addContact(contact)
      this.router.navigateByUrl("home")
      
        }
  }

}
