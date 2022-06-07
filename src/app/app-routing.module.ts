import { DashboardModule } from './dashboard/dashboard.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'differences',
    loadChildren: () =>
      import('./occurrences/occurrences.module').then(
        (m) => m.OccurrencesModule
      ),
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
