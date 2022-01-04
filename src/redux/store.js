import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import productReducer from './features/productSlicer'; // change name from productSlice => productReducer
import { productApi } from './features/productApi';
import { setupListeners } from '@reduxjs/toolkit/query'

export const store= configureStore({
    reducer:{
        products:productReducer,
        [productApi.reducerPath]:productApi.reducer,
    },
    middleware:(getDefaultMiddleware) =>{
        getDefaultMiddleware().concat(productApi.middleware);
    },
})
setupListeners(store.dispatch); // = store.dispatch(productsFetch());
