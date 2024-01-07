"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  CART_PRODUCT: [],
  CART_QUANTITY: 0,
  CART_AMOUNT: 0,
};

const cartSlice = createSlice({
  name: "CART",
  initialState,
  reducers: {
    // This function adds item to cart
    addToCart(state, action) {
      const Item_Index = state.CART_PRODUCT.findIndex(
        (item) => item._id === action.payload._id
      );
      if (Item_Index >= 0) {
        state.CART_PRODUCT[Item_Index].Quantity += 1;
      } else {
        const tempProduct = { ...action.payload, Quantity: 1 };
        state.CART_PRODUCT.push(tempProduct);
      }
    },
    // This function removes item from cart
    removeFromCart(state, action) {
      const nextItems = state.CART_PRODUCT.filter(
        (item) => item._id !== action.payload._id
      );
      state.CART_PRODUCT = nextItems;
    },
    // This function decreases the cart item
    decreaseCart(state, action) {
      const Item_Index = state.CART_PRODUCT.findIndex(
        (item) => item._id === action.payload._id
      );
      if (state.CART_PRODUCT[Item_Index].Quantity > 1) {
        const dt = (state.CART_PRODUCT[Item_Index].Quantity -= 1);
        localStorage.setItem("Sch-cart", JSON.stringify(dt));
      } else if (state.CART_PRODUCT[Item_Index].Quantity >= 1) {
        const nextItems = state.CART_PRODUCT.filter(
          (item) => item._id !== action.payload._id
        );
        state.CART_PRODUCT = nextItems;
      }
    },
    // This function will get the total quantity of the cart
    getTotal(state, action) {
      let { total, quantity } = state.CART_PRODUCT.reduce(
        (cartTotal, cartItem) => {
          const { price, Quantity } = cartItem;
          const itemTotal = price * Quantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += Quantity;

          return cartTotal;
        },
        { total: 0, quantity: 0 }
      );
      state.CART_AMOUNT = total;
      state.CART_QUANTITY = quantity;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  decreaseCart,
  getTotal,
  addToWishlist,
} = cartSlice.actions;
export default cartSlice.reducer;
