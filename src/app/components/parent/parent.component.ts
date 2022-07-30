import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  username:string;
  childData:string;

  constructor() { 
    this.username="Nagarjuna from Parent Class";
    this.childData='';
  }

  ngOnInit(): void {
  }
parentMethod(data:string){
  this.childData=data;
}

}
