import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Userregister } from 'src/app/Models/userregister';
import { AuthService } from 'src/app/services/auth.service';
import { EditService } from 'src/app/services/edit.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css'],
})
export class EdituserComponent implements OnInit {
  reuserData: Userregister;
  registered = false;
  getData = false;
  constructor(
    private getter: EditService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.reuserData = this.getter.getter();
  }

  // tslint:disable-next-line: typedef

  // tslint:disable-next-line: typedef
  editData() {
    this.router.navigate(['/edituser']);
  }
  // tslint:disable-next-line: typedef
  tologin() {
    this.router.navigate(['/login']);
  }

  // tslint:disable-next-line: typedef
  onPrint() {
    window.print();
  }
}
