import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/tutorial.reducer';
import { Effect, Actions, EffectsModule } from '@ngrx/effects';
import { ReadComponent } from './read/read.component';
import { CreateComponent } from './create/create.component';
import { TutorialService } from './services/tutorial.service';
import { TutorialEffects, Efectos } from './effects/tutorial.effect';

@NgModule({
  declarations: [
    AppComponent,
    ReadComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      tutorial: reducer
    }),
    EffectsModule.forRoot(Efectos)
  ],
  providers: [TutorialService, Actions],
  bootstrap: [AppComponent]
})
export class AppModule { }
