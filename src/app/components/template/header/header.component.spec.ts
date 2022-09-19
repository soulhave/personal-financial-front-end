import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDrawer } from '@angular/material/sidenav';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/material.module';
import { NavComponent } from '../nav/nav.component';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [
        NoopAnimationsModule,
        MaterialModule
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Given toggle is closed, When I call toggle method, then I expect return true', () => {
    // Arrange
    const navComponent = TestBed.createComponent(NavComponent).componentInstance;
    const matDrawerComponent = TestBed.createComponent(MatDrawer).componentInstance;
    navComponent.drawer = matDrawerComponent;
    component.navComponent = navComponent;

    // Act
    component.toggleDrawer();

    // Assert
    expect(component.navComponent.drawer.opened).toBeTruthy();
  });

  it('Given toggle is opened, When I call toggle method, then I expect return false', () => {
    // Arrange
    const navComponent = TestBed.createComponent(NavComponent).componentInstance;
    const matDrawerComponent = TestBed.createComponent(MatDrawer).componentInstance;
    navComponent.drawer = matDrawerComponent;
    component.navComponent = navComponent;

    // Act
    component.toggleDrawer(); // open
    component.toggleDrawer(); // close

    // Assert
    expect(component.navComponent.drawer.opened).toBeFalse();
  });
});
