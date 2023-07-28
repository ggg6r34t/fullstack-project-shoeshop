import { Box, Container, Grid, Paper, Stack, Typography } from "@mui/material";

import banner from "../../assets/background-faq_1200x.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import ProductOrderList from "../order/ProductOrderList";
import { useEffect } from "react";

import { fetchOder } from "../../redux/thunk/orders";
import { userActions } from "../../redux/slices/user";

function AccountPage() {
  const orderList = useSelector((state: RootState) => state.order.orders);
  const userDetail = useSelector(
    (state: RootState) => state.users.userInformation
  );

  const fetchDispatch = useDispatch<AppDispatch>();
  const functionDispatch = useDispatch();

  const navigate = useNavigate();

  function handleLogOut() {
    functionDispatch(userActions.logOut());
    navigate("/account/login");
  }

  useEffect(() => {
    if (userDetail) {
      fetchDispatch(fetchOder(userDetail._id));
    }
  }, [fetchDispatch, userDetail]);

  return (
    <div>
      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          padding: "0 18px",
          margin: "220px 184px 80px",
        }}
      >
        <Grid container>
          <Grid item md={1.8}>
            <Box component="div" width="200px">
              <Paper
                sx={{
                  backgroundColor: "#fffef1",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  maxWidth: "200px",
                  minHeight: "688px",
                }}
              >
                <Box
                  component="div"
                  sx={{ flexGrow: 1, margin: "60px 0 40px" }}
                >
                  <Link to="/account" style={{ textDecoration: "none" }}>
                    <Typography
                      color="#044606"
                      fontFamily="Noto Serif"
                      fontSize="1.2rem"
                      textTransform="lowercase"
                      margin={2}
                    >
                      orders
                    </Typography>
                  </Link>
                  <Link
                    to="/account/details"
                    style={{ textDecoration: "none" }}
                  >
                    <Typography
                      color="#044606"
                      fontFamily="Noto Serif"
                      fontSize="1.2rem"
                      textTransform="lowercase"
                      m={2}
                    >
                      my details
                    </Typography>
                  </Link>
                </Box>
                <Box
                  component="div"
                  sx={{ cursor: "pointer" }}
                  onClick={handleLogOut}
                >
                  <Stack
                    direction="row"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      color="#044606"
                      fontFamily="Noto Serif"
                      fontSize="1.2rem"
                      textTransform="lowercase"
                      m={2}
                    >
                      Log out
                    </Typography>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.99723 1H1V13H7M10 10L13 7L10 4M4.33333 6.99723H13"
                        stroke="#094E5B"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </Stack>
                </Box>
              </Paper>
            </Box>
          </Grid>
          <Grid item md={10}>
            <Box component="div">
              <Paper
                sx={{
                  display: "flex",
                  maxWidth: "80vw",
                  padding: "48px 48px",
                }}
              >
                <Stack>
                  <Box component="div">
                    <Typography
                      variant="h1"
                      component="h1"
                      color="#044606"
                      fontFamily="Noto Serif"
                      fontSize="4rem"
                      textTransform="lowercase"
                      marginBottom="35px"
                    >
                      Orders
                    </Typography>
                  </Box>
                  {orderList.length === 0 ? (
                    <Box component="div">
                      <Typography
                        color="#044606"
                        sx={{
                          mt: "16px",
                        }}
                      >
                        You haven't placed any order yet.
                      </Typography>
                    </Box>
                  ) : (
                    orderList.map((orderItem) => (
                      <Box component="div">
                        <ProductOrderList orderItem={orderItem} />
                      </Box>
                    ))
                  )}
                </Stack>
              </Paper>
              <Paper
                sx={{
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "flex-start",
                  backgroundImage: `url(${banner})`,
                  backgroundSize: "100% 100%",
                  backgroundRepeat: "no-repeat",
                  backdropFilter: "blur(10px)",
                  maxWidth: "80vw",
                  minHeight: "120px",
                  p: "20px 20px",
                  mt: 2,
                }}
              >
                <Box
                  component="div"
                  sx={{
                    display: "flex",
                    alignContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Stack direction="row">
                    <Box
                      component="div"
                      sx={{
                        display: "flex",
                        alignContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        variant="h1"
                        component="h1"
                        color="#fff"
                        fontSize="67px"
                        fontWeight="700"
                        textTransform="lowercase"
                      >
                        faq
                      </Typography>
                    </Box>

                    <Box
                      component="div"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        variant="h6"
                        fontFamily="sans-serif"
                        fontWeight="300"
                        color="#fff"
                        sx={{
                          ml: "8px",
                        }}
                      >
                        about us & delivery
                      </Typography>
                    </Box>
                  </Stack>
                </Box>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default AccountPage;
