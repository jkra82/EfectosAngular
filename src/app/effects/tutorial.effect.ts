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

export const TUTORIALES_KEY: string = 'tutoriales';

@Injectable()
export class TutorialEffects {

  

  @Effect({dispatch:false}) // Le indicamos que no va a devolver nada
  effectCreatingTutorial$ = this.actions$
    .ofType<AddTutorial>(TutorialActions.ADD_TUTORIAL) // nos creamos un efecto Observable que actuará sobre  accion AddTutorial la cual es de tipo ADD_TUTORIAL
    .pipe( // para concatener tareas
      delay(1000), // dormimos el proceso 2 segundos
      map(actionlocal => { // El map sirve para leer acciones del evento y pasarlas al siguiente paso
                           // en este caso estamos tratando la accione
        
        let storedTutorials = (JSON.parse(localStorage.getItem(TUTORIALES_KEY)) ==null)?[]:JSON.parse(localStorage.getItem(TUTORIALES_KEY));
        
        // Añadimos el nuevo elemento
        storedTutorials.push(actionlocal.payload);
        // Persistimos los cursos
        localStorage.setItem(TUTORIALES_KEY,JSON.stringify(storedTutorials));
      })
      
    );
    

  @Effect({dispatch:false})
  effectDeletingTutorial$ = this.actions$
    .ofType<RemoveTutorial>(TutorialActions.REMOVE_TUTORIAL)
    .pipe(
      delay(1000),
      map(actionlocal => {
        console.log("Dentro del effect [REMOVE]: " + actionlocal.payload)

        let storedTutorials = (JSON.parse(localStorage.getItem(TUTORIALES_KEY)) ==null)?[]:JSON.parse(localStorage.getItem(TUTORIALES_KEY));
        let indexToDelete = actionlocal.payload;

        storedTutorials.splice(indexToDelete);
        
        // Persistimos los cursos
        localStorage.setItem(TUTORIALES_KEY,JSON.stringify(storedTutorials));

      })
      
    );

  constructor(
    private actions$: Actions,
    private tutorialService: TutorialService) {
    }
}

export const Efectos: any[] = [TutorialEffects];