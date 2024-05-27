import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPurchaseCorseOnclickComponent } from './my-purchase-corse-onclick.component';

describe('MyPurchaseCorseOnclickComponent', () => {
  let component: MyPurchaseCorseOnclickComponent;
  let fixture: ComponentFixture<MyPurchaseCorseOnclickComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyPurchaseCorseOnclickComponent]
    });
    fixture = TestBed.createComponent(MyPurchaseCorseOnclickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
