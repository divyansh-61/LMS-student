import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MettingRoutingModule } from './metting-routing.module';
import { MaterialModule } from '../material/material.module';
import { MyresComponent } from './myres/myres.component';
import { ToggleViewComponent } from './toggle-view/toggle-view.component';



@NgModule({
  declarations: [
    MyresComponent,
    ToggleViewComponent,
    
    
  ],
  imports: [
    CommonModule,
    MettingRoutingModule,
    MaterialModule
  ]
})
export class MettingModule { }
