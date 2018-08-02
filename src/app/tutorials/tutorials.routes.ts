import { Routes } from '@angular/router';
import { TutorialsComponent } from './tutorials/tutorials.component';

export const tutorialsRoutes: Routes = [{
    path: '**',
    component: TutorialsComponent
}];
