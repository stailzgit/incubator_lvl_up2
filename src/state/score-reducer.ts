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
    savedSettings: true
}

type InitialStateType    = typeof initialState


export const scoreReducer= (state:InitialStateType = initialState, action: scoreTypes): InitialStateType => {
    switch (action.type) {

        case "INCREMENT" : return {...state, score: state.score + 1}
        case "RESET"     : return {...state, score: state.startScore}
        case "NOT_SAVED" : return {...state, savedSettings: false}
        case "SAVE"      : return {...state, ...action.payload, savedSettings: true}

        default          : return  {...state}
    }
}


export const incrementAC = ( ) => ({type: "INCREMENT"} as const)
export const resetAC     = ( ) => ({type: "RESET"} as const)
export const notSavedAC  = ( ) => ({type: "NOT_SAVED"} as const)
export const saveAC      = (startScore: number, maxScore: number) => ( {type:  "SAVE", payload:{startScore, maxScore}} as const)

export type incrementAT  = ReturnType<typeof incrementAC>
export type resetAT      = ReturnType<typeof resetAC>
export type notSavedAT   = ReturnType<typeof notSavedAC>
export type saveAT       = ReturnType<typeof saveAC>


export type scoreTypes   = incrementAT | resetAT | saveAT | notSavedAT


