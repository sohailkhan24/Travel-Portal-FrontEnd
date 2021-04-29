import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TicketRegister } from 'src/app/Models/ticketRegister';
import { UserTicket } from 'src/app/Models/userTicket';
import { EditService } from 'src/app/services/edit.service';
import { EditticketService } from 'src/app/services/editticket.service';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-new-ticket',
  templateUrl: './new-ticket.component.html',
  styleUrls: ['./new-ticket.component.css'],
})
export class NewTicketComponent implements OnInit {
  expense: string[] = ['Nagarro ', 'Client'];
  requestType: string[] = ['Travel Type', 'Hotel Stay', 'Visa', 'Work Permit'];
  priority: string[] = ['Normal', 'Urgent', 'Immediate'];
  userTicketData: TicketRegister = new TicketRegister();
  isNew = true;
  submitted = false;
  getData = false;

  constructor(
    private ticketService: TicketService,
    private setter: EditticketService
  ) {}

  ngOnInit(): void {}

  // tslint:disable-next-line: typedef
  onSubmit(form: NgForm) {
    this.submitted = true;

    if (!form.valid) {
      return;
    }
    if (this.isNew) {
      this.isNew = false;
      this.ticketService
        .newticket(this.userTicketData)
        // tslint:disable-next-line: deprecation
        .subscribe(
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
    } else {
      // tslint:disable-next-line: deprecation
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

    // tslint:disable-next-line: deprecation

    // tslint:disable-next-line: align

    form.reset();
  }
}
