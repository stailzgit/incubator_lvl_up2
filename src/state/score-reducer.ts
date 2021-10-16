type StateType = {
    score: number,
    startScore: number,
    maxScore: number,
    savedSettings: boolean
}

const initState:StateType = {
    score: 5,
    startScore: 5,
    maxScore: 7,
    savedSettings: true
}

export type incrementAT ={
    type: "INCREMENT",
}

export type resetAT ={
    type: "RESET",
}

export type savedAT ={
    type: "SAVE",
    startScore: number,
    maxScore: number
}

export type notSavedAT ={
    type: "NOT-SAVED",
}

export type ActionsType = incrementAT | resetAT | savedAT | notSavedAT

export const scoreReducer = (state = initState, action: ActionsType): typeof initState => {
    switch (action.type) {
        case 'INCREMENT': { return {...state, score: state.score + 1} }
        case 'RESET':     { return {...state, score: state.startScore} }
        case 'NOT-SAVED': { return {...state, savedSettings: false} }
        case 'SAVE': {
            return {
                ...state,
                savedSettings: true,
                startScore: action.startScore,
                maxScore: action.startScore

            }
        }

        default: return {...state}
    }
}

export const incrementAC = ( type: "INCREMENT" ): incrementAT => ({type: "INCREMENT"})
export const resetAC =     ( type: "RESET" ):     resetAT =>     ({type: "RESET"})
export const notSavedAC =  ( type: "NOT-SAVED" ): notSavedAT =>  ({type: "NOT-SAVED"})

export const savedAC = (type: "SAVED", startScore: number, maxScore: number
    ): savedAT => {
    return {type: "SAVE", startScore, maxScore}
}

