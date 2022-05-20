import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../app-material.module';
import { DashboardRouting } from './dashboard.routing';

import { DashboardComponent } from './dashboard.component';
import { AfterBodyPageComponent } from './component/after_body-page/after_body-page.component';
import { BodyPageComponent } from './component/body-page/body-page.component';
import { HeaderPageComponent } from './component/header-page/header-page.component';
import { AfterFooterPageComponent } from './component/after_footer-page/after_footer-page.component';
import { FooterPageComponent } from './component/footer-page/footer-page.component';

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
        AfterBodyPageComponent,
        BodyPageComponent,
        HeaderPageComponent,
        FooterPageComponent,
        AfterFooterPageComponent
    ]
})

export class DashboardModule { }