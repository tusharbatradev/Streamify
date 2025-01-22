import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
    searchValue: '',
    searchedVideos: []
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    setSearchVideos: (state, action) => {
      state.searchedVideos = action.payload;
    },
  },
});

export const { toggleMenu, closeMenu, setSearchValue, setSearchVideos } = appSlice.actions;
export default appSlice.reducer;