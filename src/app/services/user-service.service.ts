import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private _url = 'https://jsonplaceholder.typicode.com/userss';

  constructor(private _http: HttpClient) { }

  getAllUsers(): Observable<any> {
    return this._http.get(this._url)
      .pipe(catchError(this.errorHandler));
  }


  errorHandler(error: HttpErrorResponse) {
    return throwError(() => new Error("Some Internal Issue while making API Call"));
    //return throwError(() => new Error(error.message));
  }
}
