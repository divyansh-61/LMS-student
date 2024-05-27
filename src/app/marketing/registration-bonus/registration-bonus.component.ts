import { Component } from '@angular/core';

export interface PeriodicElement {
  instructor: any;
  quiz: any;
  quizGrade: number;
  date: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    instructor: { img: 'assets/Markating/Mask group (1).png', text: 'Robert Travis', },
    quiz: { text: '$20' },
    quizGrade: 100, date: "13 Jul 2021 17:51"
  },
  {
    instructor: {
      img: 'assets/Markating/Mask group.png',
      text: 'Lewis Erickson',

    }, quiz: {
      text: '$20'
    }, quizGrade: 100, date: "13 Jul 2021 17:51"
  },
];

@Component({
  selector: 'app-registration-bonus',
  templateUrl: './registration-bonus.component.html',
  styleUrls: ['./registration-bonus.component.css']
})
export class RegistrationBonusComponent {
  displayedColumns: string[] = ['instructor', 'quiz', 'quizGrade', 'date'];
  dataSource = ELEMENT_DATA;
}

