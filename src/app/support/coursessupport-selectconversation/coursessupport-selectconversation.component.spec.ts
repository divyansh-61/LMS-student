import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursessupportSelectconversationComponent } from './coursessupport-selectconversation.component';

describe('CoursessupportSelectconversationComponent', () => {
  let component: CoursessupportSelectconversationComponent;
  let fixture: ComponentFixture<CoursessupportSelectconversationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursessupportSelectconversationComponent]
    });
    fixture = TestBed.createComponent(CoursessupportSelectconversationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
