import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentViewPopupComponent } from './comment-view-popup.component';

describe('CommentViewPopupComponent', () => {
  let component: CommentViewPopupComponent;
  let fixture: ComponentFixture<CommentViewPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommentViewPopupComponent]
    });
    fixture = TestBed.createComponent(CommentViewPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
