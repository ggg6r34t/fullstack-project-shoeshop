import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { Product } from "../../type/types";

type ProductDetailState = {
  productDetail: Product | null;
  isLoading: boolean;
};

const initialState: ProductDetailState = {
  productDetail: null,
  isLoading: true,
};

const productDetailSlice = createSlice({
  name: "productDetail",
  initialState,
  reducers: {
    getProductDetails: (state, action: PayloadAction<Product>) => {
      state.productDetail = action.payload;
      state.isLoading = false;
    },
  },
});

export const productDetailsActions = productDetailSlice.actions;
const productDetailReducer = productDetailSlice.reducer;
export default productDetailReducer;
