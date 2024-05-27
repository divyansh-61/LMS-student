import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizzesMyResultsComponent } from './quizzes-my-results/quizzes-my-results.component';
import { QuizzesMyResultsClickToggleButtonComponent } from './quizzes-my-results-click-toggle-button/quizzes-my-results-click-toggle-button.component';
import { QuizzesNotParticipatedComponent } from './quizzes-not-participated/quizzes-not-participated.component';

const routes: Routes = [
  {
    path : '', redirectTo : 'my-result', pathMatch : 'full'
 },

  {
    path: 'my-result', component: QuizzesMyResultsComponent
  },
  {
    path: 'my-result-click', component: QuizzesMyResultsClickToggleButtonComponent
  },
  {
    path: 'not-participated', component: QuizzesNotParticipatedComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizzesRoutingModule { }
