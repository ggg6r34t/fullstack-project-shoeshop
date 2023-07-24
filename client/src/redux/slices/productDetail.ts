import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { Product } from "../../type/types";

type ProductDetailsState = {
  productDetail: Product | null;
  isLoading: boolean;
};

const initialState: ProductDetailsState = {
  productDetail: null,
  isLoading: true,
};

const searchSlice = createSlice({
  name: "productDetail",
  initialState,
  reducers: {
    getProductDetails: (state, action: PayloadAction<Product>) => {
      state.productDetail = action.payload;
      state.isLoading = false;
    },
  },
});

export const productDetailsActions = searchSlice.actions;
const productDetailReducer = searchSlice.reducer;
export default productDetailReducer;
