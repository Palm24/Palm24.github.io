import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainNavbarComponent } from './layouts/mainnuvbar/mainnavbar.component';

export const AppRouting : Routes = [
    { 
        path: '',
        redirectTo: 'layout/dashboard/index',
        pathMatch: 'full' 
    },
    {
        path: 'layout',
        component: MainNavbarComponent,
        children: [
            {
                path: 'dashboard',
                loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
            },
            {
                path: 'profile',
                loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
            },
            {
                path: 'works',
                loadChildren: () => import('./works/works.module').then(m => m.WorksModule)
            }
        ]
    }
]
