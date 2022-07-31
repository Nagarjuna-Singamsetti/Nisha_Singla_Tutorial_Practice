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
import {HttpClientModule} from '@angular/common/http';
import { SingleUserComponent } from './components/single-user/single-user.component';
import { HomeComponent } from './components/home/home.component';
import { AddressComponent } from './components/address/address.component';
import { CompanyComponent } from './components/company/company.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { LocationComponent } from './components/location/location.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { AdminGuard } from './guards/admin.guard';
import { AuthGuard } from './guards/auth.guard';



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
    HomeComponent,
    AddressComponent,
    CompanyComponent,
    AboutUsComponent,
    LocationComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AuthGuard,AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
