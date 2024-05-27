import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChargeDeletePopupComponent } from '../charge-delete-popup/charge-delete-popup.component';

export interface PeriodicElement {
  // instructor: any;
  Title: any;
  Amount: any;
   Due_Date: any;
  status: any;
  date: string;
  action:any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    
     Title: {
      text: 'Qatar National Bank',
      Text: "3 Mar 2022 10:53",
    },
    Amount: "1647726485", Due_Date:"100",  date: "View",
    status: {
      text: "Waiting",
    },
    action:"",
  },

  {
    
     Title: {
      text: 'Qatar National Bank',
      Text: "3 Mar 2022 10:53",
    },
    Amount: "2123135131", Due_Date:"200",  date: "---",
    status: {
      text: "Approved",
    },
    action:"",
  },

  {
   
  Title: {
    text: 'Qatar National Bank',
    Text: "3 Mar 2022 10:53",
    }, Amount: "546465654", Due_Date: "100",
    date: "---",
     status: {
      text: "Approved",
    }, 
    action:"",
  },

  {
    
    Title: {
      text: 'Qatar National Bank',
      Text: "3 Mar 2022 10:53",
    },
     Amount: "5492247188", Due_Date: "1000",
     date: "---",
     status: {
      text: "Approved",
      // Text: "3 Chance Remained"
    },
    action:"",
    
  },

];


@Component({
  selector: 'app-charge-account',
  templateUrl: './charge-account.component.html',
  styleUrls: ['./charge-account.component.css']
})
export class ChargeAccountComponent {
  displayedColumns: string[] = ['Title', 'Amount', 'Due_Date', 'date' , 'status','action'];
  dataSource = ELEMENT_DATA;

  constructor(public dialog: MatDialog) {}

  
  deletepopup():void{

    const newref=this.dialog.open(ChargeDeletePopupComponent,{
      width: '40%'
    })
  }
  openPopup_new(): void {
    const dialogclose = this.dialog.closeAll();
  }
}
