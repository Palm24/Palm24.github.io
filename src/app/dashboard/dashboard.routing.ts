import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

export const DashboardRouting: Routes = [
  {
    path: '',
    children: [
      {
      path: 'index',
      component: DashboardComponent
      }
    ]
  }
];
