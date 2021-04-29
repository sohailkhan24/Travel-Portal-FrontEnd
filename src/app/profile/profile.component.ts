import { Component, OnInit } from '@angular/core';
import { Ticket } from '../Models/ticket';
import { TicketService } from '../services/ticket.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  ticketData: Ticket[];
  constructor(private ticketService: TicketService) {}

  ngOnInit(): void {
    // tslint:disable-next-line: deprecation
    this.ticketService.getallticket().subscribe(
      async (data) => {
        this.ticketData = data;
        await this.ticketData;
        console.log('from profile', this.ticketData[0].id);
        // if (this.ticketData) {
        // this.getData = true;
        // this.setter.setter(this.userData);
        // }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
