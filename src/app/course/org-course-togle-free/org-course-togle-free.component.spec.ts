import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgCourseTogleFreeComponent } from './org-course-togle-free.component';

describe('OrgCourseTogleFreeComponent', () => {
  let component: OrgCourseTogleFreeComponent;
  let fixture: ComponentFixture<OrgCourseTogleFreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrgCourseTogleFreeComponent]
    });
    fixture = TestBed.createComponent(OrgCourseTogleFreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
