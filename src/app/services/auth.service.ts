import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ticket } from '../Models/ticket';
import { User } from '../Models/user';
import { map } from 'rxjs/operators';
import { Userregister } from '../Models/userregister';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  login(userName: string, password: string): Observable<any> {
    return this.http
      .post<any>(environment.apiUrl + '/users/login', {
        userName,
        password,
      })
      .pipe(
        map((data) => {
          console.log(data.message);
          localStorage.setItem('jwtToken', data.message);
          return true;
        })
      );
  }
  adminlogin(username: string, password: string): Observable<any> {
    return this.http.post<User>(environment.apiUrl + '/api/auth/login', {
      username,
      password,
    });
  }
  signup(userData: Userregister): Observable<any> {
    console.log(' Auth service ' + userData.firstName);
    // tslint:disable-next-line: prefer-const
    let firstName = userData.firstName;
    let lastName = userData.lastName;
    let buisnessUnit = userData.buisnessUnit;
    let title = userData.title;
    let email = userData.email;
    let telephone = userData.telephone;
    let address1 = userData.address1;
    let address2 = userData.address2;
    let city = userData.city;
    let state = userData.state;
    let zip = userData.zip;
    let country = userData.country;

    return this.http
      .post<Userregister>(environment.apiUrl + '/users/signup', {
        firstName,
        lastName,
        buisnessUnit,
        title,
        email,
        telephone,
        address1,
        address2,
        city,
        state,
        zip,
        country,
      })
      .pipe(
        map((data) => {
          console.log(data.id);
          return data;
        })
      );
  }

  updateUser(userData: Userregister): Observable<any> {
    let id = userData.id;
    let firstName = userData.firstName;
    let lastName = userData.lastName;
    let buisnessUnit = userData.buisnessUnit;
    let title = userData.title;
    let email = userData.email;
    let telephone = userData.telephone;
    let address1 = userData.address1;
    let address2 = userData.address2;
    let city = userData.city;
    let state = userData.state;
    let zip = userData.zip;
    let country = userData.country;
    return this.http.put<Userregister>(environment.apiUrl + '/users/update', {
      id,
      firstName,
      lastName,
      buisnessUnit,
      title,
      email,
      telephone,
      address1,
      address2,
      city,
      state,
      zip,
      country,
    });
  }
  isAuthenticated(): boolean {
    // localStorage.getItem()
    return localStorage.getItem('jwtToken') != null;
  }
}
