import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminDashboardComponent } from './adminDashboard/adminDashboard.component';
import { AuthGuard } from './auth.guard';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';

import { NotFoundComponent } from './not-found/not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { SignOutComponent } from './sign-out/sign-out.component';
import { EditTicketAdminComponent } from './ticket/edit-ticket-admin/edit-ticket-admin.component';

import { EditTicketComponent } from './ticket/edit-ticket/edit-ticket.component';
import { NewTicketComponent } from './ticket/new-ticket/new-ticket.component';
import { ViewTicketComponent } from './ticket/viewTicket/viewTicket.component';
import { AdminLoginComponent } from './user/admin-login/admin-login.component';
import { EdituserComponent } from './user/edituser/edituser.component';
import { LoginComponent } from './user/login/login.component';
import { SignupComponent } from './user/signup/signup.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'adminhome', component: AdminDashboardComponent },
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
  {
    path: 'ticket/edit-ticket-admin/:id',
    component: EditTicketAdminComponent,
    // canActivate: [AuthGuard],
  },
  {
    path: 'ticket/viewticket/:id',
    component: ViewTicketComponent,
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
