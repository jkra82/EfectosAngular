import { Tutorial } from './models/tutorial.model'

// AppState será lo que almacenaremos en el Store.
export interface AppState {
    readonly tutorial: Tutorial[];
}