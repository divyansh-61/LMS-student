import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPurchaseOnclickContantTabComponent } from './my-purchase-onclick-contant-tab.component';

describe('MyPurchaseOnclickContantTabComponent', () => {
  let component: MyPurchaseOnclickContantTabComponent;
  let fixture: ComponentFixture<MyPurchaseOnclickContantTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyPurchaseOnclickContantTabComponent]
    });
    fixture = TestBed.createComponent(MyPurchaseOnclickContantTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
