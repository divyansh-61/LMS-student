import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizzesNotParticipatedComponent } from './quizzes-not-participated.component';

describe('QuizzesNotParticipatedComponent', () => {
  let component: QuizzesNotParticipatedComponent;
  let fixture: ComponentFixture<QuizzesNotParticipatedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizzesNotParticipatedComponent]
    });
    fixture = TestBed.createComponent(QuizzesNotParticipatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
