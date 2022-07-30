import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private _url = 'https://jsonplaceholder.typicode.com/users';
  constructor(private _http: HttpClient) { }

  getAllUsers() {
    return this._http.get(this._url);
  }
}
