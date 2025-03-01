import { createSlice } from "@reduxjs/toolkit";

const FavoritesFromLocStorage = localStorage.getItem("iLikeThis");

export const favoritesSlice = createSlice({
  name: "favorites",

  initialState: {
    likedProducts: FavoritesFromLocStorage || false,
  },

  reducers: {
    addToFavorites: (prevState, action) => {
      return {
        ...prevState,
        likedProducts: true,
      };
    },

    removeFromFavorites: (prevState, action) => {
      return {
        ...prevState,
        likedProducts: false,
      };
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
