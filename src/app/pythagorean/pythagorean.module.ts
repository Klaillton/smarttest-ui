import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppPrimengModule } from './../shared/app-primeng/app-primeng.module';
import { PythagoreanRoutingModule } from './pythagorean-routing.module';
import { PythagoreanComponent } from './pythagorean/pythagorean.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PythagoreanComponent],
  imports: [
    CommonModule,
    PythagoreanRoutingModule,
    AppPrimengModule,
    ReactiveFormsModule,
  ],
})
export class PythagoreanModule {}
