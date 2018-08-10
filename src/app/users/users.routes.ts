import { Routes } from '@angular/router';
import { UsersComponent } from './components/users.component';

export const usersRoutes: Routes = [{
    path: '**',                 // wildcard ==> todo lo que venga por la url desdpues de tutorials lo gestiona el componente expecificicado
    component: UsersComponent  // ** se suele utilziar para redirigir al modulo de error.
}];
