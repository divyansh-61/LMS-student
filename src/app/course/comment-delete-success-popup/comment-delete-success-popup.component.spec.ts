import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentDeleteSuccessPopupComponent } from './comment-delete-success-popup.component';

describe('CommentDeleteSuccessPopupComponent', () => {
  let component: CommentDeleteSuccessPopupComponent;
  let fixture: ComponentFixture<CommentDeleteSuccessPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommentDeleteSuccessPopupComponent]
    });
    fixture = TestBed.createComponent(CommentDeleteSuccessPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
