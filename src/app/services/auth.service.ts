import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  
  isUserLoggedIn(){
    return true;
  }
  isAdminLoggedIn(){
    return false;
  }
}
