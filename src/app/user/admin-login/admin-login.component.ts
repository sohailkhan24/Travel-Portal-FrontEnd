import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
})
export class AdminLoginComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  // tslint:disable-next-line: typedef
  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const username = form.value.username;
    const password = form.value.password;
    // tslint:disable-next-line: deprecation
    this.authService.login(username, password).subscribe(
      (resData) => {
        console.log(resData);
      },
      (error) => {
        console.log(error);
      }
    );

    form.reset();
  }
}
