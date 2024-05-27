import { Component } from '@angular/core';

@Component({
  selector: 'app-coursessupport',
  templateUrl: './coursessupport.component.html',
  styleUrls: ['./coursessupport.component.css']
})
export class CoursessupportComponent {
  displayedColumns: string[] = ['filePath', 'Title', 'Status'];
  dataSource = TABLEDATA;
}
export interface PeriodicElement {

  TiteleData: string;
  TiteleData2: string;
  Status: string;
  fileName: string;
  fileName2: string;
  filePath: string;
}

const TABLEDATA: PeriodicElement[] = [
  {
    filePath: 'assets/support/Mask group.png', fileName: 'Cameron Schofield', fileName2: 'student',
    TiteleData: 'Version of linux', TiteleData2: ' 12 Jul 2021 | 00: 10', Status: 'Closed'
  },
  {
    filePath: 'assets/support/Mask group (1).png', fileName: 'Robert B. Gray', fileName2: 'student',
    TiteleData: 'help for start', TiteleData2: '11 Jul 2021 | 23:59', Status: 'Waiting'
  },

];
