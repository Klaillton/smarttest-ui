import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { firstValueFrom } from 'rxjs';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

import { Occurrence } from './../model/occurrence';
import { OccurrenceService } from './../service/occurrence.service';

@Component({
  selector: 'app-occurrences',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    ProgressSpinnerModule,
  ],
  templateUrl: './occurrences.component.html',
  styleUrls: ['./occurrences.component.css'],
})
export class OccurrencesComponent implements OnInit {
  private occurrenceService = inject(OccurrenceService);

  loading: boolean = false;
  occurrences$: Occurrence[] = [];

  ngOnInit(): void {
    this.loading = true;
    this.listar();
  }

  listar(): void {
    setTimeout(() => {
      this.occurrenceService
        .listar()
        .then((occurrences: Occurrence[]) => (this.occurrences$ = occurrences))
        .catch(console.log);
      this.loading = false;
    }, 1000);
  }

  adicionar(number: string): void {
    number = number.trim();
    if (!number) {
      return;
    }

    const newOccurrence: Occurrence = { number } as Occurrence;
    firstValueFrom(this.occurrenceService.addOccurrence(newOccurrence)).then(
      (occurrence: Occurrence) => {
        this.occurrences$ = [occurrence];
        this.listar();
      }
    );
  }

  procurar(number: string) {
    number = number.trim();
    if (!number) {
      return;
    }

    const findOccurrence: Occurrence = { number } as Occurrence;
    return firstValueFrom(
      this.occurrenceService.searchOccurrence(findOccurrence.number)
    ).then((occurrence: Occurrence) => {
      this.occurrences$ = [occurrence];
    });
  }
}
