import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isLoginMode = true;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    console.log('In onnn');
  }

  // tslint:disable-next-line: typedef

  // tslint:disable-next-line: typedef
  onSubmit(form: NgForm) {
    console.log('In submit');
    // if (!form.valid) {
    //   return;
    // }

    const userName = form.value.username;
    const password = form.value.password;
    console.log(userName);
    // tslint:disable-next-line: deprecation
    this.authService.login(userName, password).subscribe(
      (resData) => {
        this.router.navigate(['home']);
        console.log(resData);
      },
      (error) => {
        console.log(error);
      }
    );

    form.reset();
  }
}
