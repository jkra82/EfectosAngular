import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducer } from './reducers/tutorial.reducer';
import { Effect, Actions, EffectsModule } from '@ngrx/effects';
import { TutorialService } from './services/tutorial.service';
import { DataTestService } from './services/datatest.service';
import { TutorialEffects, Efectos } from './effects/tutorial.effect';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    RouterModule.forRoot(routes, { 
      enableTracing:false
    }),
    BrowserModule,    
    StoreModule.forRoot({
      tutorial: reducer
    }),
    StoreDevtoolsModule,
    EffectsModule.forRoot(Efectos)
  ],
  providers: [TutorialService, Actions, DataTestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
