import { Component, OnInit } from '@angular/core';
import { observable, Observable, Subject} from 'rxjs';
import { ajax} from 'rxjs/ajax';

@Component({
  selector: 'app-rx-js',
  templateUrl: './rx-js.component.html',
  styleUrls: ['./rx-js.component.css']
})
export class RxJSComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {

    //Observables are unicast
    const observable = new Observable(obj => obj.next(Math.random()));

    //Subscriber 1
    observable.subscribe(d => console.log("Observable Value->"+d));

    //Subscriber 2
    observable.subscribe(d => console.log("Observable Value->"+d));


    //Subject -data provider
    const subject1=new Subject();

    //Subscriber 1
    subject1.subscribe(d => console.log("Subject Value->"+d));

    //Subscriber 2
    subject1.subscribe(d => console.log("Subject Value->"+d));

    subject1.next(Math.random());

    // //Observable consumes

    // const data= ajax('https://jsonplaceholder.typicode.com/users');

    // data.subscribe(d=>console.log(d));
    // data.subscribe(d=>console.log(d));

    //subject data consumes
   const subject=new Subject();
    const data= ajax('https://jsonplaceholder.typicode.com/users');

    subject.subscribe(d=>console.log(d));
    subject.subscribe(d=>console.log(d));

     const result=data.subscribe(subject);
  }

}
