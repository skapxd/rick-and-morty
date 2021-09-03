import { createStore } from "redux";
import { rootReducer } from "./rickAndMorty/reducer";

export type RootState = ReturnType<typeof store.getState>

export const store = createStore(rootReducer)