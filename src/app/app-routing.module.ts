import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'occurrences',
  },
  {
    path: 'differences',
    loadChildren: () =>
      import('./occurrences/occurrences.module').then(
        (m) => m.OccurrencesModule
      ),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'pythagorean',
  },
  {
    path: 'pythagorean',
    loadChildren: () =>
      import('./pythagorean/pythagorean.module').then(
        (m) => m.PythagoreanModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
