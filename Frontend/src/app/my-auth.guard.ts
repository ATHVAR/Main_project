import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './shared/link.service';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const userRole = this.loginService.getUserRole();

    if (route.data['roles'].includes(userRole)) {
      return true; // User has the required role, allow access
    } else {
      alert('Access Denied'); // Show an access denied alert
      this.router.navigate(['home'])
      return false;
    }
  }
}