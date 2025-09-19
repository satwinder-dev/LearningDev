import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


const initialState = {
  data: [],
  loading: false,
  error : null ,
}
const url = "https://dummyjson.com/recipes"

export const fetchPhotos = createAsyncThunk("photos/fetchPhotos",async ()=>{
    const res = await fetch(url);
    return await res.json();
});

const photosSlice = createSlice({
    name:'photos',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchPhotos.pending,(state)=>{
            state.loading =true
        })
        .addCase(fetchPhotos.fulfilled, (state,action)=>{
            state.loading = false
            state.data = action.payload;
        })
        .addCase(fetchPhotos.rejected, (state,action)=>{
            state.loading = false
            state.error = action.error.message
        })
    }
})

export default photosSlice.reducer