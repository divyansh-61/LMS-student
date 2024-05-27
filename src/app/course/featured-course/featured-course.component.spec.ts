import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedCourseComponent } from './featured-course.component';

describe('FeaturedCourseComponent', () => {
  let component: FeaturedCourseComponent;
  let fixture: ComponentFixture<FeaturedCourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeaturedCourseComponent],
    });
    fixture = TestBed.createComponent(FeaturedCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
