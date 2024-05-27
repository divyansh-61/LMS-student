import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupportRoutingModule } from './support-routing.module';
import { NewComponent } from './new/new.component';
import { MaterialModule } from '../material/material.module';
import { CoursessupportComponent } from './coursessupport/coursessupport.component';
import { CoursessupportSelectconversationComponent } from './coursessupport-selectconversation/coursessupport-selectconversation.component';
import { TicketsComponent } from './tickets/tickets.component';


@NgModule({
  declarations: [
    NewComponent,
    CoursessupportComponent,
    CoursessupportSelectconversationComponent,
    TicketsComponent
  ],
  imports: [
    CommonModule,
    SupportRoutingModule,
    MaterialModule
  ]
})
export class SupportModule { }
