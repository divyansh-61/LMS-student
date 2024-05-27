import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SummaryFinancialComponent } from './summary-financial/summary-financial.component';
import { PayoutFinancialComponent } from './payout-financial/payout-financial.component';
import { ChargeAccountComponent } from './charge-account/charge-account.component';
import { SubscribeFinancialComponent } from './subscribe-financial/subscribe-financial.component';
import { InstallmentFinancialComponent } from './installment-financial/installment-financial.component';
import { InstallmentClickViewDetailsComponent } from './installment-click-view-details/installment-click-view-details.component';

const routes: Routes = [
  {
    path : '', redirectTo : 'financial-summery', pathMatch : 'full'
 },
  {
    path: 'financial-summery', component: SummaryFinancialComponent
  },
  {
    path: 'payout', component: PayoutFinancialComponent
  },
  {
    path: 'charge-account', component: ChargeAccountComponent
  },
  {
    path: 'subscribe', component: SubscribeFinancialComponent
  },
  {
    path: 'installment', component: InstallmentFinancialComponent
  },
  {
    path: 'view-click', component: InstallmentClickViewDetailsComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinancialRoutingModule { }
