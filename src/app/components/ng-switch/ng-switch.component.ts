import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css']
})
export class NgSwitchComponent implements OnInit {
  selectedCountry: string = '';
  countries: any[] = [
    { code: 'ind', country: 'India' },
    { code: 'pak', country: 'Pakistan' },
    { code: 'aus', country: 'Australia' }
  ]
  constructor() { }

  ngOnInit(): void {
  }
 
  choice(code:string) {
    this.selectedCountry = code;
  }
}
