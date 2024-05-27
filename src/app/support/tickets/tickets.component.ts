import { Component } from '@angular/core';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent {
  displayedColumns: string[] = ['Contact', 'Updated-date', 'Department', 'Status'];
  dataSource = TABLEDATA;
}
export interface PeriodicElement {
  img: string;
  fileName: string;
  UpdateDate: string;
  Department: string;

  Status: string;
}

const TABLEDATA: PeriodicElement[] = [
  {
    img: 'assets/support/Mask groupsa.png', fileName: 'Problem with quiz', 
    UpdateDate: '4 Jul 2021 | 04:08',  Department: 'Content', Status: 'Closed'
  },
  {
    img: 'assets/support/Mask groupsa.png', fileName: 'Refund Request #64237', 
    UpdateDate: '12 Jul 2021 | 00:17', Department: 'Financial', Status: 'Waiting'
  },

];
