import { createSlice } from "@reduxjs/toolkit";
import { dummyUser } from "../dummyUser";


export const UserNameById = (userId) =>{
  return dummyUser.find(user => user.id === userId).userName
}

export const loginValidation = ({email,pw}) => {
  const userWhoWantLogin =   dummyUser.find(user=> user.email === email);
  if (!userWhoWantLogin) return {result : 'fail', reason : 'unknownUser'}
  if (userWhoWantLogin.pw === pw) return {result : 'success', info : userWhoWantLogin}
  else return {result : 'fail', reason : 'pwUncorrect'}
  
}
const initialState = {
  loginedUser : {
    id: undefined,
    userName:undefined,
    email:undefined,
    pw:undefined
  },
  users: dummyUser,
};

const userSlice = createSlice({
  name : 'user',
  initialState,
  reducers : {
    setLoginedUser : (state,action) => {state.loginedUser = action.payload},
    
  },
});

export const {setLoginedUser} = userSlice.actions;
export default userSlice.reducer;
