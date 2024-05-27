import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumMyPostComponent } from './forum-my-post.component';

describe('ForumMyPostComponent', () => {
  let component: ForumMyPostComponent;
  let fixture: ComponentFixture<ForumMyPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForumMyPostComponent]
    });
    fixture = TestBed.createComponent(ForumMyPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
