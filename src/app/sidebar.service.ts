import { Injectable } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private drawer: MatDrawer | undefined;

  setDrawer(drawer: MatDrawer): void {
    this.drawer = drawer;
  }

  toggleDrawer(): void {
    if (this.drawer) {
      this.drawer.toggle();
    }
  }
}
