import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-edit-ticket',
  templateUrl: './edit-ticket.component.html',
  styleUrls: ['./edit-ticket.component.css'],
})
export class EditTicketComponent implements OnInit {
  routeSub: Subscription;
  id: string;
  constructor(private router: ActivatedRoute, private ticketService: TicketService) {}

  ngOnInit(): void {
    // console.log('hello form edit ticket', this.router.snapshot.queryParams);
    // tslint:disable-next-line: deprecation
    this.routeSub = this.router.params.subscribe((params: Params) => {
      console.log('Hello from edit ticket', params['id']);
      this.id = params['id'];
    });
    this.ticketService.getATicket(this.id).subscribe((data)=>{
      
    })
}
