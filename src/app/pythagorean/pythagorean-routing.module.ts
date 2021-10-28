import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PythagoreanComponent } from './pythagorean/pythagorean.component';

const routes: Routes = [
  {
    path: '',
    component: PythagoreanComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PythagoreanRoutingModule {}
