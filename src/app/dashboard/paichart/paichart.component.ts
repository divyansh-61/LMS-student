import { Component } from '@angular/core';


// import { Label } from 'ng2-charts';
@Component({
  selector: 'app-paichart',
  templateUrl: './paichart.component.html',
  styleUrls: ['./paichart.component.css']
})
export class PaichartComponent {
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
}
