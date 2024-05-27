import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPurchaseOnclickReveiwTabComponent } from './my-purchase-onclick-reveiw-tab.component';

describe('MyPurchaseOnclickReveiwTabComponent', () => {
  let component: MyPurchaseOnclickReveiwTabComponent;
  let fixture: ComponentFixture<MyPurchaseOnclickReveiwTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyPurchaseOnclickReveiwTabComponent]
    });
    fixture = TestBed.createComponent(MyPurchaseOnclickReveiwTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
