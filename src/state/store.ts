import {combineReducers, createStore} from "redux";
import {scoreReducer} from "./score-reducer";
//import {settingsReducer} from "./settings-reducer";

const rootReducers = combineReducers({
    score: scoreReducer,
    //settings: settingsReducer,

})

export type AppStateType = ReturnType<typeof rootReducers>

export const store = createStore(rootReducers)

type AppStoreType = typeof store


// @ts-ignore
window.store = store // for dev