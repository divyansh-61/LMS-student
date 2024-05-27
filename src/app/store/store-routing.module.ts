import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreMyPurchasesComponent } from './store-my-purchases/store-my-purchases.component';
import { StoreMyCommentsComponent } from './store-my-comments/store-my-comments.component';

const routes: Routes = [
  {
    path : '', redirectTo : 'my-purchases', pathMatch : 'full'
 },
  {
    path: 'my-purchases', component: StoreMyPurchasesComponent
  },
  {
    path: 'my-comment', component: StoreMyCommentsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
