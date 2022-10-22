import axios from "axios";
import { AnyAction, Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Action } from "../actions/index";
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const depositMoney = () => {
  return async (dispatch: Dispatch<Action>) => {
    const json = await axios({
      method: "get",
      withCredentials: true,
      url: "http://localhost:3001/criptos"
     });
    dispatch({
      type: ActionType.GET_CRIPTO,
      payload: json.data,
    });
  };
};

export const getAnime = () => {
  return async (dispatch: Dispatch<Action>) => {
    const json = await axios({
      method: "get",
      withCredentials: true,
      url: "http://localhost:3001/allAnimes"
     });
    dispatch({
      type: ActionType.GET_ANIME,
      payload: json.data,
    });
  };
};

export const getGot = () => {
  return async (dispatch: Dispatch<Action>) => {
    const json = await axios({
      method: "get",
      withCredentials: true,
      url: "http://localhost:3001/got"
     });
    dispatch({
      type: ActionType.GET_GOT,
      payload: json.data,
    });
  };
};


function rejectWithValue(arg0: string): any {
  throw new Error("Function not implemented.");
}

export const register = createAsyncThunk(
  'posts/addPost',
  async (payload: any, {rejectWithValue} ) => {
    try {
     const json =  await axios({
      method: "post",
      data: payload,
      withCredentials: true,
      url: "http://localhost:3001/register"
     });

      console.log(json.data)
      return json.data
    } catch (err) {
      // You can choose to use the message attached to err or write a custom error
      return rejectWithValue('Opps there seems to be an error')
    }
  }
)

export const login = createAsyncThunk(
  'posts/addPost',
  async (payload: any, {rejectWithValue} ) => {
    try {
     const json =  await axios({
      method: "post",
      data: payload,
      withCredentials: true,
      url: "http://localhost:3001/login"
     });

      console.log(json.data)
      return json.data
    } catch (err) {
      // You can choose to use the message attached to err or write a custom error
      return rejectWithValue('Opps there seems to be an error')
    }
  }
)


function dispatch(arg0: { type: ActionType; payload: any; }) {
  throw new Error("Function not implemented.");
}

