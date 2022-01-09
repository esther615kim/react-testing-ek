import { createSlice } from "@reduxjs/toolkit";
// import {toast} from "react-toastify";

const initialState = {
  cartItems: [{
    id:0,
    title:"Hungry cheese burger",
    price:6.2,
    qty:1,
  }],
  // cartItems:localStorage.getItem("mycart")? JSON.parse(localStorage.getItem("mycart")):[],
  cartTotalQty: 0,
  cartTotalAmt: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // add item to cart
    addToCart(state, action) {
      const selectedItem = {...action.payload, qty:1};
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
    
      if(itemIndex<0){
        state.cartItems.push(selectedItem);
      }else{
        state.cartItems[itemIndex].qty ++;
      }
      state.cartTotalQty++;
      state.cartTotalAmt = state.cartTotalAmt + selectedItem.price; //toFixed(2);
      
      console.log("subtotal",state.cartTotalAmt,state.cartTotalQty);
      // toast.success(`${action.payload.name} is added`, {position:"bottom-left"})
      // localStorage.setItem("mycart",JSON.stringify(state.cartItems));
    },
    // remove item from cart
    removeFromCart(state,action){
      const newCartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );

      state.cartItems = newCartItems;
    }
  },
});

export const { addToCart,removeFromCart } = cartSlice.actions; // individual reducer

export default cartSlice.reducer;

