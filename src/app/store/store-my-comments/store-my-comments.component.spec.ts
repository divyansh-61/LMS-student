import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreMyCommentsComponent } from './store-my-comments.component';

describe('StoreMyCommentsComponent', () => {
  let component: StoreMyCommentsComponent;
  let fixture: ComponentFixture<StoreMyCommentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StoreMyCommentsComponent]
    });
    fixture = TestBed.createComponent(StoreMyCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
