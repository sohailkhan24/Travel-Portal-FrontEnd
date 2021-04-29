import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Userregister } from 'src/app/Models/userregister';
import { AuthService } from 'src/app/services/auth.service';
import { EditService } from 'src/app/services/edit.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  userData: Userregister = new Userregister();
  isLoginMode = true;
  countryList: Array<any> = [
    {
      name: 'Afghanistan',
      cities: ['abc', 'def', 'ahghgjsh'],
    },
    { name: 'Spain', cities: ['Barcelona'] },
    { name: 'USA', cities: ['Downers Grove'] },
    { name: 'Mexico', cities: ['Puebla'] },
    { name: 'China', cities: ['Beijing'] },
  ];
  cities: Array<any>;
  registered = false;
  getData = false;
  isNew = true;

  constructor(
    private authService: AuthService,
    private router: Router,
    private setter: EditService
  ) {}
  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    this.registered = true;
    if (!form.valid) {
      return;
    }
    if (this.isNew) {
      this.isNew = false;
      this.authService.signup(this.userData).subscribe(
        async (data) => {
          this.userData = data;
          await this.userData;
          if (this.userData) {
            this.getData = true;
            this.setter.setter(this.userData);
          }
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      this.authService.updateUser(this.userData).subscribe(
        async (data) => {
          this.userData = data;
          await this.userData;
          if (this.userData) {
            this.getData = true;
            this.setter.setter(this.userData);
          }
        },
        (error) => {
          console.log(error);
        }
      );
    }
    form.reset();
  }

  tologin() {
    this.router.navigate(['/login']);
  }

  onPrint() {
    window.print();
  }

  editData() {
    this.registered = false;
    this.getData = false;
  }
  changeCountry(count) {
    this.cities = this.countryList.find((con) => con.name === count).cities;
  }
}
