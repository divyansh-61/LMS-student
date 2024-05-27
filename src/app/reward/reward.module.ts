import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RewardRoutingModule } from './reward-routing.module';
import { MaterialModule } from '../material/material.module';
import { RewardPointPageComponent } from './reward-point-page/reward-point-page.component';


@NgModule({
  declarations: [
RewardPointPageComponent
  ],
  imports: [
    CommonModule,
    RewardRoutingModule,
    MaterialModule
  ]
})
export class RewardModule { }
