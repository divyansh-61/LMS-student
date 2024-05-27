import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddExperiencePopupComponent } from '../add-experience-popup/add-experience-popup.component';

@Component({
  selector: 'app-experience-setting',
  templateUrl: './experience-setting.component.html',
  styleUrls: ['./experience-setting.component.css']
})
export class ExperienceSettingComponent {
  constructor(public dialog: MatDialog) {}

  
  addExperience():void{

    const newref=this.dialog.open(AddExperiencePopupComponent,{
      width: '40%'
    })
  }

}
