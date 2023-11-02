import { configureStore } from '@reduxjs/toolkit';
// import { apiSlice } from '../api/apiSlice'
import userReducer from '../slices/userSlice'
import basketSlice from '../slices/basketSlice'


const store = configureStore({
  reducer: {
    user: userReducer,
    basket: basketSlice
    // [apiSlice.reducerPath]: apiSlice.reducer,
  },
  // middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: process.env.NODE_ENV !== 'production'
});

export default store;
