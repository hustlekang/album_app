import { combineReducers } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import album from './album';

const reducer = (state, action) => {
  if (action.type === HYDRATE){
    return {
      ...state,
      ...action.payload
    };
  }
  return combineReducers({
    album
  })(state,action);
}

export default reducer;