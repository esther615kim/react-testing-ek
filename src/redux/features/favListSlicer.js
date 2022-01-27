import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favs: [
    {
      id: 17,
      cateogry: "spring coat",
      image:"https://img.hollisterco.com/is/image/anf/KIC_332-2017-1511-902_prod1?policy=product-large",
      description:"trendy jacket",
      price:32.15
    },
  ],
  favTotal:0
};

const FavListSlicer = createSlice({
  name: 'favList',
  initialState,
  reducers: {
    // addToFavList
    addToFavList(state, action) {
      const selectedItem = { ...action.payload, qty: 1 };

      const itemIndex = state.favs.findIndex(
        (item) => item.id === action.payload.id
      );
      
      if (itemIndex < 0) {

        state.favs.push(selectedItem);
        // console.log("넣음",state.favList)
      }
      state.favTotal++;
      console.log(state.favs);
    },
    // removeFromFavList
    // removeFromFavList(state, action) {
    //   const updatedFavList = state.favList.filter((item) => item.id !== action.payload.id);
    //   state.favList = updatedFavList;
    // },
  },
});

export const { addToFavList, removeFromFavList } = FavListSlicer.actions;

export default FavListSlicer.reducer;
