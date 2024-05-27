import { Component } from '@angular/core';

export interface PeriodicElement {
  instructor: any;
  quiz: any;
  quizGrade: number;
  date: string;
}

const ELEMENT_DATA: PeriodicElement[] = [


  {
    instructor: {
      img: 'assets/Quizzes/Mask group (1).png',
      text: 'Robert Ransdell',
      Text: "instructor@demo.com",
    }, quiz: {
      text: 'Final Quiz',
      Text: "Learn linux in 5 days",
    }, quizGrade: 100,  date: "13 Jul 2021 17:51"
  },

  {
    instructor: {
      img: 'assets/Quizzes/indoor-portrait-bearded-young-man-with-trendy-hairstyle 1 (2).png',
      text: 'James Kong',
      Text: "Jameskong2021@gmail.com",
    }, quiz: {
      text: 'Placement Quiz',
      Text: "Learn and Understand AngularJS",
    }, quizGrade: 100, date: "13 Jul 2021 17:51"
  },

];

@Component({
  selector: 'app-quizzes-not-participated',
  templateUrl: './quizzes-not-participated.component.html',
  styleUrls: ['./quizzes-not-participated.component.css']
})
export class QuizzesNotParticipatedComponent {
  displayedColumns: string[] = ['instructor', 'quiz', 'quizGrade', 'date'];
  dataSource = ELEMENT_DATA;
}
