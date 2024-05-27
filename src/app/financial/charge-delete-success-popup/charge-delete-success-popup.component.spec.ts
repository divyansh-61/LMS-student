import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargeDeleteSuccessPopupComponent } from './charge-delete-success-popup.component';

describe('ChargeDeleteSuccessPopupComponent', () => {
  let component: ChargeDeleteSuccessPopupComponent;
  let fixture: ComponentFixture<ChargeDeleteSuccessPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChargeDeleteSuccessPopupComponent]
    });
    fixture = TestBed.createComponent(ChargeDeleteSuccessPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
