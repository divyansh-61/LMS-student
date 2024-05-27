import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { SidebarService } from 'src/app/sidebar.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],

})
export class SidenavComponent {

  
  @ViewChild('drawer') drawer: MatDrawer | undefined;
  isMobile!: boolean;
  sliderMode: any;

  constructor(
    private sideBarService: SidebarService,
    private breakpointObserver: BreakpointObserver,
  ) { }


  ngOnInit() {
    this.breakpointObserver.observe([Breakpoints.XSmall, Breakpoints.Small])
      .subscribe(result => {
        this.isMobile = result.matches;
        if (this.isMobile) {
          this.sliderMode = 'over'
        } else {
          this.sliderMode = 'side'
        }

      });
  }

  ngAfterViewInit(): void {
    if (this.drawer) {
      this.sideBarService.setDrawer(this.drawer);
    }
  }
}
