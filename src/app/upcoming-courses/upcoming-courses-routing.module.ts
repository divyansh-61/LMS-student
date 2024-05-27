import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FollowingcoursesComponent } from './followingcourses/followingcourses.component';
import { OrganizationCorseOnclickComponent } from './organization-corse-onclick/organization-corse-onclick.component';

const routes: Routes = [
  {
    path : '', redirectTo : 'following', pathMatch : 'full'
 },
  {
    path: 'following', component: FollowingcoursesComponent
  },
  {
    path: 'web', component: OrganizationCorseOnclickComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpcomingCoursesRoutingModule { }
