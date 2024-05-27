import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertificatesAchievementsComponent } from './certificates-achievements/certificates-achievements.component';
import { CertificateValidationComponent } from './certificate-validation/certificate-validation.component';
import { CompletionCertificatesComponent } from './completion-certificates/completion-certificates.component';

const routes: Routes = [
  {
    path : '', redirectTo : 'achievements', pathMatch : 'full'
 },
  {
    path: 'achievements', component: CertificatesAchievementsComponent
  },
  {
    path: 'validation', component: CertificateValidationComponent
  },
  {
    path: 'completion', component: CompletionCertificatesComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CertificateRoutingModule { }
