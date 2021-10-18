
//import {restoreState, saveState, StateType} from "../localStorage";
import {Dispatch} from "redux";
import {
    //loadState1,
    saveState,
    //saveState1
} from "../mon_tues/utils/localstorage=-utils";
import {store} from "./store";

export const initialState = {
    score: 1,
    startScore: 1,
    maxScore: 5,
    isSavedSettings: true,
    errorStart: false,
    errorMax: false,
}

export type InitialStateType    = typeof initialState


export const incrementorReducer= (state:InitialStateType = initialState, action: scoreTypes): InitialStateType => {
    switch (action.type) {
        case "SET_SCORE" : return {...state, ...action.payload}
        case "SAVE"      : {
            // saveState<StateType>('incrementor',
            //     {maxScore: state.maxScore, startScore: state.startScore})
            return {...state, isSavedSettings: true, errorStart: false, errorMax: false,}
        }
        case "INIT_WITH_LS"    : {
            // const startState = restoreState<StateType>("incrementor",
            //     {maxScore: state.maxScore, startScore: state.startScore})
            return {...state, ...action.payload, isSavedSettings: true, errorStart: false, errorMax: false,}
        }
        case "SET_START_SCORE" :
        case "SET_MAX_SCORE"   : {
            const copy_state = {...state, ...action.payload}
            //let {startScore, maxScore, errorStart, errorMax, ...rest} = state
            copy_state.isSavedSettings = false

            if (copy_state.startScore >= copy_state.maxScore)
                copy_state.errorStart = copy_state.errorMax= true
            else if (copy_state.startScore < 0)
                copy_state.errorStart = true
            else
                copy_state.errorStart = copy_state.errorMax = false

            return {...copy_state}
        }

        default: return  {...state}
    }
}

export const saveAC         = () => ( {type:"SAVE"} as const)
export const initialStateAC = (startScore: number, maxScore: number) => ( {type: "INIT_WITH_LS", payload:{startScore, maxScore}} as const)
export const setScoreAC     = (score: number) => ( {type: "SET_SCORE", payload:{score}} as const)
export const setStartScoreAC= (startScore: number) => ( {type: "SET_START_SCORE", payload:{startScore}} as const)
export const setMaxScoreAC  = (maxScore: number) => ( {type: "SET_MAX_SCORE", payload:{maxScore}} as const)


export type setScoreAT      = ReturnType<typeof setScoreAC>
export type saveAT          = ReturnType<typeof saveAC>
export type initialStateAT  = ReturnType<typeof initialStateAC>
export type setStartScoreAT = ReturnType<typeof setStartScoreAC>
export type setMaxScoreAT   = ReturnType<typeof setMaxScoreAC>


// export const saveTC         = () => (dispatch: Dispatch) => {
//     saveState1({
//         startScore: store.getState().incrementor.startScore,
//         maxScore  : store.getState().incrementor.maxScore,
//     });
//     dispatch(saveAC())
// }
//
// export const initialStateTC = () => (dispatch: Dispatch) => {
//     const {startScore, maxScore} = loadState1()
//     dispatch(
//         initialStateAC(startScore, maxScore)
//     )
// }




export type scoreTypes      =
      saveAT
    | setStartScoreAT
    | setMaxScoreAT
    | setScoreAT
    | initialStateAT



//1) Как сделать сохранение счета в local storage
//2) Как сделать сохраниние только по нажатию на set через thunk
//3) Оптимизация работы приложения: React.memo, useCallback