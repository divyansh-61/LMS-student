import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationViewPopupComponent } from './notification-view-popup.component';

describe('NotificationViewPopupComponent', () => {
  let component: NotificationViewPopupComponent;
  let fixture: ComponentFixture<NotificationViewPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotificationViewPopupComponent]
    });
    fixture = TestBed.createComponent(NotificationViewPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
