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
    
    deleteFromBasket(state, {payload}) {
      state.basket = state.basket.filter(item => item.id !== payload.id || item.volume !== payload.volume);
    },
    
    clearBasket(state) {
      state.basket = initialState.basket;
    },
    updateBasket: (state, { payload }) => {
      state.basket = payload;
    }
  }
});

export const { addToBasket, deleteFromBasket, clearBasket, updateBasket } = goodsSlice.actions;

export default goodsSlice.reducer;


// only for testing

// {
//     id: "65869b0150b4dfd67028fc34",
//     image: "https://firebasestorage.googleapis.com/v0/b/alco-auth-1a0f0.appspot.com/o/b1.png?alt=media&token=5169fd70-1bc9-44b5-8663-dfb763de927c",
//     name: "staropramen",
//     path:  "/lite/beer/65869b0150b4dfd67028fc34",
//     price: 28,
//     quantity:1,
//     type: "lite",
//     volume: undefined},
//     {
//       id: "65869b0150b4dfd67028fc34",
//       image: "https://firebasestorage.googleapis.com/v0/b/alco-auth-1a0f0.appspot.com/o/b1.png?alt=media&token=5169fd70-1bc9-44b5-8663-dfb763de927c",
//       name: "staropramen",
//       path:  "/lite/beer/65869b0150b4dfd67028fc34",
//       price: 28,
//       quantity:1,
//       type: "lite",
//       volume: 1
//     }