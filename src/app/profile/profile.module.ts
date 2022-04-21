import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../app-material.module';

import { ProfileRouting } from './profile.routing';
import { ProfileComponent } from './profileList/profile.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ProfileRouting),
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
    ],
    declarations: [
        ProfileComponent
    ]
})

export class ProfileModule { }