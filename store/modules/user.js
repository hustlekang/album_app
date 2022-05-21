import { createSlice } from "@reduxjs/toolkit";
import { dummyUser } from "../dummyUser";


export const UserNameById = (userId) =>{
  return dummyUser.find(user => user.id === userId).userName
}
const initialState = {
  loginedUser : {
    id: 1,
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
