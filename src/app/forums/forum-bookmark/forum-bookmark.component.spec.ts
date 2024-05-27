import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumBookmarkComponent } from './forum-bookmark.component';

describe('ForumBookmarkComponent', () => {
  let component: ForumBookmarkComponent;
  let fixture: ComponentFixture<ForumBookmarkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForumBookmarkComponent]
    });
    fixture = TestBed.createComponent(ForumBookmarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
