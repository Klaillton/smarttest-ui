import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Occurrence } from './../model/occurrence';

@Injectable({
  providedIn: 'root',
})
export class OccurrenceService {
  [x: string]: any;
  private readonly API = 'http://localhost:8080/difference';

  constructor(private http: HttpClient) {}

  listar() {
    return this.http
      .get(this.API)
      .toPromise()
      .then((res) => <Occurrence[]>res)
      .then((res) => {
        return res;
      });
  }

  addOccurrence(newOccurrence: Occurrence): Observable<Occurrence> {
    return this.http.post<Occurrence>(this.API, newOccurrence);
  }

  searchOccurrence(id: string): Observable<Occurrence> {
    const url = `${this.API}/${id}`;
    return this.http.get<Occurrence>(url, {});
  }
}
