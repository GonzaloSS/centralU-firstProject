import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Inventory } from 'src/app/models/inventory';
import { InventoryService } from '../../services/inventory.service';

@Component({
  selector: 'app-see-adjustment',
  templateUrl: './see-adjustment.page.html',
  styleUrls: ['./see-adjustment.page.scss'],
})
export class SeeAdjustmentPage implements OnInit {

  session: boolean;
  inventory: Inventory[];

  constructor(private inventoryService: InventoryService,
    private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem("session_id")){
      this.session = true;
      this.getAllAdjustments();
    }else{
      this.router.navigateByUrl("home")
    }
  }

  getAllAdjustments(){
    console.log("getAllAdjustments");
    this.inventoryService.getAdjustments().subscribe(( inventory : any) => {
      console.log(inventory);
      this.inventory = inventory["result"];
      console.log(this.inventory)
      
    });
  }

}
