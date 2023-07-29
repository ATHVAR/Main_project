import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { INavbarData } from './helper';
import { navbarData } from './nav-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  collapsed = false;
  navData: INavbarData[] = navbarData;
  constructor(private router:Router){}

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

}
