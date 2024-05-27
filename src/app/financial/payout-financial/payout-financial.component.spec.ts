import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayoutFinancialComponent } from './payout-financial.component';

describe('PayoutFinancialComponent', () => {
  let component: PayoutFinancialComponent;
  let fixture: ComponentFixture<PayoutFinancialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PayoutFinancialComponent]
    });
    fixture = TestBed.createComponent(PayoutFinancialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
