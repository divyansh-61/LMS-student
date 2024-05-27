import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExperiencePopupComponent } from './add-experience-popup.component';

describe('AddExperiencePopupComponent', () => {
  let component: AddExperiencePopupComponent;
  let fixture: ComponentFixture<AddExperiencePopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddExperiencePopupComponent]
    });
    fixture = TestBed.createComponent(AddExperiencePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
