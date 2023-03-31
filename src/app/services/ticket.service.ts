import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AdminTicket } from '../Models/adminTicket';
import { Alltickets } from '../Models/alltickets';
import { Ticket } from '../Models/ticket';
import { TicketRegister } from '../Models/ticketRegister';
import { UserTicket } from '../Models/userTicket';

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  
  
  updateTicketAdmin(
    status: string,
    comments: string,
    files: File,
    ticketid: string
    
    
    
  ): Observable<any> {
    let formData: FormData = new FormData();
    formData.append('files', files);
    formData.append('ticketId', ticketid);
    formData.append('comment', comments);
    formData.append('status', status);

    return this.http.put<any>(environment.apiUrl + '/tickets/admin', formData, {
      reportProgress: true,
      responseType: 'json',
    });
  }
  constructor(private http: HttpClient) {}

  newticket(ticketRegister: TicketRegister): Observable<any> {
    // let requestType = ticketRegister.requestType;
    let requestType = 'urgent';
    // let priority = ticketRegister.priority;
    let priority = 'urgent';

    let travelCity = ticketRegister.travelCity;

    let fromLocationCity = ticketRegister.fromLocationCity;
    let travelStartDate = '12/12/2012';
    let travelEndDate = '21/12/2012';
    let passportNumber = ticketRegister.passportNumber;

    let projectName = ticketRegister.projectName;

    let expenseBorneBy = ticketRegister.expenseBorneBy;

    let travelApproverName = ticketRegister.travelApproverName;

    let expectedDurationOfTravel = ticketRegister.expectedDurationOfTravel;

    let upperBound = ticketRegister.upperBound;

    let anyAdditionalDetails = ticketRegister.anyAdditionalDetails;

    console.log(requestType + ' ' + priority + ' ' + anyAdditionalDetails);
    return this.http.post<TicketRegister>(environment.apiUrl + '/tickets', {
      requestType,
      priority,
      travelCity,
      fromLocationCity,
      travelStartDate,
      travelEndDate,
      passportNumber,
      projectName,
      expenseBorneBy,
      travelApproverName,
      expectedDurationOfTravel,
      upperBound,
      anyAdditionalDetails,
    });
  }

  updateTicket(ticketRegister: TicketRegister): Observable<any> {
    // tslint:disable-next-line: prefer-const
    let id = ticketRegister.id;
    // tslint:disable-next-line: prefer-const
    let requestType = ticketRegister.requestType;
    let priority = ticketRegister.priority;
    let travelCity = ticketRegister.travelCity;
    let fromLocationCity = ticketRegister.fromLocationCity;
    // let travelStartDate = ticketRegister.travelStartDate;
    // let travelEndDate= ticketRegister.travelEndDate;
    let travelStartDate = '12/12/2012';
    let travelEndDate = '21/12/2012';
    let passportNumber = ticketRegister.passportNumber;
    let projectName = ticketRegister.projectName;
    let expenseBorneBy = ticketRegister.expenseBorneBy;
    let travelApproverName = ticketRegister.travelApproverName;
    let expectedDurationOfTravel = ticketRegister.expectedDurationOfTravel;
    let upperBound = ticketRegister.upperBound;
    let anyAdditionalDetails = ticketRegister.anyAdditionalDetails;

    return this.http.put<TicketRegister>(environment.apiUrl + '/tickets', {
      id,
      requestType,
      priority,
      travelCity,
      fromLocationCity,
      travelStartDate,
      travelEndDate,
      passportNumber,
      projectName,
      expenseBorneBy,
      travelApproverName,
      expectedDurationOfTravel,
      upperBound,
      anyAdditionalDetails,
    });
  }

  // getallticket(qurry: string): Observable<any> {
  //   return this.http.get(environment.apiUrl + '/users/' + qurry);
  // }
  getallticket(query: string): Observable<any> {
    return this.http
      .get<Alltickets>(environment.apiUrl + '/tickets/' + query)
      .pipe(
        map((data) => {
          console.log('Hello from getallticket', data);
          // localStorage.setItem('jwtToken', data);
          return data;
        })
      );
  }

  getATicket(id: string): Observable<any> {
    return this.http.get<Ticket>(environment.apiUrl + '/tickets/' + id).pipe(
      map((data) => {
        console.log('Hello from getaticket', data);
        // localStorage.setItem('jwtToken', data);
        return data;
      })
    );
  }

  adminUpdateTicket(
    status: string,
    comments: string,
    files: FileList,
    ticketid: string
  ): Observable<any> {
    comments = 'this is a coomment';
    status = 'done';
    return this.http
      .put<any>(environment.apiUrl + '/tickets/admin', {
        files,
        ticketid,
        comments,
        status,
      })
      .pipe(
        map((data) => {
          console.log('Hello from adminknhsjiagduywqhg', data);
          // localStorage.setItem('jwtToken', data);
          return data;
        })
      );
  }

  admingetallticket(): Observable<any> {
    return this.http.get<Alltickets>(environment.apiUrl + '/tickets/admin');
  }
}
