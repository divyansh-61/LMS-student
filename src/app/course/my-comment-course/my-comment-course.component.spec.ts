import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCommentCourseComponent } from './my-comment-course.component';

describe('MyCommentCourseComponent', () => {
  let component: MyCommentCourseComponent;
  let fixture: ComponentFixture<MyCommentCourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyCommentCourseComponent]
    });
    fixture = TestBed.createComponent(MyCommentCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
