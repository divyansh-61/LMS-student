import { Component } from '@angular/core';
import { MeetingpopupComponent } from '../meetingpopup/meetingpopup.component';
import { SuccessfullpopupComponent } from '../successfullpopup/successfullpopup.component';
import { MatDialog } from '@angular/material/dialog';
import { ContactstudentpopupComponent } from '../contactstudentpopup/contactstudentpopup.component';

export interface PeriodicElement {
  instructor: any;
  quiz: any;
  quizGrade: number;
  myGrade: number;
  status: any;
  date: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    instructor: {
      img: 'assets/Quizzes/indoor-portrait-bearded-young-man-with-trendy-hairstyle 1.png',
      text: 'Ricardo dave',
      Text: "Ricardodave09@hotmail.com",
    }, quiz: {
      text: 'Elementary Quiz',
      Text: "Become a Product Manager",
    }, quizGrade: 100, myGrade: 80, status: {
      text: "Passed",
    }, date: "13 Jul 2021 17:51"
  },

  {
    instructor: {
      img: 'assets/Quizzes/indoor-portrait-bearded-young-man-with-trendy-hairstyle 1 (1).png',
      text: 'Kate Williams',
      Text: "kate.williams.dev@yahoo.com",
    }, quiz: {
      text: 'First Quiz',
      Text: "How to Manage Your Virtual Team",
    }, quizGrade: 100, myGrade: 40, status: {
      text: "Waiting",
    }, date: "13 Jul 2021 17:51"
  },

  {
    instructor: {
      img: 'assets/Quizzes/Mask group (1).png',
      text: 'Robert Ransdell',
      Text: "instructor@demo.com",
    }, quiz: {
      text: 'Midterm Quiz',
      Text: "Excel from Beginner to Advanced",
    }, quizGrade: 100, myGrade: 40, status: {
      text: "Failed",
      Text: "3 Chance Remained"
    }, date: "13 Jul 2021 17:51"
  },

];

@Component({
  selector: 'app-myres',
  templateUrl: './myres.component.html',
  styleUrls: ['./myres.component.css']
})
export class MyresComponent {
  displayedColumns: string[] = ['instructor', 'quiz', 'quizGrade', 'myGrade', 'status', 'date'];
  dataSource = ELEMENT_DATA;

  constructor(public dialog: MatDialog) {}
  

  openPopup(): void {
    const dialogRef = this.dialog.open(MeetingpopupComponent, {
      width: '40%',
      // Set the desired width
      data: {},
    });
  }
  successfullpopup():void{

    const newref=this.dialog.open(SuccessfullpopupComponent,{
      width: '40%'


    })
  }
  openPopup_new(): void {
    const dialogclose = this.dialog.closeAll();
  }
  
  contactstudent():void{

    const contact= this.dialog.open(ContactstudentpopupComponent,{
      width: '40%'
    })
  }

}
