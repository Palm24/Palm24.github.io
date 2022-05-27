import { Routes } from "@angular/router";
import { WorksComponent } from "./workList/workList.component";

export const WorksRouting: Routes = [
    {
        path: '',
        children: [
            {
                path: 'List',
                component: WorksComponent
            }
        ]
    }
]