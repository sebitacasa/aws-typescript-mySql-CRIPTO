import { ActionType } from "../action-types/index"

interface CripInfo {
    type: ActionType.GET_CRIPTO,
    payload: any
}

interface SingIn {
    type: ActionType.SING_IN,
    payload: {firstName?: FormDataEntryValue | null , lastName?: FormDataEntryValue | null, userName?: FormDataEntryValue | null, email?: FormDataEntryValue | null , password?: FormDataEntryValue | null }
}

interface SingUp {
    type: ActionType.SING_IN,
    payload: { email: FormDataEntryValue, password: FormDataEntryValue}
}



export type Action = CripInfo | SingIn | SingUp;