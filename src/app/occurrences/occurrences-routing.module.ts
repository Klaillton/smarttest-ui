import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OccurrencesComponent } from './occurrences/occurrences.component';

const routes: Routes = [
  {
    path: '',
    component: OccurrencesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OccurrencesRoutingModule {}
