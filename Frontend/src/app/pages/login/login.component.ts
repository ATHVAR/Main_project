import { Component, Output, EventEmitter } from '@angular/core';
import { LoginService } from 'src/app/shared/link.service';
import { LoginFormVisibilityService } from 'src/app/shared/login-form-visiblity.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  showLoginForm: boolean = false;

  constructor(
    private loginService: LoginService,
    private loginFormVisibilityService: LoginFormVisibilityService
  ) {
    this.loginFormVisibilityService.showLoginForm$.subscribe(
      (visibility: boolean) => {
        this.showLoginForm = visibility;
      }
    );
  }

  @Output() submitted = new EventEmitter<void>();
  @Output() loginFormOpened = new EventEmitter<boolean>();

  toggleLoginForm() {
    this.showLoginForm = !this.showLoginForm;
    this.loginFormVisibilityService.setShowLoginFormVisibility(this.showLoginForm);
    this.loginFormOpened.emit(this.showLoginForm);
  }

  onSubmit() {
    // Implement your login logic here
    // For simplicity, we will just consider a successful login
    // You can add proper validation and authentication logic here

    // Emit the 'submitted' event when the form is submitted
    this.submitted.emit();

    // Call the login service to perform the API call to your backend server
    this.loginService.login(this.email, this.password).subscribe(
      (response) => {
        // Login successful
        alert('Login successful');
        // You can perform further actions here, such as redirecting the user to a dashboard page.
        this.loginFormVisibilityService.setShowLoginFormVisibility(false);
        this.loginFormVisibilityService.setLoggedIn(true);
      },
      (error) => {
        // Login failed
        alert('Invalid credentials');
      }
    );
  }

  onCancel() {
    // Close the login form by hiding it
    this.loginFormVisibilityService.setShowLoginFormVisibility(false);
  }
}
