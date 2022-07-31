import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { AddressComponent } from './components/address/address.component';
import { CompanyComponent } from './components/company/company.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { HomeComponent } from './components/home/home.component';
import { LocationComponent } from './components/location/location.component';
import { NgSwitchComponent } from './components/ng-switch/ng-switch.component';
import { ParentComponent } from './components/parent/parent.component';
import { SingleUserComponent } from './components/single-user/single-user.component';
import { UsersComponent } from './components/users/users.component';
import { AdminGuard } from './guards/admin.guard';
import { AuthGuard } from './guards/auth.guard';
import { ResolveGuard } from './guards/resolve.guard';
import { UnsavedChangesGuard } from './guards/unsaved-changes.guard';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'ngswitch', component: NgSwitchComponent },
  { path: 'parent', component: ParentComponent },
  {
    path: 'users', component: UsersComponent,
    resolve: {
      data: ResolveGuard,
    }
    // canActivate: [AuthGuard] 
  },
  {
    path: 'user/:id', component: SingleUserComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AdminGuard],
    children: [
      // { path: '', redirectTo: 'address', pathMatch: 'full' },
      { path: 'address', component: AddressComponent },
      { path: 'company', component: CompanyComponent }
    ]
  },
  {
    path: 'about', component: AboutUsComponent,
    children: [
      { path: 'location', outlet: 'map', component: LocationComponent },
      { path: 'feedback', outlet: 'feeds', component: FeedbackComponent }
    ]
  },
  { path: 'adduser', component: AddUserComponent, canDeactivate: [UnsavedChangesGuard] },
  {
    path: 'products',
    loadChildren: () => import('./product-dash-board/product-dash-board.module').then(m => m.ProductDashBoardModule)
  },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
