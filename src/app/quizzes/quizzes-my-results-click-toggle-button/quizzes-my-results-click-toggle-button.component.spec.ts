import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizzesMyResultsClickToggleButtonComponent } from './quizzes-my-results-click-toggle-button.component';

describe('QuizzesMyResultsClickToggleButtonComponent', () => {
  let component: QuizzesMyResultsClickToggleButtonComponent;
  let fixture: ComponentFixture<QuizzesMyResultsClickToggleButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizzesMyResultsClickToggleButtonComponent]
    });
    fixture = TestBed.createComponent(QuizzesMyResultsClickToggleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
