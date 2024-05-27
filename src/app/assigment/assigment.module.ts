import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssigmentRoutingModule } from './assigment-routing.module';
import { AssigmentComponent } from './assigment/assigment.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    AssigmentComponent
  ],
  imports: [
    CommonModule,
    AssigmentRoutingModule,
    MaterialModule
  ]
})
export class AssigmentModule { }
