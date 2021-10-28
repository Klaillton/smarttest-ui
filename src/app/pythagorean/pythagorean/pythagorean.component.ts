import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { PythagoreanService } from '../service/pythagorean.service';
import { Pythagorean } from './../model/pythagorean';

@Component({
  selector: 'app-pythagorean',
  templateUrl: './pythagorean.component.html',
  styleUrls: ['./pythagorean.component.css'],
})
export class PythagoreanComponent implements OnInit {
  checkoutForm = new FormGroup({
    numA: new FormControl(''),
    numB: new FormControl(''),
    numC: new FormControl(''),
  });

  loading: boolean = false;

  pythagorean$: Pythagorean[] = [];

  constructor(private pythagoreanService: PythagoreanService) {}

  ngOnInit(): void {
    this.loading = true;
    this.listar();
  }

  listar(): void {
    setTimeout(() => {
      this.pythagoreanService
        .listar()
        .then((pythagorean) => (this.pythagorean$ = pythagorean), console.log);
      this.loading = false;
    }, 150);
  }

  onSubmit() {
    this.pythagoreanService
      .addPythagorean(this.checkoutForm.value as Pythagorean)
      .toPromise()
      .then((pythagorean) => {
        this.pythagorean$ = [pythagorean];
        this.listar();
      });
  }

  procurar(number: string) {
    number = number.trim();
    if (!number) {
      return;
    }

    let arr = [];
    const findPythagorean: Pythagorean = {} as Pythagorean;
    return this.pythagoreanService
      .searchPythagorean(findPythagorean.id)
      .toPromise()
      .then((occurrence) => {
        this.pythagorean$ = [occurrence];
        console.log;
      });
  }
}
