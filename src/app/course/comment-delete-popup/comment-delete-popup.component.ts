import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommentDeleteSuccessPopupComponent } from '../comment-delete-success-popup/comment-delete-success-popup.component';

@Component({
  selector: 'app-comment-delete-popup',
  templateUrl: './comment-delete-popup.component.html',
  styleUrls: ['./comment-delete-popup.component.css']
})
export class CommentDeletePopupComponent {
  constructor(public dialog:MatDialog){}

  openPopup_new(): void {
    const dialogclose=this.dialog.closeAll();
    this.succefull();
  }

  openPopup_new2(): void {
    const dialogclose=this.dialog.closeAll();
  }
 


  succefull(): void {
    const dialogRef = this.dialog.open(CommentDeleteSuccessPopupComponent, {
      width: '40%',
      // Set the desired width
      data: {},
    });
  }

}
