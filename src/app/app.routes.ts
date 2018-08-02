import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: '',
    redirectTo: '/tutorials',
    pathMatch: 'full'
},{
    path: 'tutorials',
    loadChildren: './tutorials/tutorials.module#TutorialsModule'
},{
    path: 'other',
    loadChildren: './other/other.module#OtherModule'
}];
