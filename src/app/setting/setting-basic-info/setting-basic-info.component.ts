import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeletePopupBasicInfoComponent } from '../delete-popup-basic-info/delete-popup-basic-info.component';


@Component({
  selector: 'app-setting-basic-info',
  templateUrl: './setting-basic-info.component.html',
  styleUrls: ['./setting-basic-info.component.css'],

})
export class SettingBasicInfoComponent {
 
  selected1="Hindi";
  selected2="America/New_York";
  selected3="United States Dollar ($)";
  

  constructor(public dialog: MatDialog) {}

  
  delete():void{

    const newref=this.dialog.open(DeletePopupBasicInfoComponent,{
      width: '40%'
    })
  }

}
