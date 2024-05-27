import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AffiliateComponent } from './affiliate/affiliate.component';
import { RegistrationBonusComponent } from './registration-bonus/registration-bonus.component';

const routes: Routes = [
  {
    path : '', redirectTo : 'affilate', pathMatch : 'full'
 },
  {
    path: 'affilate', component: AffiliateComponent
  },
  {
    path: 'registration-bonus', component: RegistrationBonusComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketingRoutingModule { }
