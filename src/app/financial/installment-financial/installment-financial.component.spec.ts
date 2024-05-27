import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallmentFinancialComponent } from './installment-financial.component';

describe('InstallmentFinancialComponent', () => {
  let component: InstallmentFinancialComponent;
  let fixture: ComponentFixture<InstallmentFinancialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstallmentFinancialComponent]
    });
    fixture = TestBed.createComponent(InstallmentFinancialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
