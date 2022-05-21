import { combineReducers } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import album from './album';
import user from "./user";
const reducer = (state, action) => {
  if (action.type === HYDRATE){
    return {
      ...state,
      ...action.payload
    };
  }
  return combineReducers({
    album,
    user,
  })(state,action);
}

export default reducer;