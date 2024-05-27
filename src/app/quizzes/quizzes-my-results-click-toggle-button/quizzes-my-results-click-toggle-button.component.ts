import { Component } from '@angular/core';

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
      img: 'assets/Quizzes/indoor-portrait-bearded-young-man-with-trendy-hairstyle 1 (1).png',
      text: 'Kate Williams',
      Text: "kate.williams.dev@yahoo.com",
    }, quiz: {
      text: 'First Quiz',
      Text: "How to Manage Your Virtual Team",
    }, quizGrade: 100, myGrade: 40, status: {
      text: "Waiting",
    }, date: "13 Jul 2021 17:51"
  }

];

@Component({
  selector: 'app-quizzes-my-results-click-toggle-button',
  templateUrl: './quizzes-my-results-click-toggle-button.component.html',
  styleUrls: ['./quizzes-my-results-click-toggle-button.component.css']
})
export class QuizzesMyResultsClickToggleButtonComponent {
  displayedColumns: string[] = ['instructor', 'quiz', 'quizGrade', 'myGrade', 'status', 'date'];
  dataSource = ELEMENT_DATA;
}
