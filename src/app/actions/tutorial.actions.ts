// EXPORTAMOS EL STORE Y LOS MODELOS
import { Action } from '@ngrx/store'
import { Tutorial } from '../models/tutorial.model'

// DEFINIMOS LAS ACCIONES
export const ADD_TUTORIAL       = '[TUTORIAL] Add'
export const REMOVE_TUTORIAL    = '[TUTORIAL] Remove'
export const INIT_TUTORIALES    = '[TUTORIAL] Init'

// IMPLEMENTAMOS LAS ACCION INDICANDO TIPO Y EL PAYLOAD QUE APORTA
export class AddTutorial implements Action {
    readonly type = ADD_TUTORIAL

    constructor(public payload: Tutorial) {}
}

export class RemoveTutorial implements Action {
    readonly type = REMOVE_TUTORIAL

    constructor(public payload: number) {}
}

export class InitTutoriales implements Action {
    readonly type = INIT_TUTORIALES

    constructor(public payload: Tutorial[]) {}
}

// EXPORTAMOS LAS ACCIONES (nombres de los metodos)
export type AllActions = AddTutorial | RemoveTutorial | InitTutoriales