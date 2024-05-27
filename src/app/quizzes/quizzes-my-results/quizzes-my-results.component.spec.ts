import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizzesMyResultsComponent } from './quizzes-my-results.component';

describe('QuizzesMyResultsComponent', () => {
  let component: QuizzesMyResultsComponent;
  let fixture: ComponentFixture<QuizzesMyResultsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizzesMyResultsComponent]
    });
    fixture = TestBed.createComponent(QuizzesMyResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
