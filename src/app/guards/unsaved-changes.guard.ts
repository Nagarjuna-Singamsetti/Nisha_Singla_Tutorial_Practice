import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AddUserComponent } from '../components/add-user/add-user.component';

export interface canComponentLeave {
  canLeave: () => boolean;
}
@Injectable({
  providedIn: 'root'
})
export class UnsavedChangesGuard implements CanDeactivate<canComponentLeave> {
  canDeactivate(component: canComponentLeave) {
    if (component.canLeave) {
      return component.canLeave();
    }
    return true;
  }

}


