import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentEditPopupComponent } from './comment-edit-popup.component';

describe('CommentEditPopupComponent', () => {
  let component: CommentEditPopupComponent;
  let fixture: ComponentFixture<CommentEditPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommentEditPopupComponent]
    });
    fixture = TestBed.createComponent(CommentEditPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
