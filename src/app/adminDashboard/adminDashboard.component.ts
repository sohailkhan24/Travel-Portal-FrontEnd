import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ticket } from '../Models/ticket';
import { TicketService } from '../services/ticket.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-adminDashboard',
  templateUrl: './adminDashboard.component.html',
  styleUrls: ['./adminDashboard.component.css'],
})
export class AdminDashboardComponent implements OnInit {
  pageNo: number = 0;
  params: string = `?size=10&page=${this.pageNo}`;
  ticketData: Ticket[];
  lastpage: boolean;
  firstpage: boolean;
  constructor(private ticketService: TicketService, private http: HttpClient) {}

  ngOnInit(): void {
    this.fetch(`?size=10&page=${this.pageNo}`);
    // tslint:disable-next-line: deprecation
  }
  buttionclick() {
    //  console.log("in click");
    // let ageNo=this.pageNo+1;
    this.pageNo++;
    this.fetch(`?size=10&page=${this.pageNo}`);
    console.log(this.pageNo);
    // console.log(`?size=1&page=${this.pageNo}`);
  }

  backclick() {
    this.pageNo--;
    this.fetch(`?size=10&page=${this.pageNo}`);
    console.log(this.pageNo);
    // console.log(`?size=1&page=${this.pageNo}`)
  }

  fetch(pageno: string) {
    this.ticketService.getallticket(pageno).subscribe(
      (resData) => {
        this.ticketData = resData.content;
        console.log(resData);
        this.lastpage = resData.last;
        this.firstpage = resData.first;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
