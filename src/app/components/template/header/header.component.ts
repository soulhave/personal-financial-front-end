import { Component, Input, OnInit } from '@angular/core';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() navComponent!: NavComponent;

  constructor() { }

  ngOnInit(): void { 
  }

 toggleDrawer(){
    if (this.navComponent != null) {
      this.navComponent.drawer.toggle();
    }
  }
}
