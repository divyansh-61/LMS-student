import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YesPopupDeletePopupBasicInfoComponent } from './yes-popup-delete-popup-basic-info.component';

describe('YesPopupDeletePopupBasicInfoComponent', () => {
  let component: YesPopupDeletePopupBasicInfoComponent;
  let fixture: ComponentFixture<YesPopupDeletePopupBasicInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YesPopupDeletePopupBasicInfoComponent]
    });
    fixture = TestBed.createComponent(YesPopupDeletePopupBasicInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
