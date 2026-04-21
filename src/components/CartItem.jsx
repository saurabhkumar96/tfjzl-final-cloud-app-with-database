import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      state.totalQuantity++;

      if (!existingItem) {
        state.items.push({
          ...action.payload,
          quantity: 1,
          totalPrice: action.payload.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += action.payload.price;
      }

      state.totalAmount += action.payload.price;
    },

    removeFromCart: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);

      if (!item) return;

      state.totalQuantity -= item.quantity;
      state.totalAmount -= item.totalPrice;

      state.items = state.items.filter((i) => i.id !== action.payload);
    },

    increaseQuantity: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);

      if (!item) return;

      item.quantity++;
      item.totalPrice += item.price;

      state.totalQuantity++;
      state.totalAmount += item.price;
    },

    decreaseQuantity: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);

      if (!item) return;

      if (item.quantity === 1) {
        state.items = state.items.filter((i) => i.id !== action.payload);
      } else {
        item.quantity--;
        item.totalPrice -= item.price;
      }

      state.totalQuantity--;
      state.totalAmount -= item.price;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} = CartSlice.actions;

export default CartSlice.reducer;