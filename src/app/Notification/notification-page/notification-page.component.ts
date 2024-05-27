import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NotificationViewPopupComponent } from '../notification-view-popup/notification-view-popup.component';
import { NotificationMarkNotificationPopupComponent } from '../notification-mark-notification-popup/notification-mark-notification-popup.component';

@Component({
  selector: 'app-notification-page',
  templateUrl: './notification-page.component.html',
  styleUrls: ['./notification-page.component.css']
})
export class NotificationPageComponent {

  constructor(public dialog: MatDialog) {}

  viewClick(): void {
    const dialogRef = this.dialog.open(NotificationViewPopupComponent, {
      width: '40%',
      // Set the desired width
      data: {},
    });
  }
 markpopup():void{

    const newref=this.dialog.open(NotificationMarkNotificationPopupComponent,{
      width: '40%'
    })
  }
}
