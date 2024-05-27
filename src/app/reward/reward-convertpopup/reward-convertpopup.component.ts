import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RewardConvertConvertpointPopupComponent } from '../reward-convert-convertpoint-popup/reward-convert-convertpoint-popup.component';

@Component({
  selector: 'app-reward-convertpopup',
  templateUrl: './reward-convertpopup.component.html',
  styleUrls: ['./reward-convertpopup.component.css']
})
export class RewardConvertpopupComponent {
  constructor(public dialog:MatDialog){}

  openPopup_new(): void {
    const dialogclose=this.dialog.closeAll()
    this.succefull()
  }
  openPopup_new2(): void {
    const dialogclose=this.dialog.closeAll()
   
  }
 
 
  succefull(): void {
    const dialogRef = this.dialog.open(RewardConvertConvertpointPopupComponent, {
      width: '40%',
      // Set the desired width
      data: {},
    });
  }
}
