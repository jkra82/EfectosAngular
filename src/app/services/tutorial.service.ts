import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';

import { Observable } from 'rxjs/Observable';
import { Tutorial } from './../models/tutorial.model';
import * as TutorialActions from './../actions/tutorial.actions';


import { AppState } from '../app.state';

//type Action = TutorialActions.AllActions;

@Injectable()
export class TutorialService {

  tutorials: Observable<Tutorial[]>;
//.map((accion1: TutorialActions.AddTutorial) => console.log(accion1.type));
  //@Effect()
  //effectCreatingTutorial$:Observable<Action> = this.actions$.ofType(TutorialActions.ADD_TUTORIAL)

 // @Effect() effectCreatingTutorial2$ = this.actions$
 // .ofType(TutorialActions.ADD_TUTORIAL)
 // .map(obj: TutorialActions.AddTutorial => obj.payload )
 // .switchMap(payload => {
 //   console.log('the payload was: ' + payload.message);
 //   return Observable.of({type: "PAYLOAD_EFFECT_RESPONDS", payload: {message: "The effect says hi!"}})
 // });


  //.map( (actionlocal:TutorialActions.AddTutorial) => console.log("bravo"));

  //constructor( private actions$: Actions,
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
