import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewComponent } from './new/new.component';
import { CoursessupportComponent } from './coursessupport/coursessupport.component';
import { CoursessupportSelectconversationComponent } from './coursessupport-selectconversation/coursessupport-selectconversation.component';
import { TicketsComponent } from './tickets/tickets.component';

const routes: Routes = [
  {
    path : '', redirectTo : 'new', pathMatch : 'full'
 },
  {
    path: 'new', component: NewComponent
  },
  {
    path: 'courses-support', component: CoursessupportComponent
  },
  {
    path: 'courses-support-selected', component: CoursessupportSelectconversationComponent
  },
  {
    path: 'tickets', component: TicketsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupportRoutingModule { }
