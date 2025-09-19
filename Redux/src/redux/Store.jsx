import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import photosReducer from '../features/counter/thunk'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    photos: photosReducer
  },
})