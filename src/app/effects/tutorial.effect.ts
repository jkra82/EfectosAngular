import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { Effect, Actions } from '@ngrx/effects';

import { Observable } from 'rxjs';
import { map, delay, switchMap } from 'rxjs/operators';
import { Tutorial } from '../models/tutorial.model';
import { TutorialService } from '../services/tutorial.service';
import * as TutorialActions from '../actions/tutorial.actions';

import { AppState } from '../app.state';
import { AddTutorial, RemoveTutorial } from '../actions/tutorial.actions';

type Action = TutorialActions.AllActions;

@Injectable()
export class TutorialEffects {
  @Effect({dispatch:false})
  effectCreatingTutorial$ = this.actions$
    .ofType<AddTutorial>(TutorialActions.ADD_TUTORIAL)
    .pipe(
      delay(2000),
      map(actionlocal => {
        console.log("Dentro del effect [ADD]: " + actionlocal.payload.name)
      })
      
    );

  @Effect({dispatch:false})
  effectDeletingTutorial$ = this.actions$
    .ofType<RemoveTutorial>(TutorialActions.REMOVE_TUTORIAL)
    .pipe(
      delay(2000),
      map(actionlocal => {
        console.log("Dentro del effect [REMOVE]: " + actionlocal.payload)
      })
      
    );

  constructor(
    private actions$: Actions,
    private tutorialService: TutorialService) {
    }
}

export const Efectos: any[] = [TutorialEffects];