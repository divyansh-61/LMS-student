import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentityFinancialComponent } from './identity-financial.component';

describe('IdentityFinancialComponent', () => {
  let component: IdentityFinancialComponent;
  let fixture: ComponentFixture<IdentityFinancialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IdentityFinancialComponent]
    });
    fixture = TestBed.createComponent(IdentityFinancialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
