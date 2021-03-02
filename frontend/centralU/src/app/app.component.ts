import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private menu: MenuController
  ) {}

  ngOnInit(){
    if (!localStorage.getItem("session_id")) {
      this.menu.enable(true, 'guest');
    } 

    if (localStorage.getItem("isAdmin") == "false") {
      this.menu.enable(true, 'user');
      

    }
    if(localStorage.getItem("isAdmin") == "true") {
      this.menu.enable(true, 'admin');
     
    }
  }
}
