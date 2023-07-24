import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Container, CircularProgress, Grid } from "@mui/material";
// import styled from "styled-components";

import { AppDispatch, RootState } from "../../redux/store";
import {
  fetchProductByCategory,
  fetchProductData,
} from "../../redux/thunk/products";
import ProductItem from "./ProductItem";

export default function ProductList() {
  const products = useSelector((state: RootState) => state.products.products);
  const isLoading = useSelector((state: RootState) => state.products.isLoading);

  const fetchDispatch = useDispatch<AppDispatch>();

  const param = useParams();
  const category = param.category as string;

  useEffect(() => {
    fetchDispatch(fetchProductData());
    fetchDispatch(fetchProductByCategory(category));
  }, [fetchDispatch, category, param]);

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
      <Container maxWidth="xl" sx={{ mt: 25 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 2 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {products.map((product) => (
            <Grid item xs={2} sm={4} md={4} key={product._id}>
              <ProductItem key={product._id} product={product} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
