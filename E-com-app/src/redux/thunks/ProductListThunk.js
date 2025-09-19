import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProductList = createAsyncThunk(
  'products/fetchProductList',
  async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    if (!response.ok) throw new Error('Failed to fetch products');
    return await response.json(); 
  }
);
