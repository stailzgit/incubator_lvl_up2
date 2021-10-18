
////   Version save in LocalStorage FULL state

import {combineReducers, createStore, applyMiddleware} from "redux";
import {incrementorReducer} from "./score-reducer";
import thunk from "redux-thunk"
import {loadState, saveState} from "../mon_tues/utils/localstorage=-utils";

const rootReducers = combineReducers({
    incrementor: incrementorReducer,
})

export type AppRootStateType = ReturnType<typeof rootReducers>


export const store = createStore(rootReducers, loadState(), applyMiddleware(thunk))


store.subscribe(() => {
    saveState({
        incrementor: store.getState().incrementor
    });
});



export type AppStoreType = typeof store


// @ts-ignore
window.store = store



//////   Version save in LocalStorage only startScore and maxScore


// import {combineReducers, createStore, applyMiddleware} from "redux";
// import {incrementorReducer} from "./score-reducer";
// import thunk from "redux-thunk"
// // import {loadState, saveState} from "../mon_tues/utils/localstorage=-utils";
//
// const rootReducers = combineReducers({
//     incrementor: incrementorReducer,
// })
//
// export type AppRootStateType = ReturnType<typeof rootReducers>
//
//
// export const store = createStore(
//     rootReducers,
//     //loadState(),
//     applyMiddleware(thunk))
//
//
// // store.subscribe(() => {
// //     saveState({
// //         incrementor: store.getState().incrementor
// //     });
// // });
//
//
//
// export type AppStoreType = typeof store
//
//
// // @ts-ignore
// window.store = store