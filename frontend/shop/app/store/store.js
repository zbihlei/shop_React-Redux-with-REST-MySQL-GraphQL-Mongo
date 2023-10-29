import { configureStore } from '@reduxjs/toolkit';
// import { apiSlice } from '../api/apiSlice'
import userReducer from '../slices/userSlice'



const store = configureStore({
  reducer: {
    user: userReducer
    // [apiSlice.reducerPath]: apiSlice.reducer,
  },
  // middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: process.env.NODE_ENV !== 'production'
});

export default store;
