import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { TutorialsComponent } from './tutorials/tutorials.component';
import { CreateComponent } from './create/create.component';
import { ReadComponent } from './read/read.component';
import { tutorialsRoutes } from './tutorials.routes';   // tutorialsRoutes gestionará las rutas de este modulo.

@NgModule({
    declarations: [       // Componentes que utilizaremos
      TutorialsComponent,
      CreateComponent,
      ReadComponent
    ],
    imports: [  
      RouterModule.forChild(tutorialsRoutes), // Las rutas de este modulo las gestiona el tutorialsRoutes
      CommonModule 
    ],
    exports: [            // Si no exportamos los componentes no funcionaba. Es para indicar que estos componenetes se podrán utlizar en 
      TutorialsComponent, // otros modulos. Tambien si no se exportan no se reconocian con el prefijo app
      ReadComponent,
      CreateComponent
    ]
  })
  export class TutorialsModule { }  // Clase utilizada en el app.routes.ts para incarle quien gestiona un determinado path de la url


  // TODO ==> Mirar si metemos aqui el servicio. 
