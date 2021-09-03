import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./rickAndMorty/reducer";

const middleware = applyMiddleware(thunk)

const reducers = combineReducers({
    character: rootReducer,
})

export const store = createStore(
    reducers,
    middleware,
)