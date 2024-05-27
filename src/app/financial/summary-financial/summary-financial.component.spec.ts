import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryFinancialComponent } from './summary-financial.component';

describe('SummaryFinancialComponent', () => {
  let component: SummaryFinancialComponent;
  let fixture: ComponentFixture<SummaryFinancialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SummaryFinancialComponent]
    });
    fixture = TestBed.createComponent(SummaryFinancialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
