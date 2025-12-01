import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

import { PythagoreanService } from '../service/pythagorean.service';
import { Pythagorean } from './../model/pythagorean';

@Component({
  selector: 'app-pythagorean',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    ProgressSpinnerModule,
  ],
  templateUrl: './pythagorean.component.html',
  styleUrls: ['./pythagorean.component.css'],
})
export class PythagoreanComponent implements OnInit {
  private pythagoreanService = inject(PythagoreanService);

  checkoutForm = new FormGroup({
    numA: new FormControl(''),
    numB: new FormControl(''),
    numC: new FormControl(''),
  });

  loading: boolean = false;
  pythagorean$: Pythagorean[] = [];

  ngOnInit(): void {
    this.loading = true;
    this.listar();
  }

  listar(): void {
    setTimeout(() => {
      this.pythagoreanService
        .listar()
        .then((pythagorean: Pythagorean[]) => (this.pythagorean$ = pythagorean))
        .catch(console.log);
      this.loading = false;
    }, 150);
  }

  onSubmit() {
    firstValueFrom(
      this.pythagoreanService.addPythagorean(
        this.checkoutForm.value as Pythagorean
      )
    ).then((pythagorean: Pythagorean) => {
      this.pythagorean$ = [pythagorean];
      this.listar();
    });
  }

  procurar(number: string) {
    number = number.trim();
    if (!number) {
      return;
    }

    const findPythagorean: Pythagorean = {} as Pythagorean;
    return firstValueFrom(
      this.pythagoreanService.searchPythagorean(findPythagorean.id)
    ).then((occurrence: Pythagorean) => {
      this.pythagorean$ = [occurrence];
    });
  }
}
