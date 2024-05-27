import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardConvertConvertpointPopupComponent } from './reward-convert-convertpoint-popup.component';

describe('RewardConvertConvertpointPopupComponent', () => {
  let component: RewardConvertConvertpointPopupComponent;
  let fixture: ComponentFixture<RewardConvertConvertpointPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RewardConvertConvertpointPopupComponent]
    });
    fixture = TestBed.createComponent(RewardConvertConvertpointPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
