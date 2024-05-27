import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingBasicInfoComponent } from './setting-basic-info/setting-basic-info.component';
import { MainSettingPageComponent } from './main-setting-page/main-setting-page.component';

const routes: Routes = [

  {
    path: 'setting-basic', component: MainSettingPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }
