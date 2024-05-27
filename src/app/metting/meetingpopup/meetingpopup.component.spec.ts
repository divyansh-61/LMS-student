import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingpopupComponent } from './meetingpopup.component';

describe('MeetingpopupComponent', () => {
  let component: MeetingpopupComponent;
  let fixture: ComponentFixture<MeetingpopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeetingpopupComponent]
    });
    fixture = TestBed.createComponent(MeetingpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
