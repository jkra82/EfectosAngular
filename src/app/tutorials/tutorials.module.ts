import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { TutorialsComponent } from './tutorials/tutorials.component';
import { CreateComponent } from './create/create.component';
import { ReadComponent } from './read/read.component';
import { tutorialsRoutes } from './tutorials.routes';

@NgModule({
    declarations: [
      TutorialsComponent,
      CreateComponent,
      ReadComponent
    ],
    imports: [
      RouterModule.forChild(tutorialsRoutes),
      CommonModule 
    ],
    exports: [
      TutorialsComponent,
      ReadComponent,
      CreateComponent
    ]
  })
  export class TutorialsModule { }
