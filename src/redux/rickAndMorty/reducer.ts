import { Character } from "../../api/rickAndMorty/interface";
import { TypeReducerRickAndMorty } from './types';

export interface Action {
    type: TypeReducerRickAndMorty,
    payload: Character[]
}

export interface State {
    state: Character[]
}

const initialState: State = {
    state: []
}

export const rootReducer = (state: State = initialState, action: Action): State => {

    if (action.type === TypeReducerRickAndMorty.GetCharacters) {
        return {
            ...state,
            state: action.payload
        }
    }

    return state
}