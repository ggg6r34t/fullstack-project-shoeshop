import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Container, Grid, LinearProgress } from "@mui/material";
import styled from "styled-components";

import { AppDispatch, RootState } from "../../redux/store";
import {
  fetchProductByCategory,
  fetchProductData,
} from "../../redux/thunk/products";
import ProductItem from "./ProductItem";

const StyledLinearProgressBar = styled(LinearProgress)`
  & .MuiLinearProgress-bar {
    background-color: #044606 !important;
  }
`;

export default function ProductList() {
  const products = useSelector((state: RootState) => state.products.products);
  const isLoading = useSelector((state: RootState) => state.products.isLoading);
  const [progress, setProgress] = useState(0);

  const fetchDispatch = useDispatch<AppDispatch>();

  const param = useParams();
  const category = param.category as string | undefined;

  useEffect(() => {
    fetchDispatch(fetchProductData());
    fetchDispatch(fetchProductByCategory(category));

    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, [fetchDispatch, category, param]);

  if (isLoading) {
    return (
      <Box
        sx={{
          width: "100%",
          position: "relative",
          top: "157.5px",
        }}
      >
        <StyledLinearProgressBar
          variant="determinate"
          value={progress}
          sx={{
            "&.MuiLinearProgress-root": {
              backgroundColor: "#04460638",
            },
          }}
        />
      </Box>
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
