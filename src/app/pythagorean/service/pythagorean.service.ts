import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { firstValueFrom } from 'rxjs';

import { Pythagorean } from './../model/pythagorean';

@Injectable({
  providedIn: 'root',
})
export class PythagoreanService {
  private readonly http = inject(HttpClient);
  private readonly API = 'http://localhost:8080/pythagorean';

  listar(): Promise<Pythagorean[]> {
    return firstValueFrom(this.http.get<Pythagorean[]>(this.API));
  }

  addPythagorean(newPythagorean: Pythagorean): Observable<Pythagorean> {
    return this.http.post<Pythagorean>(this.API, newPythagorean);
  }

  searchPythagorean(id: string): Observable<Pythagorean> {
    const url = `${this.API}/${id}`;
    return this.http.get<Pythagorean>(url, {});
  }
}
