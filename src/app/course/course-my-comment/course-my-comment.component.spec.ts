import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseMyCommentComponent } from './course-my-comment.component';

describe('CourseMyCommentComponent', () => {
  let component: CourseMyCommentComponent;
  let fixture: ComponentFixture<CourseMyCommentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseMyCommentComponent]
    });
    fixture = TestBed.createComponent(CourseMyCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
