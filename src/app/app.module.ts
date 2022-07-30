import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgSwitchComponent } from './components/ng-switch/ng-switch.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { AgePipe } from './pipes/age.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NgSwitchComponent,
    ParentComponent,
    ChildComponent,
    AgePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
