import { Component } from '@angular/core';


export interface PeriodicElement {
  // instructor: any;
  Title: any;
  Amount: any;
   Due_Date: any;
  status: any;
  date: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    // instructor: {
    //   img: 'assets/Quizzes/indoor-portrait-bearded-young-man-with-trendy-hairstyle 1.png',
    //   text: 'Ricardo dave',
    //   Text: "Ricardodave09@hotmail.com",
    // },
     Title: {
      text: 'Upfront (30%)',
      // Text: "Become a Product Manager",
    },
    Amount: "$30", Due_Date:"---",  date: "13 Jul 2021 17:51",
    status: {
      text: "Paid",
    },
  },

  {
    // instructor: {
    //   img: 'assets/Quizzes/indoor-portrait-bearded-young-man-with-trendy-hairstyle 1.png',
    //   text: 'Ricardo dave',
    //   Text: "Ricardodave09@hotmail.com",
    // },
     Title: {
      text: '(30%)',
      Text: "90 Days after purchase",
    },
    Amount: "$20", Due_Date:"1 Sep 2023",  date: "---",
    status: {
      text: "Unpaid (Overdue)",
    },
  },

  {
    // instructor: {
    //   img: 'assets/Quizzes/indoor-portrait-bearded-young-man-with-trendy-hairstyle 1 (1).png',
    //   text: 'Kate Williams',
    //   Text: "kate.williams.dev@yahoo.com",
    // }, 
  Title: {
      text: '(30%)',
      Text: "180 Days after purchase",
    }, Amount: "$30", Due_Date: "30 Nov 2023",
    date: "---",
     status: {
      text: "Unpaid (Overdue)",
    }, 
  },

  {
    // instructor: {
    //   img: 'assets/Quizzes/Mask group (1).png',
    //   text: 'Robert Ransdell',
    //   Text: "instructor@demo.com",
    // }, 
    Title: {
      text: '(30%)',
      Text: "270 Days after purchase",
    },
     Amount: "$30", Due_Date: "28 Feb 2024",
     date: "---",
     status: {
      text: "unpaid",
      // Text: "3 Chance Remained"
    },
    
  },

];


@Component({
  selector: 'app-installment-click-view-details',
  templateUrl: './installment-click-view-details.component.html',
  styleUrls: ['./installment-click-view-details.component.css']
})
export class InstallmentClickViewDetailsComponent {
  displayedColumns: string[] = ['Title', 'Amount', 'Due_Date', 'date' , 'status'];
  dataSource = ELEMENT_DATA;
}
