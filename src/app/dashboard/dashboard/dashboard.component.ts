import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivateofflinestatusComponent } from '../activateofflinestatus/activateofflinestatus.component';
import { NewPrivateComponent } from '../new-private/new-private.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  isChecked!: boolean
  Withdrawable = '$995.20';
  AccountBalance = '$995.20';
  AccountBalanceimg = "assets/dashboard/AccountBalance.svg"

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    barThickness: 10, // Adjust the value as needed
  };

  public barChartLabels: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
  ];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;
  public barChartData: any[] = [
    {
      data: [65, 59, 80, 81, 56, 55, 40],
      label: 'Series A',
      backgroundColor: '#FF3389' // Specify color for Series A
    },
    {
      data: [28, 48, 40, 19, 86, 27, 90],
      label: 'Series B',
      backgroundColor: '#2E108E' // Specify color for Series B
    },
  ];
  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }



  // --------------------Graph3 --------------------
  chartOptions3 = {
    animationEnabled: true,
    title: {
      // text: "Sales by Department"
    },
    data: [{
      type: "pie",
      startAngle: -90,
      indexLabel: "{name}: {y}",
      yValueFormatString: "#,###.##'%'",
      dataPoints: [
        { y: 14.1, name: "Toys" },
        { y: 28.2, name: "Electronics" },
        { y: 14.4, name: "Groceries" },
        { y: 43.3, name: "Furniture" }
      ]
    }]
  }

  constructor(public dialog: MatDialog) { }


  toggle(popup: any) {

    this.Active();
    if (popup.checked) {
      popup.checked = !popup.checked;
    } else {
      popup.checked = popup.checked;
    }

  }

  Active(): void {
    const deletepopup = this.dialog.open(ActivateofflinestatusComponent, {
      width: "50%",
      data: {},
    })
  }
  NewPrivate(): void {
    const deletepopup = this.dialog.open(NewPrivateComponent, {
      width: "50%",
      data: {},
    })
  }

  isShowNewPlan: boolean = false;
  toggleNewPlan() {
    this.isShowNewPlan = !this.isShowNewPlan
  }


  onToggleChange() {
    // $event.preventDefault();

    if (this.isChecked) {
      this.isChecked = !this.isChecked;
      this.dialog.open(ActivateofflinestatusComponent).afterClosed().subscribe(
        confirmed => { if (confirmed) this.isChecked = true; }
      );

      this.isChecked = !this.isChecked;

    }



    // if (this.isChecked == false) {
    //   this.isChecked = true
    //   this.dialog.open(ActivateofflinestatusComponent).afterClosed().subscribe(
    //     // confirmed => { if (confirmed) this.isChecked = true; }
    //   );
    // } else {


    console.log(this.isChecked);

    // }

  }

}
