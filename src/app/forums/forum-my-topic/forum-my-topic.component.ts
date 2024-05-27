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
      img: 'assets/forum/Mask group.png',
      text: 'What is social media?',
      Text: " By Cameron Schofield",
    }, quiz: {
      text: 'Social Media',
     
    }, quizGrade: 1, 
     date: "24 Jun 2022 16:12"
  },



 

];

@Component({
  selector: 'app-forum-my-topic',
  templateUrl: './forum-my-topic.component.html',
  styleUrls: ['./forum-my-topic.component.css']
})
export class ForumMyTopicComponent {
  selected="All";
  displayedColumns: string[] = ['instructor', 'quiz', 'quizGrade',  'date'];
  dataSource = ELEMENT_DATA;
}
