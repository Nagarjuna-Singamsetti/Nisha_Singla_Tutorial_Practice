import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivateChild {
  constructor(private _authService: AuthService) { }
  canActivateChild() {
    if (this._authService.isAdminLoggedIn()) {
      return true;
    }
    else {
      window.alert('Not Accesable');
      return false;
    }
  }
}

