import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { YesPopupDeletePopupBasicInfoComponent } from '../yes-popup-delete-popup-basic-info/yes-popup-delete-popup-basic-info.component';

@Component({
  selector: 'app-delete-popup-basic-info',
  templateUrl: './delete-popup-basic-info.component.html',
  styleUrls: ['./delete-popup-basic-info.component.css']
})
export class DeletePopupBasicInfoComponent {
  constructor(public dialog: MatDialog) { }

  openPopup_new(): void {
    const dialogclose = this.dialog.closeAll()
    this.yes()
  }
  openPopup_new1(): void {
    const dialogclose = this.dialog.closeAll()
  }


  yes(): void {
    const dialogRef = this.dialog.open(YesPopupDeletePopupBasicInfoComponent, {
      width: '40%',
      // Set the desired width
      data: {},
    });
  }

}
