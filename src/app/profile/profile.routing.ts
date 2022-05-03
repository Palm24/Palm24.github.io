import { Routes } from '@angular/router';
import { ProfileComponent } from './profileList/profile.component';

export const ProfileRouting: Routes = [
  {
    path: '',
    children: [ 
      {
        path: 'List',
        component: ProfileComponent
      }
    ]
  }
];
