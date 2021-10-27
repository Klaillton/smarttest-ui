import { AppPrimengModule } from './../shared/app-primeng/app-primeng.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { OccurrencesRoutingModule } from './occurrences-routing.module';
import { OccurrencesComponent } from './occurrences/occurrences.component';

@NgModule({
  declarations: [OccurrencesComponent],
  imports: [CommonModule, OccurrencesRoutingModule, AppPrimengModule],
})
export class OccurrencesModule {}
