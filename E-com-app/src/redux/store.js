import { configureStore } from '@reduxjs/toolkit';
import productListReducer from './Slice/ProductListSlice';

export const store = configureStore({
  reducer: {
    products: productListReducer,
  },
});
