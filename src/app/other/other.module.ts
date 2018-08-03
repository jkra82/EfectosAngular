import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoutingtestComponent } from './routingtest/routingtest.component';
import { otherRoutes } from './other.routes';

@NgModule({
    declarations: [
      RoutingtestComponent  // Componente que utilizaremos en este modulo
    ],
    imports: [
      RouterModule.forChild(otherRoutes)  // Quien gestiona las rutas en este modulo
    ]
  })
  export class OtherModule { }