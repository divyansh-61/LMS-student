import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChargeDeleteSuccessPopupComponent } from '../charge-delete-success-popup/charge-delete-success-popup.component';

@Component({
  selector: 'app-charge-delete-popup',
  templateUrl: './charge-delete-popup.component.html',
  styleUrls: ['./charge-delete-popup.component.css']
})
export class ChargeDeletePopupComponent {
  constructor(public dialog:MatDialog){}

  openPopup_new(): void {
    const dialogclose=this.dialog.closeAll()
    this.succefull()
  }
  openPopup_new1(): void {
    const dialogclose=this.dialog.closeAll()
 
  }
 


  succefull(): void {
    const dialogRef = this.dialog.open(ChargeDeleteSuccessPopupComponent, {
      width: '40%',
      // Set the desired width
      data: {},
    });
  }
}
