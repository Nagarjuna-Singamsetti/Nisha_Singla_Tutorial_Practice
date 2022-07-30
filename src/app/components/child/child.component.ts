import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input()
  uname: string;
@Output()
  notify: EventEmitter<string>;
  constructor() {
    this.uname = '';
    this.notify = new EventEmitter<string>();
  }

  ngOnInit(): void {
  }
passData(){
  this.notify.emit('This is from Child Component');
}
}
