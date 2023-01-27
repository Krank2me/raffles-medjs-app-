import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { PeopleListResponse, Person } from 'src/app/models/person';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RaffleService {
  url: string = 'http://localhost:4000/api/v1/raffles';

  constructor(private http: HttpClient) {}

  addPerson(person: Person): Observable<any> {
    return this.http
      .post(`${this.url}/addCompetitor`, person)
      .pipe(catchError((error: HttpErrorResponse) => throwError(error)));
  }

  getPeopleList(): Observable<any> {
    return this.http
      .get<PeopleListResponse>(`${this.url}/getWiners`)
      .pipe(catchError((error: HttpErrorResponse) => throwError(error)));
  }
}
