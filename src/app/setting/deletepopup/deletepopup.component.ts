import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
// import { YespopupComponent } from '../yespopup/yespopup.component';

@Component({
  selector: 'app-deletepopup',
  templateUrl: './deletepopup.component.html',
  styleUrls: ['./deletepopup.component.css']
})
export class DeletepopupComponent {
  constructor(public dialog: MatDialog) { }

 
  // yespopup(): void {
  //   const yespopup = this.dialog.open(YespopupComponent, {
  //     width: '50%',
  //   })
  // }
}
