import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RewardConvertpopupComponent } from '../reward-convertpopup/reward-convertpopup.component';

export interface PeriodicElement {
  

  Description: any;
   Amount: any;
  creator: any;
  date: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    
     
    Description: "Purchase", Amount:"165",  date: "3 June 2023 05:04",
    creator: {
      text: "Earn",
    },
  },

  {
   
     
    Description: "Course Review (Rate)", Amount:"15",  date: "17 March 2023 18:50",
    creator: {
      text: "Earn",
    },
  },

  {
    
   Description: "Purchase", Amount: "165",
    date: "16 March 2023 06:03",
     creator: {
      text: "Earn",
    }, 
  },

  {

    
    Description: "Referral & Affiliate", Amount: "5",
     date: "16 March 2023 05:38",
     creator: {
      text: "Earn",
      // Text: "3 Chance Remained"
    },

},
{


  Description: "Referral & Affiliate", Amount: "5",
   date: "16 March 2023 05:26",
   creator: {
    text: "Earn",
    // Text: "3 Chance Remained"
  },

},

{

 
  Description: "Purchase", Amount: "110",
   date: "15 March 2023 20:20",
   creator: {
    text: "Earn",
    // Text: "3 Chance Remained"
  },

},

{


  Description: "Purchase", Amount: "165",
   date: "15 March 2023 20:18",
   creator: {
    text: "Earn",
    // Text: "3 Chance Remained"
  },

},

{

 
  Description: "Purchase", Amount: "110 ",
   date: "15 March 2023 19:24",
   creator: {
    text: "Earn",
    // Text: "3 Chance Remained"
  },

},



];

@Component({
  selector: 'app-reward-point-page',
  templateUrl: './reward-point-page.component.html',
  styleUrls: ['./reward-point-page.component.css']
})
export class RewardPointPageComponent {
  displayedColumns: string[] = [ 'Description', 'Amount',  'creator' ,'date' ];
  dataSource = ELEMENT_DATA;

  constructor(public dialog: MatDialog) {}

  convertpoint(): void {
    const dialogRef = this.dialog.open(RewardConvertpopupComponent, {
      width: '40%',
      // Set the desired width
      data: {},
    });
  }
}
