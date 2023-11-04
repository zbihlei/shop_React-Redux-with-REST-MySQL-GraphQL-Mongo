import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basket: []
};

const goodsSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, { payload }) => {
      const { id, quantity: addedQuantity, volume } = payload;
      const newBasket = [...state.basket];
    
      const foundItemIndex = newBasket.findIndex((item) => item.id === id && item.volume === volume);
    
      if (foundItemIndex !== -1) {
        newBasket[foundItemIndex].quantity += addedQuantity;
      } else {
        newBasket.push({ ...payload });
      }
    
      state.basket = newBasket;
    },
    
    deleteFromBasket(state, action) {
      state.basket = state.basket.filter(item => item.id !== action.payload);
    },
    clearBasket(state) {
      state.basket = initialState.basket;
    }
  }
});

export const { addToBasket, deleteFromBasket, clearBasket } = goodsSlice.actions;

export default goodsSlice.reducer;