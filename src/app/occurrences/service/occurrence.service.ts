import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { firstValueFrom } from 'rxjs';

import { Occurrence } from './../model/occurrence';

@Injectable({
  providedIn: 'root',
})
export class OccurrenceService {
  private readonly http = inject(HttpClient);
  private readonly API = 'http://localhost:8080/difference';

  listar(): Promise<Occurrence[]> {
    return firstValueFrom(this.http.get<Occurrence[]>(this.API));
  }

  addOccurrence(newOccurrence: Occurrence): Observable<Occurrence> {
    return this.http.post<Occurrence>(this.API, newOccurrence);
  }

  searchOccurrence(id: string): Observable<Occurrence> {
    const url = `${this.API}/${id}`;
    return this.http.get<Occurrence>(url, {});
  }
}
