import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../app-material.module';

import { WorksRouting } from './works.routing';
import { WorksComponent } from './workList/workList.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(WorksRouting),
        FormsModule,
        ReactiveFormsModule,
        MaterialModule
    ],
    declarations: [
        WorksComponent
    ]
})

export class WorksModule { }