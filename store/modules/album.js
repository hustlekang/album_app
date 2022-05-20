import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  albums : []
};

const albumSlice = createSlice({
  name : 'album',
  initialState,
  reducers : {
    setAlbum : (state,action) => {state.albums = [...action.payload]},
  },
});

export const {setAlbum} = albumSlice.actions;
export default albumSlice.reducer;