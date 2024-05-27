import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { StoreMyPurchasesComponent } from './store-my-purchases/store-my-purchases.component';
import { MaterialModule } from '../material/material.module';
import { StoreMyCommentsComponent } from './store-my-comments/store-my-comments.component';


@NgModule({
  declarations: [

    StoreMyPurchasesComponent,
    StoreMyCommentsComponent
  ],
  imports: [
    CommonModule,
    StoreRoutingModule,
    MaterialModule
  ]
})
export class StoreModule { }
