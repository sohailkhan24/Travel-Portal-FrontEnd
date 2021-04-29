import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth.guard';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';

import { NotFoundComponent } from './not-found/not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { SignOutComponent } from './sign-out/sign-out.component';

import { EditTicketComponent } from './ticket/edit-ticket/edit-ticket.component';
import { NewTicketComponent } from './ticket/new-ticket/new-ticket.component';
import { AdminLoginComponent } from './user/admin-login/admin-login.component';
import { EdituserComponent } from './user/edituser/edituser.component';
import { LoginComponent } from './user/login/login.component';
import { SignupComponent } from './user/signup/signup.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'adminlogin', component: AdminLoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'edituser', component: EdituserComponent },

  { path: 'signout', component: SignOutComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  {
    path: 'ticket/new-ticket',
    component: NewTicketComponent,
    // canActivate: [AuthGuard],
  },
  { path: '404', component: NotFoundComponent },
  {
    path: 'ticket/edit-ticket/:id',
    component: EditTicketComponent,
    // canActivate: [AuthGuard],
  },
  { path: 'about', component: AboutComponent },
  { path: 'contactUs', component: ContactUsComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
