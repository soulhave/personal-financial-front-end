import { MatDrawer } from '@angular/material/sidenav';
import { DrawerService } from './../../../services/drawer.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @ViewChild('drawer') drawer!: MatDrawer

  constructor(private drawerService: DrawerService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.drawerService.setDrawer(this.drawer);
  }

}
