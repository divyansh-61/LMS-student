import { Component } from '@angular/core';

export interface PeriodicElement {
  course: any;
  certificateId: number;
  date: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    course: {
      text: 'Travel Management Course',
    }, certificateId: 3, date: "13 Jul 2021"
  }

];

@Component({
  selector: 'app-completion-certificates',
  templateUrl: './completion-certificates.component.html',
  styleUrls: ['./completion-certificates.component.css']
})
export class CompletionCertificatesComponent {
  displayedColumns: string[] = ['course', 'certificateId', 'date'];
  dataSource = ELEMENT_DATA;
}
