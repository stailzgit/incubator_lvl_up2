import {combineReducers, createStore} from "redux";
import {scoreReducer} from "./score-reducer";

const rootReducers = combineReducers({
    score: scoreReducer,
})

export type AppRootStateType = ReturnType<typeof rootReducers>

export const store = createStore(rootReducers)

export type AppStoreType = typeof store


// @ts-ignore
window.store = store