import { Component } from '@angular/core';
import { CentralUService } from './services/central-u.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  providers: [CentralUService]


})
export class AppComponent {
  title = 'proxy';
  constructor(private dataSvc: CentralUService) { }
  ngOnInit() {

  }

  // toggleTheme(event) {
  //   if(event.detail.checked){
  //     document.body.setAttribute('color-theme','dark');
 
  //   }else{
  //     document.body.setAttribute('color-theme','light');

  //   }
  // }
}
