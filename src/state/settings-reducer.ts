type StateType = {
}

const initState:StateType = {

}

export type _AT ={
    type: "_TYPE",
}

export const settingsReducer = (state = initState, action: _AT): typeof initState => {
    switch (action.type) {
        case '_TYPE': {

            return {...state}
        }
        default: return {...state}
    }
}

export const _AC = (  ): _AT => {
    return {type: "_TYPE"}
}