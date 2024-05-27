import { Component } from '@angular/core';

export interface PeriodicElement {
  certificate: any;
  certificateId: number;
  minimumGrade: number;
  averageGrade: number;
  myGrade: any;
  date: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    certificate: {
      text: 'Ricardo dave',
      Text: "Ricardodave09@hotmail.com",
    }, certificateId: 3, minimumGrade: 70, averageGrade: 100, myGrade: 80, date: "13 Jul 2021"
  }

];


@Component({
  selector: 'app-certificates-achievements',
  templateUrl: './certificates-achievements.component.html',
  styleUrls: ['./certificates-achievements.component.css']
})
export class CertificatesAchievementsComponent {
  displayedColumns: string[] = ['certificate', 'certificateId', 'minimumGrade', 'averageGrade', 'myGrade', 'date'];
  dataSource = ELEMENT_DATA;
}
