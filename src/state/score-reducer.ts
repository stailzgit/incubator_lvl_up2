// enum ActionTypes {
//     INCREMENT = "INCREMENT",
//     RESET = "RESET",
//     SAVE = "SAVE",
//     NOT_SAVED= "NOT_SAVED"
// }

// export type incrementAT = { type: ActionTypes.INCREMENT, }
// export type resetAT     = { type: ActionTypes.RESET, }
// export type notSavedAT  = { type: ActionTypes.NOT_SAVED, }
// export type saveAT     = { type: ActionTypes.SAVE, payload: { startScore: number,maxScore: number }}

const initialState = {
    score: 5,
    startScore: 5,
    maxScore: 7,
    savedSettings: true,
    errorStart: false,
    errorMax: false,

}

type InitialStateType    = typeof initialState


export const scoreReducer= (state:InitialStateType = initialState, action: scoreTypes): InitialStateType => {
    switch (action.type) {

        case "INCREMENT" : return {...state, score: state.score + 1}
        case "RESET"     : return {...state, score: state.startScore}
        case "NOT_SAVED" : return {...state, savedSettings: false}
        case "SAVE"      : return {...state, ...action.payload, savedSettings: true}
        case "SET_START_SCORE" :
        case "SET_MAX_SCORE" : {
            const copy_state = {...state, ...action.payload}
            //let {startScore, maxScore, errorStart, errorMax, ...rest} = state

            if (copy_state.startScore >= copy_state.maxScore)
                copy_state.errorStart = copy_state.errorMax= true
            else if (copy_state.startScore < 0)
                copy_state.errorStart = true
            else
                copy_state.errorStart = copy_state.errorMax= true

            return {...copy_state}
        }

        default: return  {...state}
    }
}


export const incrementAC    = ( ) => ({type: "INCREMENT"} as const)
export const resetAC        = ( ) => ({type: "RESET"} as const)
export const notSavedAC     = ( ) => ({type: "NOT_SAVED"} as const)

// export const errorStart  = ( ) => ({type: "ERROR_START", payload:{errorStart}} as const)
// export const errorMax  = ( ) => ({type: "ERROR_MAX"} as const)
export const saveAC         = (startScore: number, maxScore: number) => ( {type:  "SAVE", payload:{startScore, maxScore}} as const)
export const setStartScoreAC= (startScore: number) => ( {type:  "SET_START_SCORE", payload:{startScore}} as const)
export const setMaxScoreAC  = (maxScore: number) => ( {type:  "SET_MAX_SCORE", payload:{maxScore}} as const)

export type incrementAT     = ReturnType<typeof incrementAC>
export type resetAT         = ReturnType<typeof resetAC>
export type notSavedAT      = ReturnType<typeof notSavedAC>
export type saveAT          = ReturnType<typeof saveAC>
export type setStartScoreAT = ReturnType<typeof setStartScoreAC>
export type setMaxScoreAT   = ReturnType<typeof setMaxScoreAC>


export type scoreTypes      = incrementAT | resetAT | saveAT | notSavedAT |setStartScoreAT |setMaxScoreAT


