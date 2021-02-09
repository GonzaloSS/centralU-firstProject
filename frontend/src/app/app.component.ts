import { Component } from '@angular/core';
import { CentralUService } from './services/central-u.service';
import { OdooRPCService} from 'angular7-odoo-jsonrpc';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  providers: [CentralUService, OdooRPCService]
  
  
})
export class AppComponent {
  title = 'proxy';
  constructor(private dataSvc: CentralUService,
    private odooRPC: OdooRPCService) {}
  ngOnInit(){
    this.odooRPC.login('centralU', 'admin', 'admin').then(res =>{
      console.log('login success', res)
    }).catch( err =>{
      console.error("login failed", err)
    })
  }
}
