import { createSlice } from "@reduxjs/toolkit";
import { dummyUser } from "../dummyUser";

export const selectAlbumByPage = (albums,pageNumber) => {
  return albums.filter((album,index) => (pageNumber-1)*5 <=index && index <= pageNumber*5 - 1 );
}

const initialState = {
  albums : [],
  page : 1,
  id : 101,
  userId : 11,
  selectedAlbum : undefined,
};

const albumSlice = createSlice({
  name : 'album',
  initialState,
  reducers : {
    setAlbum : (state,action) => {state.albums = [...action.payload]},
    setPage : (state,action) => {state.page = action.payload},
    selectAlbum : (state,action) => {state.selectedAlbum = action.payload},
    addAlbum : (state,action) => {state.albums.unshift(action.payload)},
    removeAlbum : (state,action) => {state.albums = state.albums.filter(album => album.id !== action.payload)},
    updateAlbum : (state,action) => {state.albums = state.albums.map( album => {
      if (album.id===action.payload.id) return action.payload;
      else return album;
    })},
    increaseId : state => {state.id+=1},
  },
});

export const {setAlbum,setPage,selectAlbum,addAlbum,removeAlbum,updateAlbum,increaseId,increaseUserId} = albumSlice.actions;
export default albumSlice.reducer;
