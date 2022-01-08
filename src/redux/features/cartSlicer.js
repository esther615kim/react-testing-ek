import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartTotalQty: 0,
  cartTotalAmt: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // add item to cart
    addToCart(state, action) {
      const selectedProduct = {...action.payload, qty:1};
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
    
      if(itemIndex<0){
    // new to cart
        state.cartItems.push(selectedProduct);
      }else{
        state.cartItems[itemIndex].qty ++;
      }
      state.cartTotalQty++;
      state.cartTotalAmt = state.cartTotalAmt +selectedProduct.price;
      console.log("subtotal",state.cartTotalAmt,state.cartTotalQty);
    
    },
  },
});

export const { addToCart } = cartSlice.actions; // individual reducers

export default cartSlice.reducer;

