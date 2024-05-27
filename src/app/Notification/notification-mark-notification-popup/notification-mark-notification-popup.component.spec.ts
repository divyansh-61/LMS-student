import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationMarkNotificationPopupComponent } from './notification-mark-notification-popup.component';

describe('NotificationMarkNotificationPopupComponent', () => {
  let component: NotificationMarkNotificationPopupComponent;
  let fixture: ComponentFixture<NotificationMarkNotificationPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotificationMarkNotificationPopupComponent]
    });
    fixture = TestBed.createComponent(NotificationMarkNotificationPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
