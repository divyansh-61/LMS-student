import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SuccessfullpopupComponent } from '../successfullpopup/successfullpopup.component';
import { NgZone } from '@angular/core';



@Component({
  selector: 'app-meetingpopup',
  templateUrl: './meetingpopup.component.html',
  styleUrls: ['./meetingpopup.component.css']
})
export class MeetingpopupComponent {
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
