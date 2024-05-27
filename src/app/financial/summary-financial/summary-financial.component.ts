import { Component } from '@angular/core';


export interface PeriodicElement {
  
  Title: any;
  Description: any;
   Amount: any;
  creator: any;
  date: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    
     Title: {
      text: 'Cashback',
      Text: "---",
    },
    Description: "", Amount:"+3",  date: "3 Jun 2023",
    creator: {
      text: "Automatic",
    },
  },

  {
   
     Title: {
      text: 'Installment',
      Text: "Installment and Secure Host",
    },
    Description: "Paid form credit", Amount:"-33",  date: "3 Jun 2023",
    creator: {
      text: "Automatic",
    },
  },

  {
    
  Title: {
      text: 'Effective Time Management',
      Text: "#2000",
    }, Description: "Affiliate income", Amount: "+1.50",
    date: "3 Jun 2023",
     creator: {
      text: "Automatic",
    }, 
  },

  {

    Title: {
      text: '---',
      Text: "---",
    },
    Description: "Affiliate income", Amount: "+20",
     date: "3 Jun 2023",
     creator: {
      text: "Automatic",
      // Text: "3 Chance Remained"
    },

},
{

  Title: {
    text: 'Installment and Secure Host',
    Text: "#2022",
  },
  Description: "Affiliate income", Amount: "+5",
   date: "3 Jun 2023",
   creator: {
    text: "Automatic",
    // Text: "3 Chance Remained"
  },

},

{

  Title: {
    text: '---',
    Text: "---",
  },
  Description: "Affiliate income", Amount: "+20",
   date: "3 Jun 2023",
   creator: {
    text: "Automatic",
    // Text: "3 Chance Remained"
  },

},

{

  Title: {
    text: 'Where the Crawdads Sing e-book',
    Text: "#6",
  },
  Description: "Paid form credit", Amount: "-17",
   date: "3 Jun 2023",
   creator: {
    text: "Automatic",
    // Text: "3 Chance Remained"
  },

},

{

  Title: {
    text: 'Painting tools',
    Text: "#1",
  },
  Description: "Paid form credit", Amount: "-52.25",
   date: "3 Jun 2023",
   creator: {
    text: "Automatic",
    // Text: "3 Chance Remained"
  },

},

{

  Title: {
    text: 'Manual document',
    Text: "---",
  },
  Description: "Affiliate income", Amount: "+300",
   date: "3 Jun 2023",
   creator: {
    text: "Manual",
    // Text: "3 Chance Remained"
  },

},
  

];


@Component({
  selector: 'app-summary-financial',
  templateUrl: './summary-financial.component.html',
  styleUrls: ['./summary-financial.component.css']
})
export class SummaryFinancialComponent {
  displayedColumns: string[] = ['Title', 'Description', 'Amount',  'creator' ,'date' ];
  dataSource = ELEMENT_DATA;
}
