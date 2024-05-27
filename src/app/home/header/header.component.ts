import { Component } from '@angular/core';
import { SidebarService } from 'src/app/sidebar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(
    private sideBarService: SidebarService
  ) { }

  toggleSideNav() {
    this.sideBarService.toggleDrawer();
  }
}
