import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    removeProduct: (state, action) => {
      let index = state.products.indexOf(action.payload);
      state.quantity -= action.payload;
      state.products.splice(index, 1);
      state.products = [...state.products];
    },
    initializeCart: (state) => {
      state.quantity = 0;
      state.products = [];
      state.total = 0;
    },
  },
});

export const { addProduct, removeProduct, initializeCart } = cartSlice.actions;
export default cartSlice.reducer;
