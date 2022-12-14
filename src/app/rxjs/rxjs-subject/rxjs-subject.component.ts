import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

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
    const message$ = new ReplaySubject(3);
    message$.next('Hello..');
    message$.next('How are you ?');
    message$.next('From where are you ?');
    message$.next('Stay at home...');

    message$.subscribe(msg => console.log(`User1: ${msg}`));

    message$.next('Get Vaccinated....');
    message$.next('Keep Learning');

    message$.subscribe(msg => console.log(`User2: ${msg}`));


    // async subject

    const asyncSubjec$ = new AsyncSubject();
    asyncSubjec$.next("Value1");
    asyncSubjec$.next("Value2");
    asyncSubjec$.next("Value3");


    asyncSubjec$.subscribe(d => console.log(`AsyncSubject User1 ${d}`));
    asyncSubjec$.next("Value4");
    asyncSubjec$.complete();
    asyncSubjec$.next("Value5");
    asyncSubjec$.next("Value6");


    asyncSubjec$.subscribe(d => console.log(`AsyncSubject User2 ${d}`));
  
    //Async Subject With RealTime
    const url = "https://restcountries.eu/rest/v2/name/india?fullText=true";

    const cache :any= {};
   function getCountryInfo(url: any){
      if(!cache[url]){
        //api call using fetch
        cache[url]= new AsyncSubject();
        fetch(url).
        then(res => res.json())
        .then(d => {
              cache[url].next(d);
              cache[url].complete();
        })

      }
      return cache[url].asObservable();
   }

   getCountryInfo(url).subscribe((d: any) => console.log(d));

   setTimeout(()=>{
     getCountryInfo(url).subscribe((d: any) => console.log(d));

   }, 3000);

 }
  }

