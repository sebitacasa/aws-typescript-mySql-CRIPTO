import axios from "axios";
import { AnyAction, Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Action } from "../actions/index";
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const depositMoney = () => {
  return async (dispatch: Dispatch<Action>) => {
    const json = await axios.get("http://localhost:3001/users");
    dispatch({
      type: ActionType.GET_CRIPTO,
      payload: json.data,
    });
  };
};

// export async function singin(payload: any) {

//   await axios.post(`http://localhost:3001/sigup`, payload);

// }

// export const singin = (payload : ActionType.SING_IN) => {
//   return async () => {
//     try {
//        await axios.post(`http://localhost:3001/sigup`, payload);
      
    
//     } catch (err) {
//       console.log(err);
//     }
//   };
// };

export const singup = ( payload: {email: FormDataEntryValue | null, password: FormDataEntryValue | null}) => {
  return async () => {

  const token =  await axios.post("http://localhost:3001/login", payload)
  
    return token
  }

}

export const singin = createAsyncThunk(
  'posts/addPost',
  async (payload: any) => {
    try {
     const json =  await axios.post(`http://localhost:3001/sigup`, payload);

      console.log(json.data)
      return json.data
    } catch (err) {
      // You can choose to use the message attached to err or write a custom error
      return rejectWithValue('Opps there seems to be an error')
    }
  }
)

function rejectWithValue(arg0: string): any {
  throw new Error("Function not implemented.");
}
