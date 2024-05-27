import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lms';
  sidebarState!: string;
  isMobile!: boolean;
  isLoggedIn: boolean = false;
  url!: string;
  sliderMode: any = 'side';

  constructor(
    private router : Router
  ) { }

  ngAfterViewChecked(){
    this.url = this.router.url
  }
}
