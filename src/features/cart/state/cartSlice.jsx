import { createSlice } from "@reduxjs/toolkit";

const getCartItem = (state, id) => {
  return state.cartItems.find((val) => val.id === id);
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      console.log("added")
      let item = getCartItem(state, action.payload.id);

      if (item) return;

      console.log("action", action.payload);
      state.cartItems.push(action.payload);
    },

    removeCartItem: (state, action) => {
      const index = state.cartItems.findIndex(
        (item) => item.id === action.payload,
      );
      console.log("remove", action);

      state.cartItems.splice(index, 1);
    },

    removeAllItems: (state) => {
      console.log("hello")
      state.cartItems.splice(0, state.cartItems.length);
    },

    incrementQty: (state, action) => {
      const item = getCartItem(state, action.payload.id);

      if (item) {
        item.quantity++;
      }
    },

    decrementQty: (state, action) => {
      const item = getCartItem(state, action.payload.id);

      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
  },
});

export const {
  addToCart,
  removeCartItem,
  removeAllItems,
  incrementQty,
  decrementQty,
} = cartSlice.actions;

export default cartSlice.reducer;
