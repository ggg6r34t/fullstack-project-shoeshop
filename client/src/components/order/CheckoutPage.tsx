import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Box,
  Button,
  ButtonBase,
  CardMedia,
  Checkbox,
  Container,
  Divider,
  // FormControl,
  Grid,
  MenuItem,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import AccountCircle from "@mui/icons-material/AccountCircle";
import styled from "styled-components";

import crest from "../../assets/family_crest.png";
import { theme } from "../theme/theme";
import { RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../redux/slices/cart";
import { BASE_URL } from "../../api/api";

const StyledTextField = styled(TextField)`
  & .MuiFormLabel-root {
    color: #04460675;
  }
  & .MuiInputLabel-root {
    color: #04460675 !important;
  }

  & .MuiInputBase-root {
    color: #044606ad;
  }

  & .MuiOutlinedInput-notchedOutline {
    border: 2px solid;
    border-radius: 20px;
    border-color: #04460675 !important;
  }

  & .Mui-focused fieldset {
    border-color: #04460675 !important;
  }
`;

const StyledTextFieldWidth = styled(TextField)`
  & .MuiFormLabel-root {
    color: #04460675;
  }
  & .MuiInputLabel-root {
    color: #04460675 !important;
  }

  & .MuiInputBase-root {
    color: #044606ad;
  }

  & .MuiOutlinedInput-notchedOutline {
    width: 231px;
    border: 2px solid;
    border-radius: 20px;
    border-color: #04460675 !important;
  }

  & .Mui-focused fieldset {
    border-color: #04460675 !important;
  }
`;

const StyledStack = styled(Stack)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const countries = [
  { value: "United Kingdom", label: "United Kingdom" },
  { value: "Italy", label: "Italy" },
  { value: "Spain", label: "Spain" },
  { value: "Czech Republic", label: "Czechia" },
  { value: "Croatia", label: "Croatia" },
  { value: "Albania", label: "Albania" },
  { value: "Andorra", label: "Andorra" },
  { value: "Bosnia And Herzegovina", label: "Bosnia & Herzegovina" },
  { value: "Bulgaria", label: "Bulgaria" },
  { value: "Croatia", label: "Croatia" },
  { value: "Cyprus", label: "Cyprus" },
  { value: "Czech Republic", label: "Czechia" },
  { value: "Denmark", label: "Denmark" },
  { value: "Estonia", label: "Estonia" },
  { value: "Finland", label: "Finland" },
  { value: "Greece", label: "Greece" },
  { value: "Hungary", label: "Hungary" },
  { value: "Iceland", label: "Iceland" },
  { value: "Ireland", label: "Ireland" },
  { value: "Italy", label: "Italy" },
  { value: "Latvia", label: "Latvia" },
  { value: "Liechtenstein", label: "Liechtenstein" },
  { value: "Lithuania", label: "Lithuania" },
  { value: "Luxembourg", label: "Luxembourg" },
  { value: "Malta", label: "Malta" },
  { value: "Moldova", label: "Moldova" },
  { value: "Monaco", label: "Monaco" },
  { value: "Montenegro", label: "Montenegro" },
  { value: "Netherlands", label: "Netherlands" },
  { value: "North Macedonia", label: "North Macedonia" },
  { value: "Norway", label: "Norway" },
  { value: "Portugal", label: "Portugal" },
  { value: "Romania", label: "Romania" },
  { value: "Serbia", label: "Serbia" },
  { value: "Slovakia", label: "Slovakia" },
  { value: "Slovenia", label: "Slovenia" },
  { value: "Spain", label: "Spain" },
  { value: "Sweden", label: "Sweden" },
  { value: "United Kingdom", label: "United Kingdom" },
  { value: "Vatican City", label: "Holy See (Vatican City State)" },
];

function OrderPage() {
  const cartProduct = useSelector((state: RootState) => state.cart.cartList);
  const totalAmount = useSelector((state: RootState) => state.cart.totalAmount);

  const isLogin = useSelector((state: RootState) => state.users.isLogin);
  const userDetail = useSelector(
    (state: RootState) => state.users.userInformation
  );

  const navigate = useNavigate();

  const dispatch = useDispatch();

  function handleCheckout() {
    const token = userDetail?.token;
    const url = `${BASE_URL}/orders/${userDetail?._id}`;

    axios
      .post(url, cartProduct, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          alert("Thanks for shopping with us.");

          // clear cart/order items
          dispatch(cartActions.checkOut());

          // redirect to user account
          navigate("/account");
        }
      })
      .catch((err) => {
        if (err.response.status === 500) {
          alert("Please log in to make an order.");
        }
      });
  }
  return (
    <div>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={6} sx={{ paddingTop: "60px", paddingRight: "60px" }}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Box
                component="div"
                sx={{
                  display: "flex",
                  alignItem: "center",
                  justifyContent: "center",
                  paddingBottom: "30px",
                }}
              >
                <Box component="div" maxWidth="100px">
                  <CardMedia
                    component="img"
                    height="115px"
                    image={crest}
                    alt="crest-image"
                  />
                </Box>
                <Typography
                  variant="h1"
                  component="div"
                  fontFamily="playfair display"
                  fontSize="1.8rem"
                  fontWeight="700"
                  sx={{
                    color: "black",
                    margin: "auto",
                    marginLeft: "20px",
                  }}
                >
                  WILLIAM & HARRISON
                </Typography>
              </Box>
            </Link>
            <Box
              // component="form"
              // noValidate
              // autoComplete="off"
              maxWidth="555px"
              sx={{
                "& .MuiTextField-root": { display: "flex" },
              }}
            >
              <Box component="div">
                {isLogin ? (
                  <>
                    <Typography
                      variant="h1"
                      component="h1"
                      color="#044606"
                      align="left"
                      fontFamily="Noto Serif"
                      fontSize="2.5rem"
                      textTransform="lowercase"
                    >
                      contact
                    </Typography>
                    <Stack
                      direction="row"
                      spacing={2}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        margin: "20px auto",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          backgroundColor: "#04460620",
                          borderRadius: "8px",
                        }}
                      >
                        <AccountCircle sx={{ fontSize: "50px" }} />
                      </Box>
                      <Box component="div">
                        <Typography color="#044606">
                          John Doe (john@)williamandharrison.com
                        </Typography>
                        <Typography color="#044606" fontWeight="700">
                          Log out
                        </Typography>
                      </Box>
                    </Stack>
                    <Stack
                      direction="row"
                      sx={{ display: "flex", alignItems: "center" }}
                    >
                      <Checkbox
                        sx={{
                          borderRadius: "0",
                          "&.PrivateSwitchBase-root": {
                            color: "#044606",
                          },
                        }}
                      />
                      <Typography color="#044606">
                        Keep me up to date on news and offers
                      </Typography>
                    </Stack>
                  </>
                ) : (
                  <>
                    <Stack
                      direction="row"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography
                        variant="h1"
                        component="h1"
                        color="#044606"
                        align="left"
                        fontFamily="Noto Serif"
                        fontSize="2.5rem"
                        textTransform="lowercase"
                      >
                        contact
                      </Typography>
                      <Typography
                        sx={{
                          color: "#044606",
                          marginTop: "20px",
                        }}
                      >
                        Already have an account?
                        <Link
                          to="/account/login"
                          style={{
                            color: "#044606",
                            textDecoration: "none",
                          }}
                        >
                          <Box
                            component="span"
                            sx={{ fontWeight: "700", marginLeft: "8px" }}
                          >
                            Log in
                          </Box>
                        </Link>
                      </Typography>
                    </Stack>

                    <StyledTextField
                      fullWidth
                      id="email"
                      name="email"
                      label="email"
                      margin="normal"
                      type="email"
                      variant="outlined"
                      required
                    />
                    <Stack
                      direction="row"
                      sx={{ display: "flex", alignItems: "center" }}
                    >
                      <Checkbox
                        sx={{
                          borderRadius: "0",
                          "&.PrivateSwitchBase-root": {
                            color: "#044606",
                          },
                        }}
                      />
                      <Typography color="#044606">
                        Keep me up to date on news and offers
                      </Typography>
                    </Stack>
                  </>
                )}
              </Box>
              <Typography
                variant="h1"
                component="h1"
                color="#044606"
                align="left"
                fontFamily="Noto Serif"
                fontSize="2.5rem"
                textTransform="lowercase"
                sx={{ paddingTop: "50px", paddingBottom: "10px" }}
              >
                shipping address
              </Typography>
              <StyledTextField
                fullWidth
                id="select-country"
                select
                name="country"
                label="country/region"
                defaultValue="Netherlands"
                margin="normal"
                type="country"
                variant="outlined"
                required
              >
                {countries.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </StyledTextField>
              <Grid
                container
                spacing={2}
                sx={{ display: "flex", flexDirection: "row" }}
              >
                <Grid item xs={6} md={6}>
                  <StyledTextFieldWidth
                    id="first name"
                    name="first name"
                    label="first name"
                    margin="normal"
                    type="first name"
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={6} md={6}>
                  <StyledTextFieldWidth
                    id="last name"
                    name="last name"
                    label="last name"
                    margin="normal"
                    type="last name"
                    variant="outlined"
                    required
                  />
                </Grid>
              </Grid>
              <StyledTextField
                fullWidth
                id="company"
                name="company"
                label="company (optional)"
                margin="normal"
                type="company"
                variant="outlined"
              />
              <StyledTextField
                disabled
                fullWidth
                id="address"
                name="address"
                label="address"
                margin="normal"
                type="address"
                variant="outlined"
                required
              />
              <StyledTextField
                fullWidth
                id="apartment"
                name="apartment"
                label="apartment, suite, etc (optional)"
                margin="normal"
                type="apartment"
                variant="outlined"
              />

              <Grid
                container
                spacing={2}
                sx={{ display: "flex", flexDirection: "row" }}
              >
                <Grid item xs={6} md={6}>
                  <StyledTextFieldWidth
                    id="city"
                    name="city"
                    label="city"
                    margin="normal"
                    type="city"
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={6} md={6}>
                  <StyledTextFieldWidth
                    id="postcode"
                    name="postcode"
                    label="postcode"
                    margin="normal"
                    type="postcode"
                    variant="outlined"
                    required
                  />
                </Grid>
              </Grid>

              <StyledTextField
                disabled
                fullWidth
                id="phone"
                name="phone"
                label="phone"
                margin="normal"
                type="phone"
                variant="outlined"
                required
              />
              <Stack
                direction="row"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <Checkbox
                  sx={{
                    borderRadius: "0",
                    "&.PrivateSwitchBase-root": {
                      color: "#044606",
                    },
                  }}
                />
                <Typography color="#044606">
                  Save this information for next time
                </Typography>
              </Stack>
              <Stack direction="row" mt="25px" mb="40px">
                <Box
                  component="div"
                  sx={{
                    flexGrow: 1,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Link to="/" style={{ textDecoration: "none" }}>
                    <Button
                      type="submit"
                      variant="text"
                      sx={{
                        "&:hover": {
                          backgroundColor: "transparent",
                        },
                        "&:active": {
                          backgroundColor: "transparent",
                        },
                      }}
                    >
                      <KeyboardArrowLeftIcon
                        fontSize="small"
                        sx={{ color: "#044606" }}
                      />
                      <Typography
                        sx={{
                          color: "#044606",
                          textTransform: "lowercase",
                          fontFamily: theme.typography.h6,
                          "&.MuiTypography-root": {
                            fontSize: "1rem",
                            fontWeight: "700",
                          },
                        }}
                      >
                        return to cart
                      </Typography>
                    </Button>
                  </Link>
                </Box>
                {/* <FormControl> */}
                <Box component="div">
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      backgroundColor: "#044606",
                      minHeight: "60px",
                      minWidth: "120px",
                      borderRadius: "65px",
                      "&:hover": {
                        backgroundColor: "#044606",
                        border: "solid",
                        borderSize: "1px",
                        borderColor: "#fffef1",
                      },
                    }}
                    onClick={handleCheckout}
                  >
                    <Typography
                      sx={{
                        "&.MuiTypography-root": {
                          fontSize: "1rem",
                          fontWeight: "700",
                        },
                        textTransform: "lowercase",
                        fontFamily: theme.typography.h6,
                      }}
                    >
                      continue to checkout
                    </Typography>
                  </Button>
                </Box>
                {/* </FormControl> */}
              </Stack>
            </Box>
          </Grid>
          <Grid
            item
            xs={6}
            sx={{
              background: "#fffef1",
              borderLeft: "solid",
              borderLeftWidth: "0.5px",
              borderLeftColor: "#04460675",
              paddingTop: "60px",
              paddingLeft: "60px",
            }}
          >
            <Paper
              elevation={0}
              sx={{
                maxWidth: 355,
                background: "#fffef1",
                flexGrow: 1,
                overflow: "hidden",
                marginBottom: "16px",
              }}
            >
              {cartProduct?.map((orderItem) => (
                <Grid container spacing={2} mb="16px">
                  <Grid item>
                    <ButtonBase
                      sx={{
                        width: 85,
                        height: 85,
                        backgroundColor: "#0446060f",
                        border: "solid",
                        borderColor: "#04460675",
                        borderWidth: "0.5px",
                        borderRadius: "8px",
                      }}
                    >
                      <Img src={orderItem.image} alt={orderItem.title} />
                    </ButtonBase>
                  </Grid>
                  <Grid item xs={12} sm container>
                    <Grid item xs>
                      <Stack direction="column">
                        <Typography
                          fontWeight={"bold"}
                          variant="subtitle1"
                          component="div"
                        >
                          {orderItem.title}
                        </Typography>
                        <Typography
                          fontWeight={"bold"}
                          variant="subtitle1"
                          component="div"
                        >
                          {orderItem.selectedSize}
                        </Typography>
                      </Stack>
                    </Grid>

                    <Grid
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Typography variant="subtitle1" component="div">
                        € {orderItem.price}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              ))}
            </Paper>

            <Box
              component="div"
              sx={{
                maxWidth: 355,
                background: "#fffef1",
              }}
            >
              <Divider
                sx={{
                  marginTop: "16px",
                  marginBottom: "16px",
                  color: "#04460675",
                }}
              />
              <StyledStack direction="row">
                <Typography fontStyle="san serif" color="#044606">
                  Subtotal
                </Typography>
                <Typography color="#044606">€ {totalAmount}</Typography>
              </StyledStack>
              <StyledStack direction="row">
                <Typography color="#044606">Shipping</Typography>
                <Typography variant="body2" color="#044606">
                  Free shipping
                </Typography>
              </StyledStack>
              <Divider
                sx={{
                  marginTop: "16px",
                  marginBottom: "16px",
                  color: "#04460675",
                }}
              />
              <StyledStack direction="row">
                <Box component="div">
                  <Typography color="#044606">Total</Typography>
                  <Typography variant="body2" color="#044606">
                    Including €112.75 in taxes
                  </Typography>
                </Box>
                <Typography color="#044606">
                  <Box component="span">EUR</Box> €{totalAmount}
                </Typography>
              </StyledStack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default OrderPage;
