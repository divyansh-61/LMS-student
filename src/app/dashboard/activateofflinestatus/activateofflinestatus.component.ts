import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SuccessfullyComponent } from '../successfully/successfully.component';

@Component({
  selector: 'app-activateofflinestatus',
  templateUrl: './activateofflinestatus.component.html',
  styleUrls: ['./activateofflinestatus.component.css']
})
export class ActivateofflinestatusComponent {
  constructor(public dialog: MatDialog) { }

  yespopup(): void {
    const deletepopup = this.dialog.open(SuccessfullyComponent, {
      width: "50%",
      data: {},
    })
  }

  isShowNewPlan: boolean = false;
  toggleNewPlan() {
    this.isShowNewPlan = !this.isShowNewPlan
  }

}
