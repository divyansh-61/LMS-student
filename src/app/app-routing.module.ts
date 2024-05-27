import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path : 'home' , loadChildren: ()=> import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path : '' , loadChildren: ()=> import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'course',
    loadChildren: () => import('./course/course.module').then(m => m.CourseModule)
  },
  {
    path: 'upcoming-course',
    loadChildren: () => import('./upcoming-courses/upcoming-courses.module').then(m => m.UpcomingCoursesModule)
  },

  {
    path: 'assigment',
    loadChildren: () => import('./assigment/assigment.module').then(m => m.AssigmentModule)
  },
  {
    path: 'metting',
    loadChildren: () => import('./metting/metting.module').then(m => m.MettingModule)
  },
  {
    path: 'quizzes',
    loadChildren: () => import('./quizzes/quizzes.module').then(m => m.QuizzesModule)
  },
  {
    path: 'certification',
    loadChildren: () => import('./certificate/certificate.module').then(m => m.CertificateModule)
  },
  {
    path: 'store',
    loadChildren: () => import('./store/store.module').then(m => m.StoreModule)
  },
  {
    path: 'financial',
    loadChildren: () => import('./financial/financial.module').then(m => m.FinancialModule)
  },
  {
    path: 'support',
    loadChildren: () => import('./support/support.module').then(m => m.SupportModule)
  },
  {
    path: 'marketing',
    loadChildren: () => import('./marketing/marketing.module').then(m => m.MarketingModule)
  },
  {
    path: 'forums',
    loadChildren: () => import('./forums/forums.module').then(m => m.ForumsModule)
  },
  {
    path: 'reward',
    loadChildren: () => import('./reward/reward.module').then(m => m.RewardModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./Notification/notification.module').then(m => m.NotificationModule)
  },
  {
    path: 'setting',
    loadChildren: () => import('./setting/setting.module').then(m => m.SettingModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
