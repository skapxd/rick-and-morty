import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { rootReducer, State } from "./rickAndMorty/reducer";

export interface RootReducers {
    character: State
}

const middleware = applyMiddleware(thunk)

const reducers = combineReducers<RootReducers>({
    character: rootReducer,
})

export const store = createStore(
    reducers,
    middleware,
)