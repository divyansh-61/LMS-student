import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrgCourseTogleFreeComponent } from './org-course-togle-free/org-course-togle-free.component';
import { OrganizationCourseComponent } from './organization-course/organization-course.component';
import { OrganizationCorseOnclickComponent } from './organization-corse-onclick/organization-corse-onclick.component';
import { MyPurchaceCourseComponent } from './my-purchace-course/my-purchace-course.component';
import { MyPurchaseCorseOnclickComponent } from './my-purchase-corse-onclick/my-purchase-corse-onclick.component';
import { MyCommentCourseComponent } from './my-comment-course/my-comment-course.component';
import { CourseFavoritesComponent } from './course-favorites/course-favorites.component';
import { FeaturedCourseComponent } from './featured-course/featured-course.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'organization', pathMatch: 'full'
  },

  {
    path: 'organization', component: OrganizationCourseComponent
  },
  {
    path: 'togle-free', component: OrgCourseTogleFreeComponent
  },
  {
    path: 'name', component: FeaturedCourseComponent
  },
  {
    path: 'my-purchase', component: MyPurchaceCourseComponent
  },
  {
    path: 'purches-cor', component: MyPurchaseCorseOnclickComponent
  },
  {
    path: 'my-comment', component: MyCommentCourseComponent
  },
  {
    path: 'course-favirout', component: CourseFavoritesComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
