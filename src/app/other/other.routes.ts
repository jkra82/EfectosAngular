import { Routes } from '@angular/router';
import { RoutingtestComponent } from './routingtest/routingtest.component'

export const otherRoutes: Routes = [{
    path: '',  // si despues de other no viene nada: other/ lo gestiona el componente especificado.
    component: RoutingtestComponent
}];
