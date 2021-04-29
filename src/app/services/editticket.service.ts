import { Injectable } from '@angular/core';
import { TicketRegister } from '../Models/ticketRegister';

@Injectable({
  providedIn: 'root',
})
export class EditticketService {
  userTicketData: TicketRegister;
  constructor() {}
  // tslint:disable-next-line: typedef
  setter(data: TicketRegister) {
    this.userTicketData = data;
  }
  // tslint:disable-next-line: typedef
  getter() {
    return this.userTicketData;
  }
}
