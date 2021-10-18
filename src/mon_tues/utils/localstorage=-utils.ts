// localStorage.js
import {AppRootStateType, store} from "../../state/store";




export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('incrementor-state');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};


// localStorage.js
export const saveState = (state:AppRootStateType) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('incrementor-state', serializedState);
    } catch {
        // ignore write errors
    }
};





// export const saveState1 = ({startScore, maxScore}:{startScore:number, maxScore:number}) => {
//     try {
//         const serializedState = JSON.stringify({startScore, maxScore});
//         localStorage.setItem('start_max_score', serializedState);
//     } catch {
//         // ignore write errors
//     }
// };
//
// type start_max_score_Type = {
//     startScore: number,
//     maxScore  : number,
// }
//
//
// export const loadState1 = ():start_max_score_Type => {
//     try {
//         const serializedState = localStorage.getItem('start_max_score');
//         if (serializedState === null) {
//             return {startScore: 1, maxScore: 5};
//         }
//         return JSON.parse(serializedState)
//          ;
//     } catch (err) {
//         return {startScore: 1, maxScore: 5};
//     }
// };