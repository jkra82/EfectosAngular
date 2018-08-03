import { Routes } from '@angular/router';
import { TutorialsComponent } from './tutorials/tutorials.component';

export const tutorialsRoutes: Routes = [{
    path: '**',                 // wildcard ==> todo lo que venga por la url desdpues de tutorials lo gestiona el componente expecificicado
    component: TutorialsComponent  // ** se suele utilziar para redirigir al modulo de error.
}];
