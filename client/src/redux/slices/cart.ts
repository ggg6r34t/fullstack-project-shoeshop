import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { CartProduct } from "../../type/types";

type CartState = {
  cartList: CartProduct[];
  totalAmount: number;
  selectedSize: string | null;
};

const storedCartState = localStorage.getItem("cartState");
const initialState: CartState = storedCartState
  ? JSON.parse(storedCartState)
  : {
      cartList: [],
      totalAmount: 0,
      selectedSize: null,
    };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartProduct: (state, action) => {
      const itemInCart = state.cartList.find(
        (item) => item._id === action.payload.id
      );

      if (itemInCart) {
        itemInCart.cartQuantity += 1;
      } else {
        const cartProduct = { ...action.payload, cartQuantity: 1 };
        state.cartList.push(cartProduct);
      }
      localStorage.setItem("cartState", JSON.stringify(state));
    },
    removeCartProduct: (state, action: PayloadAction<CartProduct>) => {
      state.selectedSize = null;
      const id = action.payload._id;
      state.cartList = state.cartList.filter((cartItem) => cartItem._id !== id);
      localStorage.setItem("cartState", JSON.stringify(state));
    },
    increaseCartQuantity: (state, action: PayloadAction<CartProduct>) => {
      const id = action.payload._id;
      const cartItemIndex = state.cartList.findIndex((item) => item._id === id);

      if (cartItemIndex !== -1) {
        state.cartList[cartItemIndex].cartQuantity += 1;
      }
      localStorage.setItem("cartState", JSON.stringify(state));
    },
    decreaseCartQuantity: (state, action: PayloadAction<CartProduct>) => {
      const id = action.payload._id;
      const cartItemIndex = state.cartList.findIndex((item) => item._id === id);

      if (cartItemIndex) {
        if (state.cartList[cartItemIndex].cartQuantity > 1) {
          state.cartList[cartItemIndex].cartQuantity -= 1;
        } else {
          state.cartList = state.cartList.filter((item) => item._id !== id);
        }
      }
      localStorage.setItem("cartState", JSON.stringify(state));
    },
    getTotalQuantity: (state) => {
      const totalAmount = state.cartList.reduce(
        (amount, cartItem) => amount + cartItem.price * cartItem.cartQuantity,
        0
      );
      state.totalAmount = totalAmount;
      localStorage.setItem("cartState", JSON.stringify(state));
    },
    checkOut: (state) => {
      state.cartList = [];
      localStorage.removeItem("cartState");
    },
    setSelectedSize: (
      state,
      action: PayloadAction<{ shoeId: string; size: string }>
    ) => {
      const { shoeId, size } = action.payload;
      state.selectedSize = size;
      const cartItemIndex = state.cartList.find((item) => item._id === shoeId);
      if (cartItemIndex) {
        cartItemIndex.selectedSize = size;
        localStorage.setItem("cartState", JSON.stringify(state));
      }
    },
  },
});

export const cartActions = cartSlice.actions;
const cartReducer = cartSlice.reducer;
export default cartReducer;
