import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { canComponentLeave } from 'src/app/guards/unsaved-changes.guard';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements canComponentLeave {
  userName: FormControl = new FormControl();

  canLeave(): boolean {
    if (this.userName.dirty) {
      return window.confirm('You have some unchanged changes.Save it before leaving!');
    }
    return true;
  }
}

