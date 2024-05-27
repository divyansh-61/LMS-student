import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NotificationMarkNotificationYesPopupComponent } from '../notification-mark-notification-yes-popup/notification-mark-notification-yes-popup.component';

@Component({
  selector: 'app-notification-mark-notification-popup',
  templateUrl: './notification-mark-notification-popup.component.html',
  styleUrls: ['./notification-mark-notification-popup.component.css']
})
export class NotificationMarkNotificationPopupComponent {
  constructor(public dialog:MatDialog){}

  openPopup_new(): void {
    const dialogclose=this.dialog.closeAll()
    this.succefull()
  }
  openPopup_new2(): void {
    const dialogclose=this.dialog.closeAll()
   
  }
 
 
  succefull(): void {
    const dialogRef = this.dialog.open(NotificationMarkNotificationYesPopupComponent, {
      width: '40%',
      // Set the desired width
      data: {},
    });
  }
}
