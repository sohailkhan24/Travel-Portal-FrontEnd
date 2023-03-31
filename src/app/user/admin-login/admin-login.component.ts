import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
})
export class AdminLoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  // tslint:disable-next-line: typedef
  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    console.log('inn admin login');

    const userName = form.value.username;
    const password = form.value.password;
    // tslint:disable-next-line: deprecation
    this.authService.login(userName, password).subscribe(
      (resData) => {
        this.router.navigate(['adminhome']);
        console.log(resData);
      },
      (error) => {
        console.log(error);
      }
    );

    form.reset();
  }
}
