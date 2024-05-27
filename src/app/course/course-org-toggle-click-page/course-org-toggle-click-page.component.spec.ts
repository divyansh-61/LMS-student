import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseOrgToggleClickPageComponent } from './course-org-toggle-click-page.component';

describe('CourseOrgToggleClickPageComponent', () => {
  let component: CourseOrgToggleClickPageComponent;
  let fixture: ComponentFixture<CourseOrgToggleClickPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseOrgToggleClickPageComponent]
    });
    fixture = TestBed.createComponent(CourseOrgToggleClickPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
