import { BASE_URL } from "../../api/api";
import { productDetailsActions } from "../slices/productDetail";
import { productActions } from "../slices/products";
import { AppDispatch } from "../store";

export function fetchProductData() {
  const productUrl = `${BASE_URL}/products/`;
  return async (dispact: AppDispatch) => {
    const response = await fetch(productUrl);
    const productData = await response.json();
    dispact(productActions.getProductData(productData));
  };
}

export function fetchProductDetails(productId: string) {
  const productUrl = `${BASE_URL}/products/products/${productId}`;
  return async (dispact: AppDispatch) => {
    const response = await fetch(productUrl);
    const productDetailData = await response.json();
    dispact(productDetailsActions.getProductDetails(productDetailData));
  };
}

export function fetchProductByCategory(category: string | undefined) {
  const productUrl = `${BASE_URL}/products/products/category/${category}`;
  return async (dispact: AppDispatch) => {
    const response = await fetch(productUrl);
    const productByCategoryData = await response.json();
    dispact(productActions.getProductData(productByCategoryData));
  };
}
