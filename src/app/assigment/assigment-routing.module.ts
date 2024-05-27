import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssigmentComponent } from './assigment/assigment.component';

const routes: Routes = [
  {
    path : '', redirectTo : 'assigment', pathMatch : 'full'
 },
  {
    path: 'assigment', component: AssigmentComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssigmentRoutingModule { }
