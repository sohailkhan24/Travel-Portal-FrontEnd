import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AdminTicket } from 'src/app/Models/adminTicket';
import { TicketService } from 'src/app/services/ticket.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit-ticket-admin',
  templateUrl: './edit-ticket-admin.component.html',
  styleUrls: ['./edit-ticket-admin.component.css'],
})
export class EditTicketAdminComponent implements OnInit {
  adminTicketData: AdminTicket = new AdminTicket();
  statuses: string[] = ['In Process', 'Done'];
  files: File;
  getData: boolean = false;
  id: string;
  routeSub: Subscription;
  constructor(
    private router: ActivatedRoute,
    private ticketService: TicketService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.routeSub = this.router.params.subscribe((params: Params) => {
      this.id = params['id'];
    });
    this.ticketService.getATicket(this.id).subscribe(
      async (data) => {
        this.adminTicketData = data;
        await this.adminTicketData;
        console.log(this.adminTicketData);
        if (this.adminTicketData) {
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
      return;
    }

    this.files = form.value.file;
    let comments = form.value.comments;
    let status = form.value.status;
    this.ticketService
      .updateTicketAdmin(status, comments, this.files, this.id)
      .subscribe(
        async (data) => {
          this.adminTicketData = data;
          await this.adminTicketData;
          if (this.adminTicketData) {
            this.getData = true;
          }
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
