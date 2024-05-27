import { Component } from '@angular/core';
import { SuccessfullpopupComponent } from '../successfullpopup/successfullpopup.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-contactstudentpopup',
  templateUrl: './contactstudentpopup.component.html',
  styleUrls: ['./contactstudentpopup.component.css']
})
export class ContactstudentpopupComponent {
  constructor(public dialog:MatDialog){}

  successfullpopup():void{

    const newref=this.dialog.open(SuccessfullpopupComponent,{
      width: '40%'


    })
  }
  remove():void{
    const close=this.dialog.closeAll()
    
    
    this.successfullpopup()
  }

  openPopup_new(): void {
    
    const dialogclose=this.dialog.closeAll()
  }


}
