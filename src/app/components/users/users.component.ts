import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userData: any = [];
  errorMsg: string = 'Loading...';
  constructor(private _userService: UserServiceService, private _activatRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // this._userService.getAllUsers().subscribe(
    //   (data) => {this.userData = data},
    //   (error)=>{this.errorMsg=error}
    // )
    this.userData = this._activatRoute.snapshot.data['data'];
  }

}
