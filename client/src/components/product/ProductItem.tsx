import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { Box, CardContent, Grid, Typography } from "@mui/material";

import { cartActions } from "../../redux/slices/cart";
import { Product } from "../../type/types";

type Prop = {
  product: Product;
};

const AddToCartButton = styled(Button)`
  font-weight: 500 !important;
  background-color: #f3f3f3 !important;
  border-radius: 50px !important;
  border-color: #3d3c42 !important;

  position: absolute;
  top: -225px;
  left: 175px;
  visibility: hidden;
  z-index: 70px;
  &&:hover {
    background-color: #f3f3f3;
    border: 2px solid #044606;
    opacity: 1;
    transition: opacity 0.3s ease;
  }
`;
const CardContainer = styled(Box)`
  position: relative;

  &:hover ${AddToCartButton} {
    visibility: visible;
  }
`;

export default function ProductItem({ product }: Prop) {
  const dispatch = useDispatch();

  function addToCart(cartProd: Product) {
    dispatch(cartActions.addCartProduct(cartProd));
    dispatch(cartActions.getTotalQuantity());
  }

  // #044606 - emerald green
  return (
    <Box
      component="div"
      sx={{
        maxWidth: 600,
        height: 596,
        marginTop: "25px",
        marginBottom: "25px",
      }}
    >
      <CardContainer component="div" key={product._id}>
        <Card elevation={0} sx={{ marginBottom: "20px" }}>
          <Link to={`/products/${product._id}`}>
            <Box
              component="div"
              sx={{
                backgroundColor: "#0446060f",
                borderRadius: "18px",
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  height: 405,
                  width: 404,
                  backgroundRepeat: "no-repeat",
                  margin: "0 auto",
                }}
                image={product.image}
                title={product.title}
              />
            </Box>
          </Link>
          <CardContent>
            <Box component="div" sx={{ marginTop: "13px" }}>
              <Grid container>
                <Grid item xs={8} md={12}>
                  <Typography
                    variant="h5"
                    component="div"
                    color="#044606"
                    fontSize="1.7rem"
                    fontWeight="700"
                    letterSpacing="0.06rem"
                  >
                    {product.title}
                  </Typography>
                </Grid>
              </Grid>
            </Box>
            <Box component="div" sx={{ marginTop: "13px" }}>
              <Grid container>
                <Grid item xs={8} md={12}>
                  <Typography
                    variant="h4"
                    color="#044606"
                    fontSize="1.7rem"
                    fontWeight="100"
                    letterSpacing="0.1rem"
                  >
                    {product.price} €
                  </Typography>
                </Grid>
                <Grid item xs={8} md={12}>
                  <Typography
                    variant="h4"
                    color="#044606"
                    fontFamily="sans-serif"
                    fontSize="1.7rem"
                    fontWeight="100"
                    letterSpacing="0.1rem"
                    marginTop="10px"
                  >
                    available in several sizes{/* {product.size} EUR */}
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </CardContent>
          <AddToCartButton
            variant="outlined"
            onClick={() => addToCart(product)}
          >
            <Typography
              variant="h4"
              color="#044606"
              fontSize="1.2rem"
              fontWeight="500"
              textTransform="lowercase"
            >
              add to bag
            </Typography>
          </AddToCartButton>
        </Card>
      </CardContainer>
    </Box>
  );
}
