import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import styled from "styled-components";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { Box, Grid, Typography } from "@mui/material";

import { productActions } from "../../../redux/slices/products";
// import { cartActions } from "../../../redux/slices/cart";
import { Product } from "../../../type/types";

type Prop = {
  productDetail: Product;
};

const AddToCartButton = styled(Button)`
  border-radius: 0 !important;
  border-color: #3d3c42 !important;
  color: #3d3c42 !important;
  &&:hover {
    color: #c92c6d;
    background-color: transparent;
  }
`;

export default function ProductItem({ productDetail }: Prop) {
  const favProducts = useSelector(
    (state: RootState) => state.products.favProduct
  );

  const functionDispatch = useDispatch();

  function addToFavourite(favProd: Product) {
    const favItemInList = favProducts.some(
      (favItem) => favItem.title === favProd.title
    );

    const removeFavItemInList = favProducts.filter(
      (removeFavItem) => removeFavItem.title !== favProd.title
    );
    functionDispatch(productActions.removeFavProduct(removeFavItemInList));

    if (!favItemInList) {
      functionDispatch(productActions.addFavProduct(favProd));
    }
  }

  // function addToCart(cartProd: Product) {
  //   functionDispatch(cartActions.addCartProduct(cartProd));
  //   functionDispatch(cartActions.getTotalQuantity());
  // }

  // #044606 - emerald green
  return (
    <Grid
      container
      spacing={1}
      justifyContent={"left"}
      // columns={{ xs: 4, sm: 8, md: 12 }}
    >
      <Grid item xs={2} sm={4} md={8} key={productDetail._id}>
        {/* Grid item 1 */}
        <Typography>Grid Item 1</Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {Array.from(Array(4)).map((_, index) => (
            <Grid item xs={2} sm={4} md={6} key={productDetail._id}>
              <Card
                elevation={0}
                sx={{
                  backgroundColor: "#04460620",
                  height: 400,
                  minWidth: 420,
                  borderRadius: 11,
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    height: 410,
                    width: 425,
                    backgroundRepeat: "no-repeat",
                    display: "block",
                    margin: "0 auto",
                  }}
                  image={
                    "https://www.melvin-hamilton.com/cdn/shop/products/457ccfff9ed2a7065774c4a92363f57042eaba77_Clive_20_122790_HD_8_1100x.png?v=1683115277"
                  }
                  title={productDetail.title}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={4} sm={4} md={4}>
        {/* Grid item 2 */}

        <Box sx={{ pl: 2.5 }}>
          <Typography>Grid Item 2</Typography>
          <Typography>Something here</Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
