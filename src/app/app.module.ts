import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/tutorial.reducer';
import { Effect, Actions } from '@ngrx/effects';
import { ReadComponent } from './read/read.component';
import { CreateComponent } from './create/create.component';
import { TutorialService } from '../app/services/tutorial.service';

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
    })
  ],
  providers: [TutorialService, Actions],
  bootstrap: [AppComponent]
})
export class AppModule { }
