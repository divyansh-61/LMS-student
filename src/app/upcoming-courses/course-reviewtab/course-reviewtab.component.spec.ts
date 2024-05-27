import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseReviewtabComponent } from './course-reviewtab.component';

describe('CourseReviewtabComponent', () => {
  let component: CourseReviewtabComponent;
  let fixture: ComponentFixture<CourseReviewtabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseReviewtabComponent]
    });
    fixture = TestBed.createComponent(CourseReviewtabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
