import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumNewTopicComponent } from './forum-new-topic.component';

describe('ForumNewTopicComponent', () => {
  let component: ForumNewTopicComponent;
  let fixture: ComponentFixture<ForumNewTopicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForumNewTopicComponent]
    });
    fixture = TestBed.createComponent(ForumNewTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
