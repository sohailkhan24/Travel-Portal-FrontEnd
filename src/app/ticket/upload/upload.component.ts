import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AdminTicket } from 'src/app/Models/adminTicket';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
})
export class UploadComponent implements OnInit {
  adminTicketData: AdminTicket = new AdminTicket();
  statuses: string[] = ['In Process', 'Done'];
  files: File;
  getData: boolean = false;
  id: string;
  routeSub: Subscription;
  constructor(
    private router: ActivatedRoute,
    private ticketService: TicketService
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
