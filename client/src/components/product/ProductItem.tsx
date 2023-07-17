import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import styled from "styled-components";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { productActions } from "../../../redux/slices/products";
// import { cartActions } from "../../../redux/slices/cart";
import { Product } from "../../../type/types";

type Prop = {
  product: Product;
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

export default function ProductItem({ product }: Prop) {
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
    <div>
      <Card
        elevation={0}
        sx={{
          backgroundColor: "#04460620",
          height: "455px",
          minWidth: 470,
          borderRadius: 11,
        }}
      >
        <CardActions disableSpacing>
          <IconButton
            sx={{ position: "relative", top: 55, left: 225 }}
            aria-label="add to favorites"
            onClick={() => addToFavourite(product)}
          >
            <FavoriteIcon
              sx={{
                color: favProducts.some(
                  (favProd) => favProd.title === product.title
                )
                  ? "#000000" // black
                  : "#eeeeee", // off-white
              }}
            />
          </IconButton>
        </CardActions>
        <Link to={`/products/${product._id}`}>
          <CardMedia
            component="img"
            sx={{
              height: 350,
              width: 430,
              backgroundRepeat: "no-repeat",
              display: "block",
              margin: "0 auto",
            }}
            image={
              "https://www.melvin-hamilton.com/cdn/shop/products/457ccfff9ed2a7065774c4a92363f57042eaba77_Clive_20_122790_HD_8_1100x.png?v=1683115277"
            }
            title={product.title}
          />
        </Link>
      </Card>

      <Stack direction="row" spacing={3}>
        <Typography gutterBottom variant="subtitle1">
          {product.title}
        </Typography>
        <Typography gutterBottom variant="subtitle1">
          {product.price} EUR
        </Typography>
      </Stack>

      <AddToCartButton
        sx={{ width: 275 }}
        variant="outlined"
        // onClick={() => addToCart(product)}
      >
        ADD TO CART
      </AddToCartButton>
    </div>
  );
}
