import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: '',                 // si el path esta vacio
    redirectTo: '/tutorials', // redirige a tutorial
    pathMatch: 'full'         // modificador a la hora de hacer match. Hay muchas posibilidades
},{
    path: 'tutorials',       // si el path es tutorials lo gestionará el modulo de loadChildren (LAZYLOADING).
    loadChildren: './tutorials/tutorials.module#TutorialsModule' // rutaDelFichero#NombreDeLaClaseModulo
},{
    path: 'other',          // si el path es other lo gestiona LoadChildren (LAZYLOADING)
    loadChildren: './other/other.module#OtherModule'
}];

//  Hay muchas mas opciones de enrutado. Paso de parametros, componentes, etc..
