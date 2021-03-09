import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { User } from '../models/user';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.page.html',
  styleUrls: ['./my-profile.page.scss'],
})
export class MyProfilePage implements OnInit {
user: User[];
  constructor(
    private userService: EmployeeService,
    private menu: MenuController
  ) { }

  ngOnInit() {
    this.getMyData();
  
  }


  toggleMenu(){
    this.menu.open();
  }
  getMyData(){
    this.userService.getUserById().subscribe(( product : any) => {
      console.log(product);
      this.user = product["result"];
      console.log(this.user)
      
    });
  }
}
