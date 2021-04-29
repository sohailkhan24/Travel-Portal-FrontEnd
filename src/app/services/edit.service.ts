import { Injectable } from '@angular/core';
import { Userregister } from '../Models/userregister';

@Injectable({
  providedIn: 'root',
})
export class EditService {
  userdata: Userregister;
  constructor() {}
  // tslint:disable-next-line: typedef
  setter(data: Userregister) {
    this.userdata = data;
  }
  // tslint:disable-next-line: typedef
  getter() {
    return this.userdata;
  }
}
