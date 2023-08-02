import { Component, OnInit , ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { INavbarData } from './helper';
import { navbarData } from './nav-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  

  isSidebarActive = false; // Add this property to control sidebar visibility
  @ViewChild('sidebar')
  sidebar!: ElementRef;
  dropdownStates: { [key: string]: boolean } = {}

  collapsed = false;
  navData: INavbarData[] = navbarData;
  isAddUserActive: boolean = false;
  isViewUserActive :boolean = false;

  constructor(private router:Router, private renderer: Renderer2){}

  ngOnInit(): void {
    
  }

 

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
  }
  logout(){
    // after implementing tokenization
    // localStorage.removeItem('token');
    this.router.navigate(['']);
  }

  toggleSidebar(): void {
    this.isSidebarActive = !this.isSidebarActive; // Toggle the sidebar visibility
    if (this.isSidebarActive) {
      this.renderer.addClass(this.sidebar.nativeElement, 'active');
    } else {
      this.renderer.removeClass(this.sidebar.nativeElement, 'active');
    }
    if (this.isSidebarActive) {
      this.isAddUserActive = false; // Hide AddUser when sidebar is toggled
    }
    
  }
  loadAddUser(): void {
    this.isAddUserActive = true;
    this.isSidebarActive = true; // Close sidebar when AddUser is loaded
    this.isViewUserActive=false;
  }
  
  loadViewUser(): void {
    this.isViewUserActive=true;
    this.isSidebarActive=true;
    this.isAddUserActive=false;
  }
  toggleDropdown(submenuId: string): void {
    const submenu = document.getElementById(submenuId);
    if (submenu) {
      submenu.classList.toggle('show');
    }
  }

}
