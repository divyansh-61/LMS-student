import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardConvertpopupComponent } from './reward-convertpopup.component';

describe('RewardConvertpopupComponent', () => {
  let component: RewardConvertpopupComponent;
  let fixture: ComponentFixture<RewardConvertpopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RewardConvertpopupComponent]
    });
    fixture = TestBed.createComponent(RewardConvertpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
