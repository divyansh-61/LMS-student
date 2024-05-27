import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-comment-edit-save-popup',
  templateUrl: './comment-edit-save-popup.component.html',
  styleUrls: ['./comment-edit-save-popup.component.css']
})
export class CommentEditSAVEPOPUPComponent {
  constructor(public dialog:MatDialog){}

  openPopup_new(): void {
    const dialogclose=this.dialog.closeAll()
    
  }
}
