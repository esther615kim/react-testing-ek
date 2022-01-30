import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // check with 효형's restuarant card info
  favList: [],
  favTotal: 0,
};

const FavListSlicer = createSlice({
  name: "favList",
  initialState,
  reducers: {
    // removeFromFavList
    removeFromFavList(state, action) {
      const updatedFavList = state.favList.filter(
        (item) => item.id !== action.payload.id
      );
      console.log("updated list", updatedFavList);
      state.favTotal--;
    },



    // addToFavList
    addToFavList(state, action) {
      const selectedShop = {
        ...action.payload,
      };
 
      const itemIndex = state.favList.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex < 0) {
        console.log("newly added");
        selectedShop.isLiked = true;
        state.favList.push(selectedShop);
        console.log(state.favList);
        state.favTotal++;
      } else {
        console.log(itemIndex, "already in favs!");
        selectedShop.isLiked = false;
        removeFromFavList(state,action); // not working
      }
    },
  },
});

export const { addToFavList, removeFromFavList } = FavListSlicer.actions;

export default FavListSlicer.reducer;
