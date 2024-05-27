import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommentViewPopupComponent } from '../comment-view-popup/comment-view-popup.component';
import { CommentEditPopupComponent } from '../comment-edit-popup/comment-edit-popup.component';
import { CommentDeletePopupComponent } from '../comment-delete-popup/comment-delete-popup.component';



export interface PeriodicElement {
  
  quiz: any;
  quizGrade: any;
  status: any;
  date: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    quiz: {
      text: 'Become a Product Manager',
      
    }, quizGrade: "View", status: {
      text: "Published",
    }, date: "13 Jul 2021 17:51"
  },

  {
     quiz: {
      text: 'Become a Product Manager',
    
    }, quizGrade: "View",  status: {
      text: "Published",
    }, date: "13 Jul 2021 17:51"
  },

  

];

@Component({
  selector: 'app-my-comment-course',
  templateUrl: './my-comment-course.component.html',
  styleUrls: ['./my-comment-course.component.css']
})
export class MyCommentCourseComponent {
  displayedColumns: string[] = [ 'quiz', 'quizGrade', 'status', 'date'];
  dataSource = ELEMENT_DATA;


  constructor(public dialog: MatDialog) {}

  viewComment(): void {
    const dialogRef = this.dialog.open(CommentViewPopupComponent, {
      width: '40%',
      // Set the desired width
      data: {},
    });
  }

  editpopup():void{

    const newref=this.dialog.open(CommentEditPopupComponent,{
      width: '40%'
    })
  }
  deletepopup():void{

    const newref=this.dialog.open(CommentDeletePopupComponent,{
      width: '40%'
    })
  }
  openPopup_new(): void {
    const dialogclose = this.dialog.closeAll();
  }
}


