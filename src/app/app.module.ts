import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { tutorialReducer } from './reducers/tutorial.reducer';
import { Effect, Actions, EffectsModule } from '@ngrx/effects';
import { TutorialService } from './services/tutorial.service';
import { DataTestService } from './services/datatest.service';
import { TutorialEffects, Efectos } from './effects/tutorial.effect';
import { routes } from './app.routes';
import { UserService } from './services/users.service';

@NgModule({
  declarations: [
    AppComponent       // Componentes que utilizaremos en app.module
  ],
  imports: [
    RouterModule.forRoot(routes, {  // las rutas las gestiona routes. ForRoot pq son raiz. Las demas serán Child
      enableTracing:false
    }),
    BrowserModule,    
    StoreModule.forRoot({      
      tutorial: tutorialReducer // En este caso el store tutorial (definido en app.state) será gestionado por tutorialReducer
    }),
    StoreDevtoolsModule,
    EffectsModule.forRoot(Efectos),
    HttpClientModule 
  ],
  providers: [TutorialService, Actions, DataTestService, UserService], // Servicios que utilizaramos en este modulo
  bootstrap: [AppComponent] // Componente principal.
})
export class AppModule { }
