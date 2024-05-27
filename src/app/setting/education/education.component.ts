import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { AddEducationPopupComponent } from '../add-education-popup/add-education-popup.component';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {

  constructor(public dialog: MatDialog) {}

  
  addEducation():void{

    const newref=this.dialog.open(AddEducationPopupComponent,{
      width: '40%'
    })
  }

}
