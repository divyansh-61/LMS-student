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
  selector: 'app-quizzes-my-results',
  templateUrl: './quizzes-my-results.component.html',
  styleUrls: ['./quizzes-my-results.component.css']
})
export class QuizzesMyResultsComponent {
  displayedColumns: string[] = ['instructor', 'quiz', 'quizGrade', 'myGrade', 'status', 'date'];
  dataSource = ELEMENT_DATA;
}
