import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../app-material.module';
import { DashboardRouting } from './dashboard.routing';

import { DashboardComponent } from './dashboard.component';
import { HeaderPageComponent } from './component/header_navbar-page/header-page.component';
import { BodyPageComponent } from './component/body-page/body-page.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(DashboardRouting),
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
    ],
    declarations: [
        DashboardComponent,
        HeaderPageComponent,
        BodyPageComponent
    ]
})

export class DashboardModule { }