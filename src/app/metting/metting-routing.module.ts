import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyresComponent } from './myres/myres.component';
import { ToggleViewComponent } from './toggle-view/toggle-view.component';

const routes: Routes = [
  {
    path : '', redirectTo : 'my-reservation', pathMatch : 'full'
 },
  {
    path: 'my-reservation', component: MyresComponent
  },
  {
    path: 'toggle-view', component: ToggleViewComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MettingRoutingModule { }
