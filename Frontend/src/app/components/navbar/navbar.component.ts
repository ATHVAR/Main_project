import { Component } from '@angular/core';
import { LoginFormVisibilityService } from 'src/app/shared/login-form-visiblity.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  loggedIn: boolean = false;
  showLoginForm: boolean = false;
  showLogoutButton: boolean = false;

  constructor(private loginFormVisibilityService: LoginFormVisibilityService) {}
  
  login() {
    // Implement your login logic here
    this.showLoginForm = true;
  }

  logout() {
    // Implement your logout logic here
    this.loggedIn = false;
  }

  onLoginSubmitted() {
    // This function will be called when the login form is submitted
    // Implement your login logic here
    // For simplicity, we will just consider a successful login
    this.loggedIn = true;
    this.showLoginForm = false;
    this.showLogoutButton = true;
  }
}
