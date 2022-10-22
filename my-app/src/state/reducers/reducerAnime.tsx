import { ActionType } from "../action-types/index"
import { Action } from "../actions"

const initialState = {
    animeArray: []

}

const reducerAnime = (state: any  = initialState, action: Action): any => {

    switch (action.type){
        case ActionType.GET_ANIME:
           return {
            ...state,
            animeArray: action.payload
        }
        default:
            return state
    }
}

export default reducerAnime