import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgSwitchComponent } from './components/ng-switch/ng-switch.component';
import { ParentComponent } from './components/parent/parent.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  {path:'ngswitch',component:NgSwitchComponent},
  {path:'parent',component:ParentComponent}, 
  {path:'users',component:UsersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
