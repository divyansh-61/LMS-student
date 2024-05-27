import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationMarkNotificationYesPopupComponent } from './notification-mark-notification-yes-popup.component';

describe('NotificationMarkNotificationYesPopupComponent', () => {
  let component: NotificationMarkNotificationYesPopupComponent;
  let fixture: ComponentFixture<NotificationMarkNotificationYesPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotificationMarkNotificationYesPopupComponent]
    });
    fixture = TestBed.createComponent(NotificationMarkNotificationYesPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
