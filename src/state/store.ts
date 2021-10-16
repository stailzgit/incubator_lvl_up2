import {combineReducers, createStore} from "redux";
import {scoreReducer} from "./score-reducer";
import {settingsReducer} from "./settings-reducer";

const reducers = combineReducers({
    score: scoreReducer,
    settings: settingsReducer,

})

export const store = createStore(reducers)

export default store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store // for dev