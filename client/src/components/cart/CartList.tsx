import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Paper,
  Stack,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";

import { theme } from "../theme/theme";
import { RootState } from "../../redux/store";
import { cartActions } from "../../redux/slices/cart";
import { CartProduct } from "../../type/types";
import empty_cart from "../../assets/empty_shopping_cart.svg";
import { openDrawer, closeDrawer } from "../../redux/slices/toggleDrawer";

const StyledStack = styled(Stack)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

function CartList() {
  const cartProducts = useSelector((state: RootState) => state.cart.cartList);
  const totalAmount = useSelector((state: RootState) => state.cart.totalAmount);
  // const selectedSize = useSelector(
  //   (state: RootState) => state.cart.selectedSize
  // );

  console.log(cartProducts);
  const dispatch = useDispatch();

  let cartItemCount: number;
  if (cartProducts.length === 0) {
    cartItemCount = 0;
  } else {
    cartItemCount = cartProducts.length;
  }

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      if (open) {
        dispatch(openDrawer());
      } else {
        dispatch(closeDrawer());
      }
    };

  const functionDispatch = useDispatch();

  function increaseCartQuantity(cartItem: CartProduct) {
    functionDispatch(cartActions.increaseCartQuantity(cartItem));
    functionDispatch(cartActions.getTotalQuantity());
  }

  function decreaseCartQuantity(cartItem: CartProduct) {
    functionDispatch(cartActions.decreaseCartQuantity(cartItem));
    functionDispatch(cartActions.getTotalQuantity());
  }

  function removeItemFromCart(cartItem: CartProduct) {
    functionDispatch(cartActions.removeCartProduct(cartItem));
    functionDispatch(cartActions.getTotalQuantity());
  }

  return (
    <div>
      {cartProducts.length === 0 ? (
        <Box component="div" sx={{ padding: "30px" }}>
          <Box component="div" sx={{ maxWidth: 523 }}>
            <CardMedia
              component="img"
              height="400px"
              image={empty_cart}
              alt="empty_shopping_cart"
            />
          </Box>
          <Typography
            variant="h1"
            color="#044606"
            align="left"
            letterSpacing="0.1rem"
            margin="66px 0"
          >
            your cart is empty.
          </Typography>
          <Typography
            variant="h4"
            color="#044606"
            align="left"
            fontFamily="sans-serif"
            fontSize="1.7rem"
            fontWeight="100"
            letterSpacing="0.1rem"
            margin="26px 0"
          >
            lack of inspiration? take a look at our homepage!
          </Typography>
        </Box>
      ) : (
        <>
          <Box
            component="div"
            sx={{
              background: "#fffef1",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              padding: "3rem",
            }}
          >
            <Typography
              variant="h1"
              color="#044606"
              fontFamily="Noto Serif"
              fontSize="3.5rem"
            >
              shopping bag ({cartItemCount})
            </Typography>
          </Box>
          <Box
            component="div"
            sx={{
              width: "523px",
              padding: "30px",
              display: "flex",
              flexFlow: "row nowrap",
              alignItems: "baseline",
              justifyContent: "space-between",
            }}
          >
            {/* FORM */}
            <Box component="form" sx={{ maxWidth: 523 }}>
              <Box component="div">
                <StyledStack direction="row">
                  <Typography
                    variant="h3"
                    color="#044606"
                    fontSize="25px"
                    fontWeight="500"
                  >
                    subtotal
                  </Typography>

                  <Typography
                    variant="body1"
                    color="green"
                    fontSize="40px"
                    fontWeight="400"
                  >
                    {totalAmount} €
                  </Typography>
                </StyledStack>
                <Typography
                  component="div"
                  variant="body1"
                  color="#044606"
                  sx={{
                    fontSize: "16px",
                    lineHeight: "1.14",
                    margin: "1em 0",
                    display: "block",
                    textTransform: "lowercase",
                  }}
                >
                  tax included and shipping calculated at checkout
                </Typography>

                <Box
                  component="div"
                  sx={{ margin: "3rem 2rem" }}
                  onClick={toggleDrawer(false)}
                >
                  <Link to="/order" style={{ textDecoration: "none" }}>
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{
                        backgroundColor: "#044606",
                        maxHeight: "65px",
                        minWidth: "463px",
                        borderRadius: "65px",
                        padding: "9px 30px 11px",
                        "&:hover": {
                          backgroundColor: "#044606",
                          border: "solid",
                          borderSize: "1px",
                          borderColor: "#fffef1",
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          textTransform: "lowercase",
                          fontFamily: theme.typography.h6,
                        }}
                      >
                        checkout
                      </Typography>
                    </Button>
                  </Link>
                </Box>
                <Box
                  component="div"
                  sx={{
                    maxWidth: 463,
                    margin: "auto 2rem",
                  }}
                >
                  {cartProducts?.map((cartItem) => (
                    <Card elevation={0} sx={{ marginBottom: "20px" }}>
                      <Box
                        component="div"
                        sx={{
                          maxWidth: 463,
                          backgroundColor: "#0446060f",
                          borderRadius: "18px",
                        }}
                      >
                        <CardMedia
                          component="img"
                          image={cartItem.image}
                          alt={cartItem.title}
                          sx={{
                            width: 363,
                            height: 363,
                            margin: "0 auto",
                          }}
                        />
                      </Box>

                      <CardContent>
                        <Box component="div" sx={{ marginTop: "13px" }}>
                          <Grid container>
                            <Grid item xs={8}>
                              <Typography
                                component="div"
                                variant="h5"
                                color="#044606"
                                fontSize="26px"
                                fontWeight="700"
                                letterSpacing="0.06rem"
                              >
                                {cartItem.title}
                              </Typography>
                            </Grid>
                            <Grid
                              item
                              xs={4}
                              sx={{
                                width: "40px",
                                height: "40px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <Paper
                                sx={{
                                  position: "relative",
                                  left: "50px",
                                  bottom: "15px",
                                  borderRadius: "50px",
                                }}
                              >
                                <IconButton
                                  sx={{ cursor: "pointer", color: "black" }}
                                  aria-label="delete item"
                                  onClick={() => removeItemFromCart(cartItem)}
                                >
                                  <CloseIcon
                                    fontSize="medium"
                                    sx={{ color: "#044606" }}
                                  />
                                </IconButton>
                              </Paper>
                            </Grid>
                          </Grid>
                        </Box>
                        <Box component="div" sx={{ marginTop: "13px" }}>
                          <Grid container>
                            <Grid item xs={8}>
                              <Typography
                                variant="h4"
                                color="#044606"
                                fontSize="1.9rem"
                                fontWeight="300"
                                letterSpacing="0.1rem"
                                marginTop="15px"
                              >
                                {cartItem.price} €
                              </Typography>
                              {/* {cartItem.sizes.map(
                                (size, index) =>
                                  selectedSize === size? ( */}
                              <Typography
                                // key={index}
                                variant="h4"
                                color="#044606"
                                fontSize="1.7rem"
                                fontWeight="300"
                                letterSpacing="0.1rem"
                                marginTop="15px"
                              >
                                size: {cartItem.selectedSize}
                              </Typography>
                              {/* )
                              )} */}
                            </Grid>

                            <Grid item xs={4}>
                              <Paper
                                sx={{
                                  width: "150px",
                                  height: "50px",
                                  borderRadius: "25px",
                                }}
                              >
                                <Stack
                                  direction="row"
                                  display="flex"
                                  alignItems="center"
                                  justifyContent="center"
                                >
                                  <IconButton
                                    onClick={() =>
                                      increaseCartQuantity(cartItem)
                                    }
                                    sx={{ padding: "1px, 6px" }}
                                  >
                                    <AddIcon
                                      fontSize="medium"
                                      sx={{ color: "#044606" }}
                                    />
                                  </IconButton>

                                  <Typography
                                    component="div"
                                    variant="subtitle1"
                                    color="#044606"
                                    fontSize="2rem"
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                    sx={{ width: "50px", height: "50px" }}
                                  >
                                    {cartItem.cartQuantity}
                                  </Typography>
                                  <IconButton
                                    onClick={() =>
                                      decreaseCartQuantity(cartItem)
                                    }
                                    sx={{ padding: "1px, 6px" }}
                                  >
                                    <RemoveIcon
                                      fontSize="medium"
                                      sx={{ color: "#044606" }}
                                    />
                                  </IconButton>
                                </Stack>
                              </Paper>
                            </Grid>
                          </Grid>
                        </Box>
                      </CardContent>
                    </Card>
                  ))}
                </Box>
              </Box>
            </Box>
          </Box>
        </>
      )}
    </div>
  );
}

export default CartList;
