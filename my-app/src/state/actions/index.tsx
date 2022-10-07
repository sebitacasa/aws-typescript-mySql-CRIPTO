import { ActionType } from "../action-types/index"

interface CripInfo {
    type: ActionType.GET_CRIPTO,
    payload: any
}


export type Action = CripInfo;