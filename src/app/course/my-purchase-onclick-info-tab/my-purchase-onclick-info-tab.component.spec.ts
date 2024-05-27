import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPurchaseOnclickInfoTabComponent } from './my-purchase-onclick-info-tab.component';

describe('MyPurchaseOnclickInfoTabComponent', () => {
  let component: MyPurchaseOnclickInfoTabComponent;
  let fixture: ComponentFixture<MyPurchaseOnclickInfoTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyPurchaseOnclickInfoTabComponent]
    });
    fixture = TestBed.createComponent(MyPurchaseOnclickInfoTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
