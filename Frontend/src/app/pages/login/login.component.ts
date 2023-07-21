import { Component, Output ,EventEmitter } from '@angular/core';
import { LoginFormVisibilityService } from 'src/app/shared/login-form-visiblity.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent {
  email : string='';
  password: string = '';
  showLoginForm: boolean = false;


  constructor(private loginFormVisibilityService: LoginFormVisibilityService) {}
  
  @Output() submitted = new EventEmitter<void>();
  @Output() loginFormOpened = new EventEmitter<boolean>();


   onSubmit() {
    // Implement your login logic here
    // For simplicity, we will just consider a successful login
    // You can add proper validation and authentication logic here

    // Emit the 'submitted' event when the form is submitted
    this.submitted.emit();
  }

  private showLogoutButton() {
    // Show the logout button in the navbar
    const navbarComponent: any = document.querySelector('app-navbar');
    if (navbarComponent) {
      navbarComponent.loggedIn = true;
    }
  }
}

