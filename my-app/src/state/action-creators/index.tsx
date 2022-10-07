import axios from "axios"
import { Dispatch } from "redux"
import { ActionType } from "../action-types"
import { Action } from "../actions/index"

export const depositMoney =  () => {
    return async (dispatch: Dispatch<Action>) => {
        const json = await axios.get("http://localhost:3001/users")
        dispatch({
            type: ActionType.GET_CRIPTO,
            payload: json.data
        })
    }
}

