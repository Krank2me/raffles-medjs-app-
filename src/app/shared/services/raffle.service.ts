import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { PeopleListResponse, Person } from 'src/app/models/person';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RaffleService {
  private urlBase = environment.api.url;

  constructor(private http: HttpClient) {}

  addPerson(person: Person): Observable<any> {
    return this.http
      .post(`${this.urlBase}/addCompetitor`, person)
      .pipe(catchError((error: HttpErrorResponse) => throwError(error)));
  }

  getPeopleList(): Observable<any> {
    return this.http
      .get<PeopleListResponse>(`${this.urlBase}/getWiners`)
      .pipe(catchError((error: HttpErrorResponse) => throwError(error)));
  }
}
