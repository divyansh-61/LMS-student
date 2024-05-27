import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizzesRoutingModule } from './quizzes-routing.module';
import { MaterialModule } from '../material/material.module';
import { QuizzesMyResultsComponent } from './quizzes-my-results/quizzes-my-results.component';
import { QuizzesNotParticipatedComponent } from './quizzes-not-participated/quizzes-not-participated.component';
import { QuizzesMyResultsClickToggleButtonComponent } from './quizzes-my-results-click-toggle-button/quizzes-my-results-click-toggle-button.component';


@NgModule({
  declarations: [
    QuizzesMyResultsComponent,
    QuizzesMyResultsClickToggleButtonComponent,
    QuizzesNotParticipatedComponent
  ],
  imports: [
    CommonModule,
    QuizzesRoutingModule,
    MaterialModule
  ]
})
export class QuizzesModule { }
