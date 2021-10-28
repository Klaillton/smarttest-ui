import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Occurrence } from './../model/occurrence';
import { OccurrenceService } from './../service/occurrence.service';

@Component({
  selector: 'app-occurrences',
  templateUrl: './occurrences.component.html',
  styleUrls: ['./occurrences.component.css'],
})
export class OccurrencesComponent implements OnInit {
  loading: boolean = false;

  occurrences$: Occurrence[] = [];

  constructor(private occurrenceService: OccurrenceService) {}

  ngOnInit(): void {
    this.loading = true;
    this.listar();
  }

  listar(): void {
    setTimeout(() => {
      this.occurrenceService
        .listar()
        .then((occurrences) => (this.occurrences$ = occurrences), console.log);
      this.loading = false;
    }, 1000);
  }

  adicionar(number: string): void {
    number = number.trim();
    if (!number) {
      return;
    }

    const newOccurrence: Occurrence = { number } as Occurrence;
    this.occurrenceService
      .addOccurrence(newOccurrence)
      .toPromise()
      .then((occurrence) => {
        this.occurrences$ = [occurrence];
        this.listar();
      });
  }

  procurar(number: string) {
    number = number.trim();
    if (!number) {
      return;
    }

    let arr = [];
    const findOccurrence: Occurrence = { number } as Occurrence;
    return this.occurrenceService
      .searchOccurrence(findOccurrence.number)
      .toPromise()
      .then((occurrence) => {
        this.occurrences$ = [occurrence];
        console.log;
      });
  }
}
