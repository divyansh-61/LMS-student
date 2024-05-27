import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeletepopupComponent } from '../deletepopup/deletepopup.component';

@Component({
  selector: 'app-about-setting-page',
  templateUrl: './about-setting-page.component.html',
  styleUrls: ['./about-setting-page.component.css']
})
export class AboutSettingPageComponent {
  constructor(public dialog: MatDialog) { }

  deletepopup(): void {
    const deletepopupconst = this.dialog.open(DeletepopupComponent, {
      width: '50%',
      data: {},
    })
  }
}
