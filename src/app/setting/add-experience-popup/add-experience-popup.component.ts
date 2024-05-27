import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-add-experience-popup',
  templateUrl: './add-experience-popup.component.html',
  styleUrls: ['./add-experience-popup.component.css']
})
export class AddExperiencePopupComponent {
  constructor(public dialog: MatDialog) { }

  closePopup(): void {
    const dialogclose = this.dialog.closeAll()
  }
}
