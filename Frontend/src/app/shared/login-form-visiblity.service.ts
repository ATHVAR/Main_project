import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginFormVisibilityService {
  private showLoginForm = new BehaviorSubject<boolean>(false);
  showLoginForm$ = this.showLoginForm.asObservable();

  setShowLoginFormVisibility(visible: boolean) {
    this.showLoginForm.next(visible);
  }
}
