import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentDeletePopupComponent } from './comment-delete-popup.component';

describe('CommentDeletePopupComponent', () => {
  let component: CommentDeletePopupComponent;
  let fixture: ComponentFixture<CommentDeletePopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommentDeletePopupComponent]
    });
    fixture = TestBed.createComponent(CommentDeletePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
