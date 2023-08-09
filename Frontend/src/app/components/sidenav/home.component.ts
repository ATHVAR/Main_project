// import { TmplAstRecursiveVisitor } from '@angular/compiler';
import { Component, OnInit , ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  // sidebar visibility
  isSidebarActive = false;
  @ViewChild('sidebar')
  sidebar!: ElementRef;
  dropdownStates: { [key: string]: boolean } = {}

  collapsed = false;

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

  // Toggle the sidebar visibility
  toggleSidebar(): void {
    this.isSidebarActive = !this.isSidebarActive;
    if (this.isSidebarActive) {
      this.renderer.addClass(this.sidebar.nativeElement, 'active');
    } else {
      this.renderer.removeClass(this.sidebar.nativeElement, 'active');
    }
    this.dropdownStates={};
  }

  // Submenu toggling
  toggleDropdown(submenuId: string): void {
    const submenu = document.getElementById(submenuId);
    if (submenu) {
      submenu.classList.toggle('show');
    }
  }
}