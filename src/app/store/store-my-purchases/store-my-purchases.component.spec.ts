import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreMyPurchasesComponent } from './store-my-purchases.component';

describe('StoreMyPurchasesComponent', () => {
  let component: StoreMyPurchasesComponent;
  let fixture: ComponentFixture<StoreMyPurchasesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StoreMyPurchasesComponent]
    });
    fixture = TestBed.createComponent(StoreMyPurchasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
