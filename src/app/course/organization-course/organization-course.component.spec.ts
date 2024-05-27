import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationCourseComponent } from './organization-course.component';

describe('OrganizationCourseComponent', () => {
  let component: OrganizationCourseComponent;
  let fixture: ComponentFixture<OrganizationCourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrganizationCourseComponent]
    });
    fixture = TestBed.createComponent(OrganizationCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
