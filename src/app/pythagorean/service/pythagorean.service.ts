import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Pythagorean } from './../model/pythagorean';

@Injectable({
  providedIn: 'root',
})
export class PythagoreanService {
  [x: string]: any;
  private readonly API = 'http://localhost:8080/pythagorean';

  constructor(private http: HttpClient) {}

  listar() {
    return this.http
      .get(this.API)
      .toPromise()
      .then((res) => <Pythagorean[]>res)
      .then((res) => {
        return res;
      });
  }

  addPythagorean(newPythagorean: Pythagorean): Observable<Pythagorean> {
    return this.http.post<Pythagorean>(this.API, newPythagorean);
  }

  searchPythagorean(id: string): Observable<Pythagorean> {
    const url = `${this.API}/${id}`;
    return this.http.get<Pythagorean>(url, {});
  }
}
