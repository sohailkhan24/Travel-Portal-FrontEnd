import { Component, OnInit } from '@angular/core';
import { Ticket } from '../Models/ticket';
import { TicketService } from '../services/ticket.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  pageNo: number = 0;
  params: string = `?size=10&page=${this.pageNo}`;
  ticketData: Ticket[];
  lastpage: boolean;
  firstpage: boolean;

  constructor(private ticketService: TicketService) {}

  ngOnInit(): void {
    this.fetch(`?size=10&page=${this.pageNo}`);
    // this.covids.getcountries().subscribe((data) => {
    //   console.log(data);
    //   this.count = data;
    // });
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

// fetch(pageno: string){
//   this.ticketService.getallticket(pageno).subscribe(
//     async (data) => {
//       this.lastpage=data.last;
//       this.firstpage=data.first;
//       this.ticketData = data;
//       await this.ticketData;

//       console.log('from profile', this.ticketData[0].id);
//       // if (this.ticketData) {
//       // this.getData = true;
//       // this.setter.setter(this.userData);
//       // }
//     },
//     (error) => {
//       console.log(error);
//     }
//   )
//   };
