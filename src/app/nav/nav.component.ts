import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  // islogin = true;
  constructor(public authService: AuthService) {}

  ngOnInit(): void {}

  // tslint:disable-next-line: typedef
  signout() {
    localStorage.clear();
    // this.islogin = false;
  }
}
