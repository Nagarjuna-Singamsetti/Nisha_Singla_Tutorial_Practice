import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-rxjs-subject',
  templateUrl: './rxjs-subject.component.html',
  styleUrls: ['./rxjs-subject.component.css']
})
export class RxjsSubjectComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    // Subject 
    const subject = new Subject();
    subject.subscribe(d => console.log(`Subject Subscriber1 : ${d}`));
    subject.next(2020);
    subject.subscribe(d => console.log(`Subject Subscriber2 : ${d}`)); // returned nothing

    // Behavior Subject
    const bSubject = new BehaviorSubject<number>(12);
    bSubject.subscribe(d => console.log(`BehaviorSubject Subscriber1:  ${d}`));
    bSubject.next(200);
    bSubject.subscribe(d => console.log(`BehaviorSubject Subscriber2: ${d}`));



    //Replay Subject
    const message$ = new ReplaySubject(3i);
    message$.next('Hello..');
    message$.next('How are you ?');
    message$.next('From where are you ?');
    message$.next('Stay at home...');

    message$.subscribe(msg => console.log(`User1: ${msg}`));

    message$.next('Get Vaccinated....');
    message$.next('Keep Learning');

    message$.subscribe(msg => console.log(`User2: ${msg}`));
  }

}
