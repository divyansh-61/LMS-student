import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationRoutingModule } from './notification-routing.module';
import { MaterialModule } from '../material/material.module';
import { NotificationPageComponent } from './notification-page/notification-page.component';


@NgModule({
  declarations: [
NotificationPageComponent

  ],
  imports: [
    CommonModule,
    NotificationRoutingModule,
    MaterialModule
  ]
})
export class NotificationModule { }
