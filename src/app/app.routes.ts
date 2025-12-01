import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard/dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),
  },
  {
    path: 'differences',
    loadComponent: () =>
      import('./occurrences/occurrences/occurrences.component').then(
        (m) => m.OccurrencesComponent
      ),
  },
  {
    path: 'pythagorean',
    loadComponent: () =>
      import('./pythagorean/pythagorean/pythagorean.component').then(
        (m) => m.PythagoreanComponent
      ),
  },
];
