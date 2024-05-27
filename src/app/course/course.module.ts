import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';

import { OrganizationCourseComponent } from './organization-course/organization-course.component';
import { OrgCourseTogleFreeComponent } from './org-course-togle-free/org-course-togle-free.component';
import { OrganizationCorseOnclickComponent } from './organization-corse-onclick/organization-corse-onclick.component';
import { CourseReviewtabComponent } from './course-reviewtab/course-reviewtab.component';
import { CourseContentComponent } from './course-content/course-content.component';
import { CourseInformationComponent } from './course-information/course-information.component';
import { MaterialModule } from '../material/material.module';
import { MyPurchaceCourseComponent } from './my-purchace-course/my-purchace-course.component';
import { MyPurchaseCorseOnclickComponent } from './my-purchase-corse-onclick/my-purchase-corse-onclick.component';
import { MyCommentCourseComponent } from './my-comment-course/my-comment-course.component';
import { CourseFavoritesComponent } from './course-favorites/course-favorites.component';
import { FeaturedCourseComponent } from './featured-course/featured-course.component';
import { InfoTab1Component } from './info-tab1/info-tab1.component';
import { ReviewsTab3Component } from './reviews-tab3/reviews-tab3.component';
import { ContentTab2Component } from './content-tab2/content-tab2.component';



@NgModule({
  declarations: [
   
    OrganizationCourseComponent,
    OrgCourseTogleFreeComponent,
    OrganizationCorseOnclickComponent,
    CourseReviewtabComponent,
    CourseContentComponent,
    CourseInformationComponent,
    MyPurchaceCourseComponent,
    MyPurchaseCorseOnclickComponent,
    MyCommentCourseComponent,
    CourseFavoritesComponent,
    FeaturedCourseComponent,
    InfoTab1Component,
    ReviewsTab3Component,
    ContentTab2Component


  ],
  imports: [
    CommonModule,
    CourseRoutingModule,
MaterialModule
  ]
})
export class CourseModule { }
