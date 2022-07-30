import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgSwitchComponent } from './components/ng-switch/ng-switch.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { AgePipe } from './pipes/age.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { UsersComponent } from './components/users/users.component';
import { UserServiceService } from './services/user-service.service';
import {HttpClientModule} from '@angular/common/http';
import { SingleUserComponent } from './components/single-user/single-user.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NgSwitchComponent,
    ParentComponent,
    ChildComponent,
    AgePipe,
    SearchPipe,
    UsersComponent,
    SingleUserComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
