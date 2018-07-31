import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { Effect, Actions } from '@ngrx/effects';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Tutorial } from '../models/tutorial.model';
import * as TutorialActions from '../actions/tutorial.actions';

import { AppState } from '../app.state';

type Action = TutorialActions.AllActions;

@Injectable()
export class TutorialService {

  tutorials: Observable<Tutorial[]>;

  constructor(     
    private store: Store<AppState>) {
    this.tutorials = store.select('tutorial');
  }

  createTutorial(name, url) {
    this.store.dispatch(new TutorialActions.AddTutorial({name: name, url: url}))
  }

  deleteTutorial(index) 
  {
    this.store.dispatch(new TutorialActions.RemoveTutorial(index))
  }
}