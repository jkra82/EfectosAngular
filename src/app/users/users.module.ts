import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { UserService } from '../services/users.service';
import { UsersComponent } from './components/users.component';
import { usersRoutes } from './users.routes';

@NgModule({
    declarations: [       // Componentes que utilizaremos
      UsersComponent
    ],
    imports: [  
      RouterModule.forChild(usersRoutes), // Las rutas de este modulo las gestiona el tutorialsRoutes
      CommonModule 
    ],
    exports: [            // Si no exportamos los componentes no funcionaba. Es para indicar que estos componenetes se podrán utlizar en 
      UsersComponent
    ],
    providers: [ UserService ]
  })
  export class UsersModule { }  // Clase utilizada en el app.routes.ts para incarle quien gestiona un determinado path de la url