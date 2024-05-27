import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEducationPopupComponent } from './add-education-popup.component';

describe('AddEducationPopupComponent', () => {
  let component: AddEducationPopupComponent;
  let fixture: ComponentFixture<AddEducationPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEducationPopupComponent]
    });
    fixture = TestBed.createComponent(AddEducationPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
