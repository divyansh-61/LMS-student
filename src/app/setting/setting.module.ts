import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingRoutingModule } from './setting-routing.module';
import { MaterialModule } from '../material/material.module';
import { SettingBasicInfoComponent } from './setting-basic-info/setting-basic-info.component';
import { MainSettingPageComponent } from './main-setting-page/main-setting-page.component';
import { ExtraInfoSettingComponent } from './extra-info-setting/extra-info-setting.component';
import { IdentityFinancialComponent } from './identity-financial/identity-financial.component';
import { SkillsTopicsComponent } from './skills-topics/skills-topics.component';
import { ExperienceSettingComponent } from './experience-setting/experience-setting.component';
import { EducationComponent } from './education/education.component';
import { AboutSettingPageComponent } from './about-setting-page/about-setting-page.component';
import { ImagesSettingComponent } from './images-setting/images-setting.component';


@NgModule({
  declarations: [
    SettingBasicInfoComponent,
    MainSettingPageComponent,
    ExtraInfoSettingComponent,
    IdentityFinancialComponent,
    SkillsTopicsComponent,
    ExperienceSettingComponent,
    EducationComponent,
    AboutSettingPageComponent,
    ImagesSettingComponent
    
  ],
  imports: [
    CommonModule,
    SettingRoutingModule,
    MaterialModule
  ]
})
export class SettingModule {
  
 }
