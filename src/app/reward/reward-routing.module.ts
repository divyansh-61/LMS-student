import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RewardPointPageComponent } from './reward-point-page/reward-point-page.component';

const routes: Routes = [
  {
    path: 'reward', component: RewardPointPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RewardRoutingModule { }
