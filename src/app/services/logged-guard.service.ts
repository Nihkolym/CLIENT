import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from '../components/+authentication/services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedGuardService implements CanActivate {
  constructor(public auth: AuthenticationService, public router: Router) { }

  public canActivate(): boolean {
    if (this.auth.isAuthenticated()) {
      this.router.navigate(['pet-helper']);
      return false;
    }

    return true;
  }
}
