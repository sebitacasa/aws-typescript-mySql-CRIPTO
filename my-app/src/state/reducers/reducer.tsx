import { ActionType } from "../action-types/index"
import { Action } from "../actions"

const initialState = {
    getCripto :  []
}

const reducer = (state: any  = initialState, action: Action): any => {
    console.log(state, "fsafd")
    switch (action.type){
        case ActionType.GET_CRIPTO:
           return {
            ...state,
            getCripto: action.payload
        }

        default:
            return state
    }
}

export default reducer