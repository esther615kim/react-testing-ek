import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';

const initialState = {
    items:[],
    status:null // what status?
}

const productSlice = createSlice({
    name:"products",
    initialState,
    reducers:{

    }
})

export default productSlice.reducer;