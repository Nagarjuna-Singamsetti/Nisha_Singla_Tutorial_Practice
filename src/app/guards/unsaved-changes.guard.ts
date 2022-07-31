import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AddUserComponent } from '../components/add-user/add-user.component';

@Injectable({
  providedIn: 'root'
})
export class UnsavedChangesGuard implements CanDeactivate<AddUserComponent> {
  canDeactivate(component:AddUserComponent){
    if(component.userName.dirty){
return window.confirm('You have some unsaved changes. Are you sure you want to navigate?');
    }
    return true;
  }
   
  }
  

