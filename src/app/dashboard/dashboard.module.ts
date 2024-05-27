import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ActivateofflinestatusComponent } from './activateofflinestatus/activateofflinestatus.component';
import { MaterialModule } from '../material/material.module';
import { NgChartsModule } from 'ng2-charts';
import { PaichartComponent } from './paichart/paichart.component';

import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { SuccessfullyComponent } from './successfully/successfully.component';
import { NewPrivateComponent } from './new-private/new-private.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ActivateofflinestatusComponent,
    PaichartComponent,
    SuccessfullyComponent,
    NewPrivateComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    NgChartsModule,
    CanvasJSAngularChartsModule,
  

 
  ]
})
export class DashboardModule { }
