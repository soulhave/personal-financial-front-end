import { DrawerService } from './../../../services/drawer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private drawerService: DrawerService) { }

  ngOnInit(): void { 
  }

  toggleDrawer(){
    this.drawerService.toggle()
  }

}
