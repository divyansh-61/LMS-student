import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeletePopupBasicInfoComponent } from '../delete-popup-basic-info/delete-popup-basic-info.component';

@Component({
  selector: 'app-extra-info-setting',
  templateUrl: './extra-info-setting.component.html',
  styleUrls: ['./extra-info-setting.component.css']
})
export class ExtraInfoSettingComponent {
  constructor(public dialog: MatDialog) {}

  
  delete():void{

    const newref=this.dialog.open(DeletePopupBasicInfoComponent,{
      width: '40%'
    })
  }

}
