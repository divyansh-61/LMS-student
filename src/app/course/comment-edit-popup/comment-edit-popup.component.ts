import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommentEditSAVEPOPUPComponent } from '../comment-edit-save-popup/comment-edit-save-popup.component';

@Component({
  selector: 'app-comment-edit-popup',
  templateUrl: './comment-edit-popup.component.html',
  styleUrls: ['./comment-edit-popup.component.css']
})
export class CommentEditPopupComponent {
  constructor(public dialog:MatDialog){}

  openPopup_new(): void {
    const dialogclose=this.dialog.closeAll()
    this.succefull()
  }

  openPopup_new2(): void {
    const dialogclose=this.dialog.closeAll()
  }


  succefull(): void {
    const dialogRef = this.dialog.open(CommentEditSAVEPOPUPComponent, {
      width: '40%',
      // Set the desired width
      data: {},
    });
  }

  
}
