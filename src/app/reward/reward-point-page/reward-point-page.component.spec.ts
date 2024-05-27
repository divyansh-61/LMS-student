import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardPointPageComponent } from './reward-point-page.component';

describe('RewardPointPageComponent', () => {
  let component: RewardPointPageComponent;
  let fixture: ComponentFixture<RewardPointPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RewardPointPageComponent]
    });
    fixture = TestBed.createComponent(RewardPointPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
