import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketingRoutingModule } from './marketing-routing.module';
import { AffiliateComponent } from './affiliate/affiliate.component';
import { MaterialModule } from '../material/material.module';
import { RegistrationBonusComponent } from './registration-bonus/registration-bonus.component';


@NgModule({
  declarations: [
    AffiliateComponent,
    RegistrationBonusComponent
  ],
  imports: [
    CommonModule,
    MarketingRoutingModule,
    MaterialModule
  ]
})
export class MarketingModule { }
