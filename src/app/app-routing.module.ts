import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { BloodbankComponent } from './bloodbank/bloodbank.component';
import { RouteGuardService } from './services/route-guard.service';
import { DonorComponent } from './donor/donor.component';
import { AdminGuardService } from './services/admin-guard.service';
import { UserGuardService } from './services/user-guard.service';

const routes: Routes = [
  {path:  '', component: LoginComponent},
  {path: 'login', component: LoginComponent },
  {path: 'signup', component: SignupComponent },
  {path: 'dashboard/:name', component: DashboardComponent, canActivate: [RouteGuardService]},
  {path: 'profile', component: ProfileComponent,  canActivate: [UserGuardService]},
  {path: 'bloodbank', component: BloodbankComponent,  canActivate: [RouteGuardService]},
  {path: 'donor', component: DonorComponent, canActivate: [AdminGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
