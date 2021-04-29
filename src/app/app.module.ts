import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { NewTicketComponent } from './ticket/new-ticket/new-ticket.component';
import { EditTicketComponent } from './ticket/edit-ticket/edit-ticket.component';

import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SignOutComponent } from './sign-out/sign-out.component';
import { LoginComponent } from './user/login/login.component';
import { SignupComponent } from './user/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { AdminLoginComponent } from './user/admin-login/admin-login.component';
import { HttpClientInterceptor } from './Http-Client-Interceptor';
import { EdituserComponent } from './user/edituser/edituser.component';
import { UserdetailComponent } from './user/userdetail/userdetail.component';
import { EditTicketAdminComponent } from './ticket/edit-ticket-admin/edit-ticket-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    ProfileComponent,
    NewTicketComponent,
    EditTicketComponent,
    EditTicketAdminComponent,
    LoginComponent,
    SignupComponent,
    NotFoundComponent,
    AboutComponent,
    ContactUsComponent,
    SignOutComponent,
    AdminLoginComponent,
    EdituserComponent,
    UserdetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpClientInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
