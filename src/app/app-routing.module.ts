import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NgSwitchComponent } from './components/ng-switch/ng-switch.component';
import { ParentComponent } from './components/parent/parent.component';
import { SingleUserComponent } from './components/single-user/single-user.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'ngswitch', component: NgSwitchComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'users', component: UsersComponent },
  { path: 'user/:id', component: SingleUserComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
