import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-add-education-popup',
  templateUrl: './add-education-popup.component.html',
  styleUrls: ['./add-education-popup.component.css']
})
export class AddEducationPopupComponent {
  constructor(public dialog: MatDialog) { }

  closePopup(): void {
    const dialogclose = this.dialog.closeAll()
  }
}
