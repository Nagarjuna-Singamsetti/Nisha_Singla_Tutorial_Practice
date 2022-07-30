import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userData: any = [];
  constructor(private _userService: UserServiceService) { }

  ngOnInit(): void {
    this._userService.getAllUsers().subscribe((data) => {
      this.userData = data;
    })
  }

}
