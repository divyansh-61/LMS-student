import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargeDeletePopupComponent } from './charge-delete-popup.component';

describe('ChargeDeletePopupComponent', () => {
  let component: ChargeDeletePopupComponent;
  let fixture: ComponentFixture<ChargeDeletePopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChargeDeletePopupComponent]
    });
    fixture = TestBed.createComponent(ChargeDeletePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
