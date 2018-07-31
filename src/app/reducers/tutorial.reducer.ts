// Exportamos el modelo.
import { Tutorial } from '../models/tutorial.model'

// Exportamos la accion y le damos un alias.
import * as TutorialActions from '../actions/tutorial.actions' 

//  DEFINIMOS UN ESTADO INICIAL
const initialState: Tutorial = {
    name: 'Initial Tutorial',
    url: 'http://google.com'
}

// DEFINIMOS EL REDUCER
// siempre reciben dos parametros estado actual y la accion a realizar.
export function reducer(state: Tutorial[] = [initialState], action: TutorialActions.AllActions) {
    switch(action.type) {
        case TutorialActions.ADD_TUTORIAL:
            return [...state, action.payload]; //añadimos el payload

        case TutorialActions.REMOVE_TUTORIAL:
            state.splice(action.payload, 1) // quitamos un payload.
            return [...state];
        default:
            return state;
    }
}