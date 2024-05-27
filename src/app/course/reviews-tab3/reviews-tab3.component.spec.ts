import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsTab3Component } from './reviews-tab3.component';

describe('ReviewsTab3Component', () => {
  let component: ReviewsTab3Component;
  let fixture: ComponentFixture<ReviewsTab3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReviewsTab3Component]
    });
    fixture = TestBed.createComponent(ReviewsTab3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
