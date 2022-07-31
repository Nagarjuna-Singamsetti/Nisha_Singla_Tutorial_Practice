import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _authService: AuthService) { }
  canActivate() {
    if (this._authService.isUserLoggedIn()) {
      return true;
    }
    else {
      window.alert('Permission Denied for this Page')
      return false;
    }
  }

}
