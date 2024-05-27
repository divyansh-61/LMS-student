import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumMyTopicComponent } from './forum-my-topic.component';

describe('ForumMyTopicComponent', () => {
  let component: ForumMyTopicComponent;
  let fixture: ComponentFixture<ForumMyTopicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForumMyTopicComponent]
    });
    fixture = TestBed.createComponent(ForumMyTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
