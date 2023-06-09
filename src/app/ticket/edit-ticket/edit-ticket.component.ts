import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Ticket } from 'src/app/Models/ticket';
import { TicketRegister } from 'src/app/Models/ticketRegister';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-edit-ticket',
  templateUrl: './edit-ticket.component.html',
  styleUrls: ['./edit-ticket.component.css'],
})
export class EditTicketComponent implements OnInit {
  routeSub: Subscription;
  id: string;
  ticketData: Ticket = new Ticket();
  userTicketData: TicketRegister = new TicketRegister();
  getData = false;
  constructor(
    private router: ActivatedRoute,
    private ticketService: TicketService
  ) {}

  ngOnInit(): void {
    // console.log('hello form edit ticket', this.router.snapshot.queryParams);
    // tslint:disable-next-line: deprecation
    this.routeSub = this.router.params.subscribe((params: Params) => {
      console.log('Hello from edit ticket', params['id']);
      this.id = params['id'];
    });
    this.ticketService.getATicket(this.id).subscribe(
      async (data) => {
        this.ticketData = data;
        await this.ticketData;
        console.log(this.ticketData);
        if (this.ticketData) {
          this.getData = true;
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return null;
    }
    this.ticketService.updateTicket(this.userTicketData).subscribe(
      async (data) => {
        this.userTicketData = data;
        await this.userTicketData;
        if (this.userTicketData) {
          this.getData = true;
          // this.setter.setter(this.userTicketData);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
