import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import {MatButtonModule} from '@angular/material/button';
import { HomePageRoutingModule } from './home-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MaterialModule } from '../material.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    IonicModule,
    HomePageRoutingModule,
    MaterialModule,
    HttpClientModule
  ],
  exports: [
      MatButtonModule
  ],
 
  declarations: [HomePage]
})
export class HomePageModule {}