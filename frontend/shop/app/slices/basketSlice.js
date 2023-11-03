import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  type: null,
  name: null,
  image: null,
  description: null,
  price: null,
  volume: null,
  quantity: null,
  volume: null,
  path: null,
  basket: []
};

const goodsSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    setGoods(state, action) {
      const { id, type, name, image, price, volume } = action.payload;
      state.id = id;
      state.type = type;
      state.name = name;
      state.image = image;
      state.price = price;
      state.volume = volume;
    },
    addToBasket(state, action) {
      state.basket = [...state.basket, ...action.payload];
    },
    deleteFromBasket(state, action) {
      state.basket = state.basket.filter(item => item.id !== action.payload);
    },
    clearBasket(state) {
      state.basket = initialState.basket;
    }
  }
});

export const { setGoods, addToBasket, deleteFromBasket, clearBasket } = goodsSlice.actions;

export default goodsSlice.reducer;