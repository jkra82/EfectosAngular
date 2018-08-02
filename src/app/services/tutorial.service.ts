import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { Effect, Actions } from '@ngrx/effects';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Tutorial } from '../models/tutorial.model';
import * as TutorialActions from '../actions/tutorial.actions';

import { AppState } from '../app.state';

type Action = TutorialActions.AllActions;

export const TUTORIALES_KEY = "tutoriales";

@Injectable()
export class TutorialService {

  tutorials: Observable<Tutorial[]>;
  prueba :string ="prueba";

  constructor(     
    private store: Store<AppState>) {
    this.tutorials = store.select('tutorial');
  }

  createTutorial(name, url) {
    console.log("TutorialService - createTutorial");
    this.store.dispatch(new TutorialActions.AddTutorial({name: name, url: url}))
  }

  deleteTutorial(index) 
  {
    console.log("TutorialService - deleteTutorial");
    this.store.dispatch(new TutorialActions.RemoveTutorial(index))
  }

  loadTutorials()
  {
    console.log("TutorialService - loadTutorials");
    let storedTutorials = (JSON.parse(localStorage.getItem(TUTORIALES_KEY)) ==null)?[]:JSON.parse(localStorage.getItem(TUTORIALES_KEY));
    this.store.dispatch(new TutorialActions.InitTutoriales(storedTutorials));
    // aqui primero se leen de servidor
    // luego se inicia el storage // como coño hacer eso... la accion tiene que ir despues.
  }
}