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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
