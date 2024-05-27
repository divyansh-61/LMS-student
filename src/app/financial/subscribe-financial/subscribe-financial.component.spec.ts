import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeFinancialComponent } from './subscribe-financial.component';

describe('SubscribeFinancialComponent', () => {
  let component: SubscribeFinancialComponent;
  let fixture: ComponentFixture<SubscribeFinancialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubscribeFinancialComponent]
    });
    fixture = TestBed.createComponent(SubscribeFinancialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
