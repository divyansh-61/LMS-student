import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpcomingCoursesRoutingModule } from './upcoming-courses-routing.module';
import { FollowingcoursesComponent } from './followingcourses/followingcourses.component';
import { MaterialModule } from '../material/material.module';
import { OrganizationCorseOnclickComponent } from './organization-corse-onclick/organization-corse-onclick.component';
import { CourseContentComponent } from './course-content/course-content.component';
import { CourseInformationComponent } from './course-information/course-information.component';
import { CourseReviewtabComponent } from './course-reviewtab/course-reviewtab.component';
 


@NgModule({
  declarations: [
    FollowingcoursesComponent,
    OrganizationCorseOnclickComponent,
    CourseContentComponent,
    CourseInformationComponent,
    CourseReviewtabComponent

   
    
  
  ],
  imports: [
    CommonModule,
    UpcomingCoursesRoutingModule,
    MaterialModule
  ]
})
export class UpcomingCoursesModule { }
