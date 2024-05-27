import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentEditSAVEPOPUPComponent } from './comment-edit-save-popup.component';

describe('CommentEditSAVEPOPUPComponent', () => {
  let component: CommentEditSAVEPOPUPComponent;
  let fixture: ComponentFixture<CommentEditSAVEPOPUPComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommentEditSAVEPOPUPComponent]
    });
    fixture = TestBed.createComponent(CommentEditSAVEPOPUPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
