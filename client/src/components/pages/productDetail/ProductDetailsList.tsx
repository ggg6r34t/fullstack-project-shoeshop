import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Container, CircularProgress, Grid } from "@mui/material";
// import styled from "styled-components";

import { AppDispatch, RootState } from "../../../redux/store";
import { fetchProductData } from "../../../redux/thunk/products";
import ProductItem from "./ProductItem";

function ProductDetailsList() {
  const productDetail = useSelector(
    (state: RootState) => state.productDetails.productDetails
  );
  const isLoading = useSelector((state: RootState) => state.products.isLoading);

  const fetchDispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    fetchDispatch(fetchProductData());
  }, [fetchDispatch]);

  if (isLoading) {
    return (
      <Container sx={{ mt: 15, minHeight: 950 }}>
        <Box
          sx={{
            position: "relative",
            top: "250px",
            left: "400px",
            display: "inline-flex",
          }}
        >
          <CircularProgress size={300} />
        </Box>
      </Container>
    );
  }

  return (
    <div>
      <Container maxWidth="xl" sx={{ mt: 25, mb: 13 }}>
        <ProductItem key={productDetail._id} productDetail={productDetail} />
      </Container>
    </div>
  );
}

export default ProductDetailsList;
