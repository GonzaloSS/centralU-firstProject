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
  constructor(private dataSvc: CentralUService) {}
  ngOnInit(){
    
  }
}
