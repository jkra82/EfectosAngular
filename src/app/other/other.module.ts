import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoutingtestComponent } from './routingtest/routingtest.component';
import { otherRoutes } from './other.routes';

@NgModule({
    declarations: [
      RoutingtestComponent
    ],
    imports: [
      RouterModule.forChild(otherRoutes)
    ]
  })
  export class OtherModule { }