import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallmentClickViewDetailsComponent } from './installment-click-view-details.component';

describe('InstallmentClickViewDetailsComponent', () => {
  let component: InstallmentClickViewDetailsComponent;
  let fixture: ComponentFixture<InstallmentClickViewDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstallmentClickViewDetailsComponent]
    });
    fixture = TestBed.createComponent(InstallmentClickViewDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
