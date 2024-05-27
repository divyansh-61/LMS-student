import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinancialRoutingModule } from './financial-routing.module';
import { SummaryFinancialComponent } from './summary-financial/summary-financial.component';
import { MaterialModule } from '../material/material.module';
import { PayoutFinancialComponent } from './payout-financial/payout-financial.component';
import { ChargeAccountComponent } from './charge-account/charge-account.component';
import { SubscribeFinancialComponent } from './subscribe-financial/subscribe-financial.component';
import { InstallmentFinancialComponent } from './installment-financial/installment-financial.component';
import { InstallmentClickViewDetailsComponent } from './installment-click-view-details/installment-click-view-details.component';


@NgModule({
  declarations: [
    SummaryFinancialComponent,
    PayoutFinancialComponent,
    ChargeAccountComponent,
    SubscribeFinancialComponent,
    InstallmentFinancialComponent,
    InstallmentClickViewDetailsComponent
  ],
  imports: [
    CommonModule,
    FinancialRoutingModule,
    MaterialModule
  ]
})
export class FinancialModule { }
