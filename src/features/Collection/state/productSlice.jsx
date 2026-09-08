import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    singleProduct: null,
  },
  reducers: {
    setProducts: (state, action) => {
      state.products.push(action.payload);
    },

    setSingleProduct: (state, action) => {
      state.singleProduct = action.payload;
    },
  },
});

export const { setProducts, setSingleProduct } = productSlice.actions;
export default productSlice.reducer;
