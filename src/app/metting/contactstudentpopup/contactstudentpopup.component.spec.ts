import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactstudentpopupComponent } from './contactstudentpopup.component';

describe('ContactstudentpopupComponent', () => {
  let component: ContactstudentpopupComponent;
  let fixture: ComponentFixture<ContactstudentpopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactstudentpopupComponent]
    });
    fixture = TestBed.createComponent(ContactstudentpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
