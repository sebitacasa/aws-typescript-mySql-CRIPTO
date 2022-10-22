import { ActionType } from "../action-types/index";
import { Action } from "../actions";

const initialState = {
  got: [],
};

const reducerGot = (state: any = initialState, action: Action): any => {
  switch (action.type) {
    case ActionType.GET_GOT:
      return {
        ...state,
        got: action.payload,
      };

    default:
      return state;
  }
};

export default reducerGot;
