import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.css']
})
export class ProductDashboardComponent implements OnInit, OnDestroy {
  private mySubscription: Subscription = new Subscription;
  constructor() { }

  ngOnInit(): void {
    console.log('Product-DashBoard Works');

    //promise
    const promise = new Promise(resolve => {
      console.log('Promise Call...');
      setTimeout(() => {
        resolve('Promise Working');
        resolve('Promise Working1');
        resolve('Promise Working2');
        resolve('Promise Working3');
        resolve('Promise Working4');
      }, 1000);
    })
    promise.then(result => console.log(result));

    //observable
    const observable = new Observable(sub => {
      console.log('Observable Call...');
      let counter = 0;
      setInterval(() => {
        counter = counter + 1;
        sub.next(counter);
      }, 1000);
    });
    this.mySubscription = observable.subscribe(result => console.log(result));
  }
  //   setTimeout(() => {
  //     sub.next('Observable Working');
  //     sub.next('Observable Working1');
  //     sub.next('Observable Working2');
  //     sub.next('Observable Working3');
  //     sub.next('Observable Working4');
  //   }, 1000);
  // })
  // observable.subscribe(result => console.log(result));

  // observable.pipe(filter(d=>d==='Observable Working2')).subscribe(result=>console.log(result));
  //can Apply Operators

  ngOnDestroy(): void {
    this.mySubscription.unsubscribe();
  }
}