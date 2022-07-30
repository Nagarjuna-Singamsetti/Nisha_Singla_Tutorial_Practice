import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit {
  singleUser: any;
  constructor(private _activatedRoute: ActivatedRoute, private _userService: UserServiceService) { }

  ngOnInit(): void {
    let id = this._activatedRoute.snapshot.params['id'];
    this._userService.getSingleUser(id).subscribe(user => {
      this.singleUser = user;
    })
  }

}
